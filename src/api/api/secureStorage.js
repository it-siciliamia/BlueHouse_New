const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(32).toString('hex');
const tokenFilePath = path.resolve("./authTokens.json");

class SecureStorage {
  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
  }

  decrypt(text) {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = textParts.join(':');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  saveTokens(data) {
    try {
      const encrypted = this.encrypt(JSON.stringify(data));
      fs.writeFileSync(tokenFilePath, encrypted, "utf8");
    } catch (error) {
      console.error("Failed to save tokens:", error.message);
    }
  }

  loadTokens() {
    try {
      if (fs.existsSync(tokenFilePath)) {
        const encrypted = fs.readFileSync(tokenFilePath, "utf8");
        const decrypted = this.decrypt(encrypted);
        return JSON.parse(decrypted);
      }
    } catch (error) {
      console.error("Failed to load tokens:", error.message);
    }
    return null;
  }
}

module.exports = new SecureStorage();