import { Title, Subtitle, Summary, Paragraph } from "./";

const CoinList = ({
  selectedOption,
  loading,
  coins,
  setName,
  setValue,
  setPrice,
  setSelectedOption,
}) => {
  const handleCoinSelect = (e) => {
    const value = e.target.value;
    const [name, priceString] = value.split(" (");
    const price = parseFloat(priceString.match(/\$(\d+\.\d+)/)[1]);
    setName(name);
    setValue(name);
    setPrice(price);
    setSelectedOption(e.target.value);
  };
  return (
    <div className="flex flex-col w-screen justify-center items-center">
      {loading ? (
        ""
      ) : (
        <Subtitle className="mt-10 mb-8">
          There are {coins.length}🪙s..
        </Subtitle>
      )}
      {loading ? (
        <strong>로딩 중...</strong>
      ) : (
        <select
          className="mb-5 w-1/4 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedOption}
          onChange={handleCoinSelect}
        >
          <option>See the Coin List</option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(5)}{" "}
              USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CoinList;
