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
    <div>
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
    </div>
  );
};

export default CoinList;
