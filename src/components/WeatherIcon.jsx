import iconMap from '../functions/iconMap'
export const WeatherIcon = ({ code, isDarkMode }) => {
  const Icon = iconMap[code]
  if (!Icon) return null
  return <Icon isDarkMode={isDarkMode} />
}
