const API_URL = "https://api.coinlore.net/api/tickers/";

const getCoins = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    const coins = json.data;

    const toReturn = coins.map((entry) => {
      const v = {
        name: entry.name,
        price: entry.price_usd,
        symbol: entry.symbol,
      };

      return v;
    });

    return toReturn;
  } catch (error) {
    console.log(error);
  }
};

export { getCoins };
