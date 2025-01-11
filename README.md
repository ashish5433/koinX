# Welcome to KoinX

Here, we are fetching data about cryptocurrencies like **Bitcoin**, **Ethereum**, and **Matic Network** using an API:

**API**: [https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_name}](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_name})  

**Main Entry** : [http://localhost:3000/](http://localhost:3000/)
Or
[https://koinx-d2yf.onrender.com/](https://koinx-d2yf.onrender.com/)

Additionally, we can fetch the **latest data** of any currency from the database, which can be accessed using the following URL:

**Latest Data API**: [http://localhost:<PORT_NUMBER>/api/stats?coin_name=<coin_name>](http://localhost:<PORT_NUMBER>/api/stats?coin_name=<coin_name>)
or
[https://koinx-d2yf.onrender.com/api/stats?coin_name={coin_name}](https://koinx-d2yf.onrender.com/api/stats?coin_name={coin_name})

Moreover, you can also fetch the **deviation** of any currency over its last 100 values:

**Deviation API**: [http://localhost:<PORT_NUMBER>/api/deviation?coin_name=<coin_name>](http://localhost:<PORT_NUMBER>/api/deviation?coin_name=<coin_name>)  
or 
[https://koinx-d2yf.onrender.com/api/deviation?coin_name={coin_name}](https://koinx-d2yf.onrender.com/api/deviation?coin_name=())  
**Note :** Please replace the PORT_NUMBER and coin_name (for the coin you require data)
## Clone the Repository

To clone the repository and run it locally, follow these steps:

1. **Clone the repository** using the following command:
   ```bash
   git clone https://github.com/ashish5433/koinX.git

2. **Navigate to the project directory:** using the following command:
   ```bash
   cd koinX
3. **Install the required dependencies:** using the following command:
   ```bash
   npm install
4. **Set up your environment variables** by creating a .env file and adding your MongoDB URL and any other necessary configuration:
   ```bash
   MONGO_URL=<your_mongo_url>
   PORT=<your_preferred_port>
5. **Run the application:** using the following command:
   ```bash
   node app.js
1. **Visit** [http://localhost:<PORT_NUMBER>](http://localhost:<PORT_NUMBER>) to access the application.
   
