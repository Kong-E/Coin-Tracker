import { useEffect, useState } from "react";

const Result = ({ name, asset, coins, calculate, setCalculate, price }) => {
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    name && asset && setNewArr(coins.filter((coin) => coin.name === name));
  }, [name, asset]);

  return (
    <div>
      {newArr.length > 0 ? (
        <div key={newArr[0].id}>
          {name && asset && (
            <>
              <span>
                You select:&nbsp;
                {newArr[0].name} ({newArr[0].symbol}): $
                {newArr[0].quotes.USD.price.toFixed(5)} USD
              </span>
              <button
                onClick={() => setCalculate(true)}
                style={{ marginLeft: 5 }}
              >
                Calculate
              </button>
            </>
          )}{" "}
          {/* name과 asset이 undefined 되면(즉 refresh 되면) coin 정보를 없앤다 */}
        </div>
      ) : null}

      {calculate ? `You can buy ${name} by ${asset / price}.` : null}
    </div>
  );
};

export default Result;
