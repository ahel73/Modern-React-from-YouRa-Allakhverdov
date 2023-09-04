import Card from '../Ui/Card';
import CostItem from './CostItem';
import './Costs.css';
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

export default function Costs(prop) {
    const [selectedYear, setSelectedYear] = useState("2021");

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };
    
    return (
        <Card className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
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