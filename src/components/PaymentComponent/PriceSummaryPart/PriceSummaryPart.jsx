import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { WithTransLate } from "../../helpers/translating";
import {
  getAddParams,
  getPricePerNight,
  getDayDifference,
  getPaymentType,
  getTotalAmountEuro,
  getTotalAmountCurrency,
} from "../../../redux/dataSearch/dataSearch-selectors";
import {
  setCurrency,
  setExchangeRate,
} from "../../../redux/dataSearch/dataSearch-slice";

import s from "./PriceSummaryPart.module.scss";

const PriceSummaryPart = () => {
  const dispatch = useDispatch();
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [exchangeRateServer, setExchangeRateServer] = useState(null);
  const pricePerNight = useSelector(getPricePerNight);
  const dayDifference = useSelector(getDayDifference);
  const paymentType = useSelector(getPaymentType);
  const { adult, children, room } = useSelector(getAddParams);
  const totalAmountEuro = useSelector(getTotalAmountEuro);
  const totalAmountCurrency = useSelector(getTotalAmountCurrency);

  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });

  const popularCurrencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "GBP", symbol: "£" },
    { code: "JPY", symbol: "¥" },
    { code: "CAD", symbol: "CA$" },
    { code: "AUD", symbol: "AU$" },
    { code: "CHF", symbol: "CHF" },
    { code: "UAH", symbol: "₴" },
    { code: "CNY", symbol: "¥" },
    { code: "SEK", symbol: "kr" },
    { code: "NZD", symbol: "NZ$" },
    { code: "MXN", symbol: "MX$" },
    { code: "SGD", symbol: "S$" },
    { code: "HKD", symbol: "HK$" },
    { code: "NOK", symbol: "kr" },
    { code: "KRW", symbol: "₩" },
    { code: "TRY", symbol: "₺" },
    { code: "INR", symbol: "₹" },
    { code: "RUB", symbol: "₽" },
    { code: "ZAR", symbol: "R" },
    { code: "BRL", symbol: "R$" },
  ];

  const API_KEY01 = "c387761eefc91005f40db998"; // 1500 free requests per month https://app.exchangerate-api.com
  const API_KEY02 = "ed07810753df7f892d787233"; // 1500 free requests per month https://app.exchangerate-api.com

  useEffect(() => {
    const fetchCurrencies = async (key) => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${key}/latest/USD`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const currencyList = popularCurrencies.filter((currency) =>
          data.conversion_rates.hasOwnProperty(currency.code)
        );

        setCurrencies(currencyList);
        setExchangeRateServer(data.conversion_rates);
      } catch (error) {
        console.error(`Error with API key (${key}):`, error.message);
        throw error;
      }
    };

    const fetchWithFallback = async () => {
      try {
        await fetchCurrencies(API_KEY01);
      } catch {
        console.warn("Switching to the backup API key...");
        try {
          await fetchCurrencies(API_KEY02);
        } catch (finalError) {
          console.error("Both API keys failed:", finalError.message);
        }
      }
    };

    fetchWithFallback();
  }, []);

  useEffect(() => {
    if (exchangeRateServer && selectedCurrency) {
      if (selectedCurrency === "EUR") {
        dispatch(setCurrency("€"));
        dispatch(setExchangeRate(1));
      } else {
        const rate = exchangeRateServer[selectedCurrency];
        dispatch(setCurrency(selectedCurrency));
        dispatch(setExchangeRate(rate));
      }
    }
  }, [selectedCurrency, exchangeRateServer, dispatch]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const getCurrencySymbol = (code) => {
    const currency = popularCurrencies.find((cur) => cur.code === code);
    return currency ? currency.symbol : code;
  };

  return (
    <div className={s.container}>
      <div className={s.partBorder}>
        <div className={s.selectorWrapper}>
          <label htmlFor="currency-select" className={s.label}>
            <WithTransLate text="Your Price Summary" />
          </label>
          <select
            id="currency-select"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className={s.select}
          >
            {currencies.map((currency) => (
              <option
                key={currency.code}
                value={currency.code}
                className={s.option}
              >
                {currency.code} - {currency.symbol}
              </option>
            ))}
          </select>
        </div>

        <div className={s.priceWrapper}>
          <h3 className={s.priceTitle}>
            <WithTransLate text="Description" />
          </h3>
          <div className={s.leftPartWrapper}>
            <h3 className={s.priceTitle}>
              <WithTransLate text="Price" />
            </h3>
          </div>
        </div>

        <div
          className={s.priceWrapper}
          style={{ backgroundColor: "rgba(217, 217, 217, 0.2)" }}
        >
          <p style={{ margin: "0", fontSize: isMobile ? "16px" : "18px" }}>
            <WithTransLate
              text={`${room} ${room === 1 ? "room" : "rooms"} x ${
                dayDifference === 1
                  ? `${dayDifference} night`
                  : `${dayDifference} nights`
              }`}
            />
          </p>
          <div className={s.leftPartWrapper}>
            <p
              style={{
                margin: "0",
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "500",
              }}
            >
              <WithTransLate
                text={`€ ${!pricePerNight ? "0.00" : totalAmountEuro}`}
              />
            </p>
          </div>
        </div>

        <div
          className={s.priceWrapper}
          style={{ backgroundColor: "rgba(217, 217, 217, 0.2)" }}
        >
          <div>
            <p style={{ fontSize: isMobile ? "16px" : "18px", margin: "0" }}>
              <WithTransLate text="Property currency" />
            </p>
            <p
              style={{
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "300",
                margin: "0",
              }}
            >
              <WithTransLate
                text={`(in ${selectedCurrency} for ${adult} ${
                  adult === 1 ? "adult" : "adults"
                } ${
                  children === 0
                    ? ""
                    : `and ${children} ${children === 1 ? "child" : "children"}`
                })`}
              />
            </p>
          </div>
          <div className={s.leftPartWrapper}>
            <p
              style={{
                margin: "0",
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "500",
              }}
            >
              <WithTransLate
                text={`${getCurrencySymbol(
                  selectedCurrency
                )} ${totalAmountCurrency}`}
              />
            </p>
          </div>
        </div>

        <div className={s.priceWrapper} style={{ backgroundColor: "#1d3967" }}>
          <p
            style={{
              margin: "0",
              fontSize: isMobile ? "18px" : "20px",
              lineHeight: "1",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            <WithTransLate text="Total" />
          </p>
          <div className={s.leftPartWrapper}>
            <p
              style={{
                margin: "0",
                fontSize: isMobile ? "18px" : "20px",
                lineHeight: "1",
                fontWeight: "500",
                color: "#fff",
              }}
            >
              <WithTransLate
                text={`${getCurrencySymbol(
                  selectedCurrency
                )} ${totalAmountCurrency}${
                  selectedCurrency !== "EUR" ? "*" : ""
                }`}
              />
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: isMobile ? "0 20px" : "0 40px" }}>
        {selectedCurrency !== "EUR" && (
          <p
            style={{
              margin: "0",
              marginBottom: "20px",
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "500",
            }}
          >
            <WithTransLate
              text={`*The price is converted to show you the approximate cost in ${selectedCurrency}. Your card will be charged in € or ISK The exchange rate may change before you pay.`}
            />
          </p>
        )}
        <p
          style={{
            margin: "0",
            fontSize: isMobile ? "16px" : "18px",
            fontWeight: "500",
          }}
        >
          <WithTransLate text="Your card issuer may charge a foreign transaction fee." />
        </p>
      </div>

      <div
        style={{
          backgroundColor: "rgba(217, 217, 217, 0.2)",
          border: "1px solid lightgray",
        }}
      >
        <p
          style={{
            margin: "0",
            paddingTop: "20px",
            paddingLeft: isMobile ? "20px" : "40px",
            paddingRight: isMobile ? "20px" : "40px",
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: "600",
          }}
        >
          <WithTransLate text="How much would it cost to cancel" />
        </p>
        <div className={s.priceWrapper}>
          <p
            style={{
              margin: "0",
              fontSize: isMobile ? "16px" : "20px",
              fontWeight: "500",
            }}
          >
            <WithTransLate text="If you cancel, you’ll pay:" />
          </p>
          <div className={s.leftPartWrapper}>
            <p
              style={{
                margin: "0",
                fontSize: isMobile ? "18px" : "20px",
                fontWeight: "500",
              }}
            >
              <WithTransLate
                text={`${getCurrencySymbol(selectedCurrency)} ${
                  paymentType === "Refundable" ? 0 : totalAmountCurrency
                }`}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSummaryPart;
