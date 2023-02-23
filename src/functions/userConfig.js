export const userConfig = JSON.parse(window.localStorage.getItem('userConfig')) || {}

export const setUserConfig = (userConfig) => {
  window.localStorage.setItem('userConfig', JSON.stringify(userConfig))
}
