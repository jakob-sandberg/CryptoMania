import React from "react";
import "../css/Header.css";
import { useQuery } from "react-query";
import { getAdCrypto } from "../apis/API";

const Header = () => {
  const { data, isLoading, isError, error } = useQuery("ad", getAdCrypto);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      {isError && <div>{error}</div>}
      {isLoading && <p>wait</p>}

      {data && (
        <div className="Ad-container">
          <div className="left-container">
            <div className="content-container">
              <p className="ad-text">
                START TRADING TODAY AT <br /> {data.name}
              </p>
              <button
                className="ad-button"
                onClick={() => openInNewTab(data.url)}
              >
                Trade now
              </button>
            </div>
          </div>
          <p className="info">advertisement</p>
          <div className="right-container">
            <img className="ad-image" src={data.image} />
            <p className="ad-data">{data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
