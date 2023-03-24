import { Subtitle } from "./";

const CoinList = ({
  selectedOption,
  loading,
  coins,
  setName,
  setPrice,
  setValue,
  setSelectedOption,
}) => {
  const handleCoinSelect = (e) => {
    const value = e.target.value;
    const name = value.split(" (")[0];
    setName(name);
    setValue(name);
    setPrice((current) => {
      const foundCoin = coins.find((coin) => coin.name === name);
      if (foundCoin) {
        current = foundCoin.quotes.USD.price.toFixed(5);
      }
      return current;
    });
    setSelectedOption(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center w-[350px]">
      {loading ? (
        ""
      ) : (
        <Subtitle className="mt-10 mb-8">
          There are {coins.length}🪙s..
        </Subtitle>
      )}
      {loading ? (
        <Subtitle className="mt-10 mb-8">로딩 중...</Subtitle>
      ) : (
        <select
          className="mb-5 w-full bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedOption}
          onChange={handleCoinSelect}
        >
          <option>See the Coin List</option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CoinList;
