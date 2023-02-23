import '../styles/ModalError.css'

const ModalError = ({ setErrorModal, errorMessage }) => {
  const handleClick = (e) => {
    e.preventDefault()
    setErrorModal(false)
  }

  return (
    <div className='modal--container'>
      <div className='modal--content'>
        <h2>Oops!</h2>
        <p>{errorMessage}</p>
        <button className='btn-close' onClick={handleClick}>Try again</button>
      </div>
    </div>
  )
}

export default ModalError
