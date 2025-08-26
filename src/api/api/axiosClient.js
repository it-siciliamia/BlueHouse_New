const axios = require("axios");
const fs = require("fs");
const path = require("path");

const tokenFilePath = path.resolve("./authTokens.json");

class AxiosClient {
  constructor() {
    this.baseURL = "https://beds24.com/api/v2";
    this.inviteCode = process.env.BEDS24_INVITE_CODE;
    this.refreshToken = null;
    this.authToken = null;
  }

  // Save tokens to file
  saveTokens(data) {
    try {
      fs.writeFileSync(tokenFilePath, JSON.stringify(data), "utf8");
      console.log("Tokens saved successfully.");
    } catch (error) {
      console.error("Failed to save tokens:", error.message);
    }
  }

  // Load tokens from file
  loadTokens() {
    try {
      if (fs.existsSync(tokenFilePath)) {
        const data = JSON.parse(fs.readFileSync(tokenFilePath, "utf8"));
        this.refreshToken = data.refreshToken || null;
        this.authToken = data.token || null;
        return data;
      }
    } catch (error) {
      console.error("Failed to load tokens:", error.message);
    }
    return null;
  }

  // Get refresh token using invite code
  async getRefreshToken() {
    try {
      console.log("Fetching refresh token...");
      const response = await axios.get(`${this.baseURL}/authentication/setup`, {
        headers: { code: this.inviteCode, deviceName: "MyBookingApp" },
      });

      if (!response.data?.refreshToken) throw new Error("Invalid refresh token response");

      this.refreshToken = response.data.refreshToken;
      this.saveTokens(response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting refresh token:", error.response?.data || error.message);
      throw error;
    }
  }

  // Get auth token using refresh token
  async getAuthToken() {
    if (!this.refreshToken) {
      console.warn("No stored refresh token, retrieving a new one...");
      await this.getRefreshToken();
    }

    try {
      console.log("Fetching auth token...");
      const response = await axios.get(`${this.baseURL}/authentication/token`, {
        headers: { refreshToken: this.refreshToken },
      });

      if (!response.data?.token) throw new Error("Invalid auth token response");

      this.authToken = response.data.token;
      this.saveTokens({ refreshToken: this.refreshToken, token: this.authToken });
      return response.data;
    } catch (error) {
      console.error("Error getting auth token:", error.response?.data || error.message);
      throw error;
    }
  }

  // Initialize authentication (loads from file or requests new tokens)
  async initializeAuth() {
    this.loadTokens();

    if (!this.authToken) {
      console.log("No valid auth token found. Refreshing...");
      await this.getAuthToken();
    }

    console.log("Authentication initialized.");
    return { token: this.authToken };
  }

  // Create Axios client with auth token
  async createClient() {
    if (!this.authToken) await this.initializeAuth();

    return axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: { token: this.authToken },
    });
  }

  // Generic GET request
  async get(url) {
    const client = await this.createClient();
    try {
      const response = await client.get(url);
      return response.data;
    } catch (error) {
      console.error("GET request failed:", error.response?.data || error.message);
      throw error;
    }
  }

  // Generic POST request
  async post(url, data) {
    const client = await this.createClient();
    try {
      const response = await client.post(url, data);
      return response.data;
    } catch (error) {
      console.error("POST request failed:", error.response?.data || error.message);
      throw error;
    }
  }
}

module.exports = new AxiosClient();
