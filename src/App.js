import { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import Form from "./components/Form";
import Result from "./components/Result";
import { Title, Subtitle, Summary, Paragraph } from "./components";

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
    <div className="flex flex-col justify-center items-center text-white bg-slate-900 h-screen">
      <Title>Calculat🪙r</Title>
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
        setCalculate={setCalculate}
        setSelectedOption={setSelectedOption}
      />

      <Result
        name={name}
        asset={asset}
        coins={coins}
        calculate={calculate}
        setCalculate={setCalculate}
        price={price}
      />

      {/* <Paragraph className="h-40 bg-sky-500 line-clamp-4">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..." "There is no one who loves pain itself,
        who seeks after it and wants to have it, simply because it is pain..."
      </Paragraph> */}
    </div>
  );
}

export default App;
