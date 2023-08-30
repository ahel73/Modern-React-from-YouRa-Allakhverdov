import Costs from './components/Cost/Costs';
import NewCost from './components/NewCost/NewCost';

function App() {
  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      description: 'холодльник',
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amount: 1254.72,
    },
    {
      id: 'c3',
      date: new Date(2021, 4, 1),
      description: 'Джинсы',
      amount: 49.99,
    },
  ]

  const addCstHandler = (cost) => {
    console.log('cost', cost);
  }

  return (
    <div>
      <NewCost onAddCost={addCstHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
