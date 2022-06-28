import React from "react";

const Coins = ({ symb, img, name, curr_pr, mkt, tvol, chng }) => {
  return (
    <div className="coin-component">
      <div className="coin-data">
        <div className="coin">
          <img src={img} alt="error" />
          <h3 className="name">{name}</h3>
          <h3 className="symbol">{symb}</h3>
        </div>
        <div className="coin-value">
          <h3 className="coin-price">${curr_pr}</h3>
          <h3 className="coin-volume">${tvol}</h3>
          <h3 className={chng >= 0 ? "coin-percent green" : "coin-percent red"}>
            {chng.toFixed(2)}%
          </h3>
          <h3 className="coin-marketcap">Mkt Cap:${mkt}</h3>
        </div>
      </div>
    </div>
  );
};

export default Coins;
