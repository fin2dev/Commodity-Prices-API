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

Get your API key and start using the Commodity Prices API in minutes.

🔑 API Access & Pricing
https://fin2dev.com/pricing/

📚 Documentation
https://fin2dev.com/documentation/#commodities

---

## Related Resources

🌐 Website
https://fin2dev.com/

📝 Blog
https://fin2dev.com/blog/

📖 API Documentation
https://fin2dev.com/documentation/

---

## Contact

If you have any questions about the API, pricing, data coverage or integration, feel free to contact us.

🌐 Website
https://fin2dev.com/

📧 Contact Form
https://fin2dev.com/contact/

🐙 GitHub Organization
https://github.com/fin2dev

---

## Why Fin2Dev

* Simple JSON APIs
* Historical and real-time data
* Developer-friendly integration
* Fast onboarding
* Transparent pricing
