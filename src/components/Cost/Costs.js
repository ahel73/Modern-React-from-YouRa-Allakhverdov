import Card from '../Ui/Card';
import CostList from './CostList'
import CostsFilter from "./CostsFilter";
import React, {useEffect, useState} from "react";
import CostsDiagram from "./CostsDiagram";

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
            {selectedYear && <CostsDiagram costs={costs} />}
            <CostList costs={costs} />
        </Card>
    )
}