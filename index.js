const fetch=require('node-fetch')

fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'

  },
  "referrer": "https://coinmarketcap.com/",
  "referrerPolicy": "origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}).then((res)=>res.json())

.then((res)=>console.log(res))
