const uvRisk = (uvIndex) => {
  if (uvIndex > 0 && uvIndex < 3) {
    return 'Low'
  }

  if (uvIndex >= 3 && uvIndex < 6) {
    return 'Moderate'
  }

  if (uvIndex >= 6 && uvIndex < 8) {
    return 'High'
  }

  if (uvIndex >= 8 && uvIndex < 11) {
    return 'Very High'
  }

  if (uvIndex >= 11) {
    return 'Extreme'
  }

  return 'Unknown'
}

export default uvRisk
