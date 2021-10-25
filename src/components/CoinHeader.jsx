import React from "react";

const CoinHeader = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div>
          <h1>{data.name}</h1>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinHeader;
