const HistoryItem = props => {
  const {initialHistoryList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = initialHistoryList
  return (
    <li className="history-item-container">
      <p className="time-card">{timeAccessed}</p>
      <div className="logo-container">
        <img src={logoUrl} alt="domain logo"/>
        <p className="logo-title">{title}</p>
        <p>{domainUrl}</p>
      </div>
    </li>
  )
}

export default HistoryItem
