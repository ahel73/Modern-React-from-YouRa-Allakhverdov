import React, { useState } from "react";
import './CostForm.css';

const CostForm = () => {
    const [inputName, setInputName] = useState("");
    const [inputAmount, setInpuAmount] = useState("");
    const [inputDate, setInpuDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     name: "",
    //     amount: "",
    //     date: "",
    // });

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value,
        // });
    };

    const amountChangeHandler = (event) => {
        setInpuAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
            setInpuDate(event.target.value);
    };

    const submithandler = (event) => {
        event.preventDefault();
        
        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }

        console.log('costData', costData)
    }

    return (
        <form onSubmit={submithandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить Расход</button>
                </div>
            </div>
        </form>
    )
}
export default CostForm;