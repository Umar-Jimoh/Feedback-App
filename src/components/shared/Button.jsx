
function Button({text, btnDisabled, type}) {
  return (
    <button
      type={type}
      className={`btn btn-${!btnDisabled ? 'primary' : null}`}
      disabled={btnDisabled}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  type: 'submit'
}

export default Button
