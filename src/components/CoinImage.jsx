import React from "react";
import "../css/CoinPage.css";

const CoinImage = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div>
          <img className="crypto-image" src={data.image} />
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinImage;
