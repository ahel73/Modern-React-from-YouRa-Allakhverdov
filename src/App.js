import Costs from './components/Cost/Costs';
import NewCost from './components/NewCost/NewCost';

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
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
