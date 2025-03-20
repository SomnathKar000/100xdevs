import { useState, useEffect } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setExchange1Data({
        income: 100,
      });
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(
      setExchange2Data({
        income: 100,
      }),
      2000
    );
  }, []);
  useEffect(() => {
    setTimeout(
      setBankData({
        return: 200,
      }),
      100
    );
  }, []);
  const cryptoReturns = exchange1Data.income + exchange2Data.income;
  const totalIncome = (cryptoReturns + bankData.return) * 0.3;

  return <div>hi there, your income tax returns are {totalIncome} </div>;
}

export default App;
