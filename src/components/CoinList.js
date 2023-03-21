const CoinList = ({ selectedOption, loading, coins, handleCoinSelect }) => {
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
