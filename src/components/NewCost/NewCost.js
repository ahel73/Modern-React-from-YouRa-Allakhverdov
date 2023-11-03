import CostForm from './CostForm';
import "./NewCost.css";
import React, {useState} from "react";

const NewCost = (props) => {
  const [renderForm, setRenderForm] = useState(false)

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }
    console.log('costData', costData)
    props.onAddCost(costData)
    changeFormHandler();
  }
  const changeFormHandler = () => {
    setRenderForm(!renderForm);
  }

  return (
    <div className="new-cost">
      { !renderForm ?
        <div className="new-cost__actions">
          <button
            type="button"
            onClick={changeFormHandler}
            changeFormHandler={changeFormHandler}
          >
              Добавить Новый Расход
          </button>
        </div>
       :
        <CostForm
          onSaveCostData={saveCostDataHandler}
          changeFormHandler={changeFormHandler}
        />
      }
    </div>
  )
}

export default NewCost;