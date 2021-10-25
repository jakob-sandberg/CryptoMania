import axios from "axios";

const get = async (endpoint) => {
  const data = await axios.get(endpoint);
  return data;
};

export const getCoinById = async (id) => {
  const data = await get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return data.data;
};

export const getCoinList = async () => {
  const data = await get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );

  return data.data;
};

export const getFeed = async () => {
  const data = await get(
    "https://api.lunarcrush.com/v2?data=feeds&key=mfjv2d5g55bju5mw6uwjrg"
  );

  return data.data;
};

export const getAdCrypto = async () => {
  const data = await get(
    "https://api.coingecko.com/api/v3/exchanges/crypto_com"
  );

  return data.data;
};

export const getTrendingList = async () => {
  const data = await get("https://api.coingecko.com/api/v3/search/trending");

  return data.data;
};
