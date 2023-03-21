const Refresh = ({
  setCalculate,
  setName,
  setAsset,
  setValue,
  setNumber,
  setSelectedOption,
}) => {
  return (
    <div>
      <div>
        <button
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
    </div>
  );
};

export default Refresh;
