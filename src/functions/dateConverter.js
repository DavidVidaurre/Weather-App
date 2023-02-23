const dateConverter = (utcDate) => {
  const date = new Date(utcDate * 1000)
  const dateHour12 = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  return dateHour12
}

export default dateConverter
