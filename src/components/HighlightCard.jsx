import '../styles/HighlightCard.css'

const HighlightCard = ({ title, date, value, unit, Icon, isDarkMode }) => {
  return (
    <article className={`highlight-card ${isDarkMode ? 'highlight-card__night' : ''}`}>
      <div className='highlight-card--info'>
        <h3>{title}</h3>
        <p className='highlight-card--info-date'>{`${date} - ${title}`}</p>
        <p className='highlight-card--info-value'>{value} <span>{unit}</span></p>
      </div>
      <div className='highlight-card--icon'>
        <Icon />
      </div>
    </article>
  )
}

export default HighlightCard
