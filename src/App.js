import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Coins from "./coins";
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const App = () => {
  const srch = useRef();
  const [data, setData] = useState([]);
  const [searchCrypto, setSearch] = useState("");
  const fetchData = async () => {
    const resp = await axios.get(url);
    const dataa = resp.data;
    searchCryptoName(dataa);
  };
  const searchCryptoName = (dataa) => {
    const crypto = dataa.filter((coin) =>
      coin.name.toLowerCase().includes(searchCrypto.toLowerCase())
    );
    setData(crypto);
  };
  console.log("render");
  useEffect(() => {
    fetchData();
    // searchCryptoName();
  }, [searchCrypto]);
  return (
    <div className="body">
      <form className="Search-form">
        <label htmlFor="search">
          <h2>Search for a Currency</h2>
        </label>
        <input
          type="text"
          ref={srch}
          id="name"
          placeholder="Search"
          onChange={() => {
            setSearch(srch.current.value);
          }}
        />
      </form>
      <div className="coins">
        {data.map((crypto) => {
          const {
            id,
            symbol,
            image,
            name,
            current_price,
            market_cap,
            total_volume,
            price_change_percentage_24h,
          } = crypto;
          return (
            <Coins
              key={id}
              symb={symbol}
              img={image}
              name={name}
              curr_pr={current_price}
              mkt={market_cap}
              tvol={total_volume}
              chng={price_change_percentage_24h}
            ></Coins>
          );
        })}
      </div>
    </div>
  );
};

export default App;
