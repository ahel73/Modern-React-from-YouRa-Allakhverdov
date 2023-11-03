import CostItem from "./CostItem";
import React from "react";
import './CostList.css'

const CostList = (props) => {
	const { costs } = props

	if (!costs.length) {
		return <h1 className='cost-list__fallback'>За этот год покупок нет</h1>
	}

	return  (<ul className='cost-list'>
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
	</ul>)
}

export default CostList;