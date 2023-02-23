const fillGraphic = (rise, set) => {
  const dateRise = new Date(rise * 1000)
  const dateSet = new Date(set * 1000)
  const currentDate = new Date()

  const range = Math.abs(dateSet - dateRise) / (1000 * 60)
  const currentRange = Math.abs(currentDate - dateRise) / (1000 * 60)
  const percent = (currentRange / range) * 100

  return currentDate >= dateSet ? 100 : currentDate < dateRise ? 0 : percent
}

export default fillGraphic
