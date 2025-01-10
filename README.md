# Welcome to KoinX

Here, we are fetching data about cryptocurrencies like **Bitcoin**, **Ethereum**, and **Matic Network** using an API:

**API**: [https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_name}](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_name})

Additionally, we can fetch the **latest data** of any currency from the database, which can be accessed using the following URL:

**Latest Data API**: [localhost:<PORT_NUMBER>/api/stats?coin_name=<coin_name>](http://localhost:<PORT_NUMBER>/api/stats?coin_name=<coin_name>)

Moreover, you can also fetch the **deviation** of any currency over its last 100 values:

**Deviation API**: [localhost:<PORT_NUMBER>/api/deviation?coin_name=<coin_name>](http://localhost:<PORT_NUMBER>/api/deviation?coin_name=<coin_name>)

