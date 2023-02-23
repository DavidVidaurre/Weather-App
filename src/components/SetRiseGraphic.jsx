import '../styles/SetRiseGraphic.css'
import dateConverter from '../functions/dateConverter'
import fillGraphic from '../functions/fillGraphicSetRise'
import { useEffect, useState } from 'react'

const SetRiseGraphic = ({ title, setTime, riseTime, Icon, isMoon, isDarkMode }) => {
  const [graphicFilling, setGraphicFilling] = useState(0)

  useEffect(() => {
    setGraphicFilling(fillGraphic(riseTime, setTime))
    const interval = setInterval(() => {
      const percent = fillGraphic(riseTime, setTime)
      setGraphicFilling(percent)
    }, 60000)

    return () => clearInterval(interval)
  }, [riseTime, setTime])

  return (
    <article className='graphic-container'>
      <div className={`graphic ${isMoon ? 'graphic__moon' : ''}`}>
        <div className={`graphic-fill ${isMoon ? 'graphic-fill__moon' : ''}`} style={{ width: `${graphicFilling}%` }} />
      </div>
      <div className={isMoon ? 'bottom-bar__moon' : 'bottom-bar'} />
      <div className='data--container'>
        <div className={`data--info ${isDarkMode ? 'data--info__night' : ''}`}>
          <h3>{`${title}rise`}</h3>
          <p>{dateConverter(riseTime)}</p>
        </div>
        <div className={`data--info ${isDarkMode ? 'data--info__night' : ''}`}>
          <h3>{`${title}set`}</h3>
          <p>{dateConverter(setTime)}</p>
        </div>
      </div>
      <div className={`icon ${isMoon ? 'icon__moon' : ''}`} style={{ left: `${(graphicFilling * 220) / 100}px` }}>
        <Icon />
      </div>
    </article>
  )
}

export default SetRiseGraphic
