import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendingCoins from "./TrendingCoins";

const TrendingList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setCoins(res.data.coins);
        // console.log("trending", res.data.coins);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {coins &&
        coins.map((coin) => {
          return (
            <TrendingCoins
              id={coin.item.id}
              key={coin.item.id}
              name={coin.item.name}
              price={coin.item.price_btc}
              symbol={coin.item.symbol}
              image={coin.item.large}
              market_cap_rank={coin.item.market_cap_rank}
            />
          );
        })}
    </div>
  );
};

export default TrendingList;
