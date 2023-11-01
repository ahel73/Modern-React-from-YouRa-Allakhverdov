import Costs from './components/Cost/Costs';
import NewCost from './components/NewCost/NewCost';
import {useState} from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
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
    date: new Date(2022, 4, 1),
    description: 'Джинсы',
    amount: 49.99,
  },
]

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)
    const addCstHandler = (cost) => {
      setCosts((prevCosts => [cost, ...prevCosts]))
    }

  return (
    <div>
      <NewCost onAddCost={addCstHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
