# Commodity Prices API (Commodities Price API)

[Commodity Prices API](https://fin2dev.com/commodity-prices-api/) provides real-time and historical commodity prices in JSON format for developers, analytics tools and financial applications.

Access commodity market data including precious metals, industrial metals, energy products and agricultural commodities through a simple REST API.

## Supported Commodity Categories

| Category          | Examples                           |
| ----------------- | ---------------------------------- |
| Precious Metals   | Gold, Silver                       |
| Industrial Metals | Copper, Aluminum, Lithium and more |
| Energy            | Crude Oil, Natural Gas             |
| Agriculture       | Corn, Wheat, Coffee and more       |

## Commodity Prices API

The Commodities Price API by Fin2Dev provides real-time and historical commodity market data in JSON format.

Retrieve commodity prices, daily changes, weekly performance, monthly performance and historical trend information for precious metals, industrial metals, energy products and agricultural commodities.

## Endpoint

```text
https://apidata.fin2dev.com/v1/commodities?key={YOUR_API_KEY}&commodity_name={COMMODITY_NAME}
```

## Parameters

| Name             | Type           | Description                           |
| ---------------- | -------------- | ------------------------------------- |
| key *            | string (query) | Your API key                          |
| commodity_name * | string (query) | Commodity name to retrieve price data |

## Example Request

```text
https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=crude_oil
```

## Example Response

```json
{
  "result": {
    "output": [
      {
        "commodity_name": "crude oil",
        "commodity_unit": "usd/bbl",
        "commodity_price": "63.72",
        "price_change_day": "-1.08",
        "percentage_day": "-1.67%",
        "percentage_week": "3.14%",
        "percentage_month": "-4.50%",
        "percentage_year": "-15.65%",
        "quarter3_25": "65.647",
        "quarter4_25": "67.644",
        "quarter1_26": "63.848",
        "datetime": "2025-08-26T11:23:00.000"
      }
    ]
  }
}
```

## Live Demo

Try the Commodity Prices API directly in your browser.

🚀 [Try Commodity Prices API Demo](https://fin2dev.github.io/Commodity-Prices-API/live-demo/)

Enter your API key, select a commodity and instantly view the JSON response.

## Commodity Examples

<details>
<summary>Gold Price API Example</summary>

Get real-time and historical gold price data in JSON format.

**Example Request**

```text
https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=gold
```

**Example Response**

```json
{
  "result": {
    "output": [
      {
        "commodity_name": "gold",
        "commodity_unit": "usd/t oz",
        "commodity_price": "3367.12",
        "price_change_day": "12.45",
        "percentage_day": "0.37%",
        "datetime": "2025-08-26T11:23:00.000"
      }
    ]
  }
}
```

Learn more: [Gold Price API](https://fin2dev.com/blog/gold-price-api/)

</details>

<details>
<summary>Silver Price API Example</summary>

Get silver price data for financial dashboards, market analysis and commodity tracking tools.

**Example Request**

```text
https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=silver
```

**Example Response**

```json
{
  "result": {
    "output": [
      {
        "commodity_name": "silver",
        "commodity_unit": "usd/t oz",
        "commodity_price": "34.90",
        "price_change_day": "0.21",
        "percentage_day": "0.61%",
        "datetime": "2025-08-26T11:23:00.000"
      }
    ]
  }
}
```

Learn more: [Silver Price API](https://fin2dev.com/blog/silver-price-api/)

</details>

<details>
<summary>Oil Price API Example</summary>

Get crude oil price data including price changes and market performance indicators.

**Example Request**

```text
https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=crude_oil
```

**Example Response**

```json
{
  "result": {
    "output": [
      {
        "commodity_name": "crude oil",
        "commodity_unit": "usd/bbl",
        "commodity_price": "63.72",
        "price_change_day": "-1.08",
        "percentage_day": "-1.67%",
        "datetime": "2025-08-26T11:23:00.000"
      }
    ]
  }
}
```

Learn more: [Oil Price API](https://fin2dev.com/blog/oil-price-api/)

</details>

<details>
<summary>Natural Gas Price API Example</summary>

Get natural gas price data for energy market applications and analytics tools.

**Example Request**

```text
https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=natural_gas
```

**Example Response**

```json
{
  "result": {
    "output": [
      {
        "commodity_name": "natural gas",
        "commodity_unit": "usd/mmbtu",
        "commodity_price": "2.91",
        "price_change_day": "0.04",
        "percentage_day": "1.39%",
        "datetime": "2025-08-26T11:23:00.000"
      }
    ]
  }
}
```

Learn more: [Natural Gas Price API](https://fin2dev.com/blog/natural-gas-price-api/)

</details>

<details>
<summary>Metal Price API Example</summary>

Get industrial metal price data such as copper, aluminum and lithium.

**Example Request**

```text
https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=copper
```

**Example Response**

```json
{
  "result": {
    "output": [
      {
        "commodity_name": "copper",
        "commodity_unit": "usd/lbs",
        "commodity_price": "4.43",
        "price_change_day": "0.03",
        "percentage_day": "0.68%",
        "datetime": "2025-08-26T11:23:00.000"
      }
    ]
  }
}
```

Learn more: [Metal Price API](https://fin2dev.com/blog/metal-price-api/)

</details>

<details>
<summary>Agricultural Commodities Price API Example</summary>

Get agricultural commodity price data such as corn, wheat and coffee.

**Example Request**

```text
https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=corn
```

**Example Response**

```json
{
  "result": {
    "output": [
      {
        "commodity_name": "corn",
        "commodity_unit": "usd/bu",
        "commodity_price": "4.21",
        "price_change_day": "-0.02",
        "percentage_day": "-0.47%",
        "datetime": "2025-08-26T11:23:00.000"
      }
    ]
  }
}
```

Learn more: [Agricultural Commodities Price API](https://fin2dev.com/blog/agricultural-commodities-price-api/)

</details>


## Code Examples

<details>
<summary>Python Example</summary>

```python
import requests

url = "https://apidata.fin2dev.com/v1/commodities"

params = {
    "key": "YOUR_API_KEY",
    "commodity_name": "crude_oil"
}

response = requests.get(url, params=params)

print(response.json())
```

</details>

<details>
<summary>PHP Example</summary>

```php
<?php

$url = 'https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=crude_oil';

$response = file_get_contents($url);

echo $response;

?>
```

</details>

<details>
<summary>JavaScript Example</summary>

```javascript
fetch(
  'https://apidata.fin2dev.com/v1/commodities?key=YOUR_API_KEY&commodity_name=crude_oil'
)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

</details>

---

## Getting Started

Get instant access to commodity market data through a simple JSON API.

🔑 [Get API Access](https://fin2dev.com/pricing/)

📚 [View Documentation](https://fin2dev.com/documentation/#commodities)

---

## Contact

If you have any questions about the API, pricing, data coverage or integration, feel free to contact us.

🌐 [Website](https://fin2dev.com/)

📧 [Contact Form](https://fin2dev.com/contact/)

🐙 [GitHub Profile](https://github.com/fin2dev)

---

## Why Fin2Dev

* Simple JSON APIs
* Historical and real-time data
* Developer-friendly integration
* Fast onboarding
* Transparent pricing
