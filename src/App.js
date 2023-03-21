import { useEffect, useState } from "react";
import styles from "./App.module.css";
import CoinList from "./components/CoinList";
import Form from "./components/Form";
import Refresh from "./components/Refresh";
import Result from "./components/Result";

function App() {
  const [selectedOption, setSelectedOption] = useState("See the Coin List");
  const [loading, setLoading] = useState(true); // 로딩 여부
  const [calculate, setCalculate] = useState(false); // Calculate 클릭 감지

  const [value, setValue] = useState(""); // 코인 이름 input 감지
  const [number, setNumber] = useState(""); // 자산 input 감지

  const [coins, setCoins] = useState([]); // 코인 목록 설정

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

  return (
    <div className={styles.body}>
      <h1>🪙 Calculator</h1>

      <CoinList
        selectedOption={selectedOption}
        loading={loading}
        coins={coins}
        handleCoinSelect={handleCoinSelect}
      />

      <Form
        value={value}
        setValue={setValue}
        number={number}
        setNumber={setNumber}
        onSubmit={onSubmit}
        name={name}
      />

      <Result
        name={name}
        asset={asset}
        coins={coins}
        calculate={calculate}
        setCalculate={setCalculate}
        price={price}
      />

      <Refresh
        setCalculate={setCalculate}
        setName={setName}
        setAsset={setAsset}
        setValue={setValue}
        setNumber={setNumber}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
}

export default App;
