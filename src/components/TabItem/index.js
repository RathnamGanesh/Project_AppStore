import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabItem(tabId)
  }

  const className = isActive ? 'active-btn' : 'tab-item'

  return (
    <li className="tabItem">
      <button className={`${className}`} onClick={onClickTabItem} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
