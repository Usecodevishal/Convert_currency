import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  //const [data, setData] = useState({});

  const arrOfObj = {
    "AFN": 1.20,
    "ALL": 0.69,
    "DZD": 0.53,
    "EUR": 88.42,
    "AOA": 0.14,
    "XCD": 42.12,
    "ARS": 0.78,
    "AMD": 0.15,
    "AUD": 52.32,
    "AZN": 45.89,
    "BSD": 88.15,
    "BHD": 207.83,
    "BDT": 0.86,
    "BBD": 42.12,
    "BYN": 34.96,
    "BZD": 42.12,
    "XOF": 0.14,
    "BTN": 1.18,
    "BOB": 10.16,
    "BAM": 45.89,
    "BWP": 7.70,
    "BRL": 12.76,
    "BND": 52.32,
    "BGN": 45.22,
    "BIF": 0.043,
    "KHR": 0.018,
    "XAF": 0.14,
    "CAD": 62.81,
    "CLP": 0.095,
    "CNY": 11.20,
    "COP": 0.020,
    "KMF": 0.21,
    "CDF": 0.042,
    "CRC": 0.12,
    "HRK": 11.73,
    "CUP": 2.08,
    "CZK": 3.45,
    "DKK": 11.88,
    "DJF": 0.50,
    "DOP": 1.56,
    "USD": 75.11,
    "EGP": 4.78,
    "ERN": 4.73,
    "SZL": 4.99,
    "ETB": 1.86,
    "FJD": 36.29,
    "GMD": 1.44,
    "GEL": 21.25,
    "GHS": 10.32,
    "GTQ": 9.70,
    "GNF": 0.74,
    "GYD": 0.36,
    "HTG": 0.72,
    "HNL": 3.06,
    "HUF": 0.25,
    "ISK": 0.61,
    "INR": 1,
    "IDR": 0.0053,
    "IRR": 0.0018,
    "IQD": 0.051,
    "ILS": 23.28,
    "JMD": 0.50,
    "JPY": 0.68,
    "JOD": 105.84,
    "KZT": 0.18,
    "KES": 0.68,
    "KWD": 248.28,
    "KGS": 0.89,
    "LAK": 0.0081,
    "LBP": 0.049,
    "LSL": 4.99,
    "LRD": 0.37,
    "LYD": 15.97,
    "CHF": 82.50,
    "MKD": 1.51,
    "MGA": 0.019,
    "MWK": 0.099,
    "MYR": 18.25,
    "MVR": 4.83,
    "MRU": 1.84,
    "MUR": 1.89,
    "MXN": 3.53,
    "MDL": 4.36,
    "MNT": 0.026,
    "MAD": 8.44,
    "MZN": 1.00,
    "MMK": 0.053,
    "NAD": 4.99,
    "NPR": 0.62,
    "NZD": 49.66,
    "NIO": 2.20,
    "NGN": 0.19,
    "NOK": 8.31,
    "OMR": 194.74,
    "PKR": 0.45,
    "PAB": 88.15,
    "PGK": 24.88,
    "PYG": 0.010,
    "PEN": 20.39,
    "PHP": 1.56,
    "PLN": 19.28,
    "QAR": 20.56,
    "RON": 17.65,
    "RUB": 0.99,
    "RWF": 0.074,
    "WST": 24.41,
    "STN": 3.54,
    "SAR": 20.00,
    "RSD": 0.77,
    "SCR": 4.79,
    "SLL": 0.0089,
    "SGD": 52.32,
    "SBD": 9.15,
    "SOS": 0.13,
    "ZAR": 4.99,
    "SSP": 0.19,
    "KRW": 0.066,
    "SSP": 0.19,
    "LKR": 0.38,
    "SDG": 0.16,
    "SRD": 4.03,
    "SEK": 8.61,
    "CHE": 82.50,
    "CHW": 82.50,
    "SYP": 0.037,
    "TWD": 2.63,
    "TJS": 6.54,
    "TZS": 0.032,
    "THB": 2.48,
    "TOP": 33.15,
    "TTD": 10.31,
    "TND": 25.34,
    "TRY": 10.29,
    "TMT": 21.40,
    "UGX": 0.021,
    "UAH": 2.63,
    "AED": 20.42,
    "GBP": 103.65,
    "USN": 75.11,
    "UYU": 1.97,
    "UZS": 0.007,
    "VUV": 0.79,
    "VES": 0.00021,
    "VND": 0.0032,
    "YER": 0.30,
    "ZMW": 3.76,
    "ZWL": 0.27
  }

  


  // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  // useEffect(() => {
  //   fetch(
  //     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => setData(res[currency]));
  // }, [currency]);
  //  console.log(data);
  return arrOfObj;
}

export default  useCurrencyInfo ;
