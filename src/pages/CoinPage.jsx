import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import ChartAPI from "../apis/ChartAPI";
import "../css/CoinPage.css";
import CoinImage from "../components/CoinImage";
import CoinHeader from "../components/CoinHeader";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        ChartAPI.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        ChartAPI.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        ChartAPI.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        ChartAPI.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (coinData) {
    console.log("COINPAGE", coinData.detail);
  }

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div className="coinPage-container">
        <div className="coinPage-top">
          <CoinHeader data={coinData.detail} />
        </div>

        <div className="chart-container">
          {" "}
          <HistoryChart data={coinData} />
        </div>
        <div className="coin-image">
          <CoinImage data={coinData.detail} />
        </div>
        <div className="coinData-container">
          <CoinData data={coinData.detail} />
        </div>
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
