import { useEffect, useState } from "react";
import styles from "./App.module.css";
import CoinList from "./components/CoinList";
import Form from "./components/Form";
import Refresh from "./components/Refresh";
import Result from "./components/Result";

function App() {
  const [selectedOption, setSelectedOption] = useState("See the Coin List");

  const [loading, setLoading] = useState(true); // 로딩 여부

  const [coins, setCoins] = useState([]); // 코인 목록 설정

  const [calculate, setCalculate] = useState(false); // Calculate 클릭 감지

  const [value, setValue] = useState(""); // 코인 이름 input 감지
  const [number, setNumber] = useState(""); // 자산 input 감지

  const [name, setName] = useState(); // 확정된 코인의 이름
  const [price, setPrice] = useState(); // 확정된 코인의 가격
  const [asset, setAsset] = useState(); // 확정된 나의 자산

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
        setName={setName}
        setValue={setValue}
        setPrice={setPrice}
        setSelectedOption={setSelectedOption}
      />

      <Form
        value={value}
        setValue={setValue}
        number={number}
        setNumber={setNumber}
        name={name}
        setName={setName}
        setAsset={setAsset}
        coins={coins}
        setPrice={setPrice}
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
