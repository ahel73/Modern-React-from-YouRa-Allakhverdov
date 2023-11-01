import Card from '../Ui/Card';
import CostItem from './CostItem';
import './Costs.css';
import CostsFilter from "./CostsFilter";
import React, {useEffect, useState} from "react";

export default function Costs(prop) {
    const [selectedYear, setSelectedYear] = useState(() => "");
    const [costs, setCostas] = useState(prop.costs)
    console.log('costs', costs);

        useEffect(() => {
            if (selectedYear) {
                const filterCosts = prop.costs.filter(item => {
                    return item.date.getFullYear().toString() === selectedYear
                } );
                console.log('filterCosts', filterCosts)
                setCostas(filterCosts)
            } else {
                setCostas(prop.costs)
            }
        }, [selectedYear, prop.costs]);


    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    return (
        <Card className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
            {
                costs.map((cost) => (
                    <CostItem
                        key={cost.id}
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount}
                    />
                ))
            }       
        </Card>
    )
}