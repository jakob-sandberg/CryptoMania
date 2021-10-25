import React from "react";
import "../css/CoinData.css";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="data-container">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="coinData-text">Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="coinData-text">Total Supply</span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="coinData-text">Volume(24H)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="coinData-text">high 24h</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="coinData-text">Circulating Supply</span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="coinData-text">low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
