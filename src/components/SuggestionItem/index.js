import './index.css'

const SuggestionItem = props => {
  const {eachItem, updatedValue} = props
  const {suggestion} = eachItem

  const updatedOne = () => updatedValue(suggestion)

  return (
    <li className="listItems" onClick={updatedOne}>
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
      />
    </li>
  )
}

export default SuggestionItem
