const windSpeedBeaufort = (speed) => {
  if (speed < 1) return 0
  if (speed >= 1 && speed < 6) return 1
  if (speed >= 6 && speed < 12) return 2
  if (speed >= 12 && speed < 20) return 3
  if (speed >= 20 && speed < 29) return 4
  if (speed >= 29 && speed < 39) return 5
  if (speed >= 39 && speed < 50) return 6
  if (speed >= 50 && speed < 62) return 7
  if (speed >= 62 && speed < 75) return 8
  if (speed >= 75 && speed < 89) return 9
  if (speed >= 89 && speed < 103) return 10
  if (speed >= 103 && speed < 117) return 11
  if (speed >= 117) return 12
}

export default windSpeedBeaufort
