
import DiagramBar from "./DiagramBar";
import './Diagram.css'
const Diagram = (props) => {
	const dataSetsValues = props.dataSets.map(dataSet => dataSet.value);
	const maxMounthCosts = Math.max(...dataSetsValues)
	console.log('dataSets', props)
	return (
		<div className='diagram'>
			{
				props.dataSets.map((dataset) => <DiagramBar
							key={dataset.label}
							value={dataset.value}
							maxValue={maxMounthCosts}
							label={dataset.label}
						/>
				)
			}
		</div>
	)
}

export default Diagram
