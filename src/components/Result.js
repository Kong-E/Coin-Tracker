import { useEffect, useState } from "react";

const Result = ({ name, asset, coins, calculate, setCalculate, price }) => {
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    name && asset && setNewArr(coins.filter((coin) => coin.name === name));
  }, [name, asset]);

  return (
    <div>
      {newArr.length > 0 ? (
        <div key={newArr[0].id} className="flex flex-col justify-center mt-3">
          {name && asset && !calculate && (
            <>
              <div>
                <span className="text-xl font-semibold">
                  👉 You selected&nbsp;
                </span>
                <span className="text-xl font-bold">
                  {newArr[0].name} ({newArr[0].symbol}) $
                  {newArr[0].quotes.USD.price.toFixed(5)} USD
                </span>
              </div>
              <button
                className="mt-3 btn btn-primary"
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

      {calculate ? (
        <div className="mt-4 text-2xl font-semibold text-center">
          👉 You can buy{" "}
          <span className="text-yellow-400">
            {name} by {asset / price}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Result;
