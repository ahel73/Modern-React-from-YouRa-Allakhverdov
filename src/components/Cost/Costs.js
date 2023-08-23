import Card from '../Ui/Card';
import CostItem from './CostItem';
import './Costs.css';

export default function Costs(prop) {
    
    return (
        <Card className='costs'>
            {
                prop.costs.map((el) => (
                    <CostItem
                        date={el.date}
                        description={el.description}
                        amount={el.amount}
                    />
                ))
            }       
        </Card>
    )
}