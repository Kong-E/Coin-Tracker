import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true); // 로딩 여부
  const [clicked, setClicked] = useState(false); // Calculate 클릭 감지

  const [selectedOption, setSelectedOption] = useState("See the Coin List"); //
  const [coins, setCoins] = useState([]); // 코인 목록 설정

  const [value, setValue] = useState(""); // 코인 이름 input 감지
  const [number, setNumber] = useState(""); // 자산 input 감지

  const [name, setName] = useState(); // 확정된 코인의 이름
  const [price, setPrice] = useState(); // 확정된 코인의 가격
  const [asset, setAsset] = useState(); // 확정된 나의 자산

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    setName(value);
    setAsset(number);
    coins.forEach(
      (coin) => coin.name === value && setPrice(coin.quotes.USD.price)
    );
  };

  const handleCoinSelect = (e) => {
    const value = e.target.value;
    const [name, priceString] = value.split(" (");
    const price = parseFloat(priceString.match(/\$(\d+\.\d+)/)[1]);
    setName(name);
    setValue(name);
    setPrice(price);
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  console.log(name);
  return (
    <div className={styles.body}>
      <h1>🪙 Coin Calculator 🪙</h1>

      {/*coin list*/}
      {loading ? "" : <h2>There are {coins.length}🪙s...</h2>}
      {loading ? (
        <strong>로딩 중...</strong>
      ) : (
        <select value={selectedOption} onChange={handleCoinSelect}>
          <option>See the Coin List</option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(5)}{" "}
              USD
            </option>
          ))}
        </select>
      )}

      {/*type*/}
      <input
        value={name ? name : value}
        placeholder="Type the name"
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <input
        value={number}
        placeholder="Type your own money"
        onChange={(e) => setNumber(e.target.value)}
        type="number"
      />
      <input value="Submit" type="button" onClick={onSubmit} />

      {name && asset
        ? coins.filter((coin) => coin.name === name && asset)[0] && (
            <div key={coins[0].id}>
              <span>
                You select:&nbsp;
                {coins[0].name} ({coins[0].symbol}): $
                {coins[0].quotes.USD.price.toFixed(5)} USD
              </span>
              <button
                onClick={() => setClicked(true)}
                style={{ marginLeft: 5 }}
              >
                Calculate
              </button>
            </div>
          )
        : null}

      {clicked ? `You can buy ${name} by ${asset / price}.` : null}

      <div>
        <button
          onClick={() => {
            setClicked(false);
            setName();
            setAsset();
            setValue("");
            setNumber("");
            setSelectedOption("See the Coin List");
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default App;
