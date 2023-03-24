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
  setCalculate,
  setSelectedOption,
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
    <form
      className="flex flex-col flex-wrap items-center justify-center w-[350px]"
      onSubmit={onSubmit}
    >
      <input
        value={name ? name : value}
        placeholder="Type the name"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="mb-2 bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        value={number}
        placeholder="Type your own money"
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        className="mb-2 bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="flex flex-wrap justify-between min-w-[350px]">
        <button className="min-w-[172px] btn btn-primary" type="submit">
          Submit
        </button>
        <button
          className="min-w-[172px] bg-pink-500 btn hover:bg-pink-600"
          onClick={() => {
            setCalculate(false);
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
    </form>
  );
};

export default Form;
