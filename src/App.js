import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2021, 2,12),
      description: 'холодльник',
      amount: 999.99,
    },
    {
      date: new Date(2021, 11,25),
      description: 'MacBook',
      amount: 1254.72,
    },
    {
      date: new Date(2021, 4,1),
      description: 'Джинсы',
      amount: 49.99,
    },
  ]
  return (
    <div>
      <h1>
        начнём изучать реакт
      </h1>
      <CostItem />
       <CostItem />
    </div>
  );
}

export default App;
