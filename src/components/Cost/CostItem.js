import React from "react";
import Card from '../Ui/Card';
import CostDate from './CostDate';
import "./CostItem.css";

export default function CostItem(props) { 
    return (        
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>
                    {props.description}
                </h2>
                <div className='cost-item__price'>{ props.amount}</div>
            </div>
        </Card>
    )
}