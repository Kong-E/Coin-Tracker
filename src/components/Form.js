const Form = ({
  value,
  setValue,
  number,
  setNumber,
  name,
  setName,
  setAsset,
  coins,
  setPrice,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    setName(value);
    setAsset(number);
    coins.forEach(
      (coin) => coin.name === value && setPrice(coin.quotes.USD.price)
    );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
