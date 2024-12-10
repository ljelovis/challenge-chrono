function Button({ fn, disabled, text }) {
  return (
    <button onClick={fn} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
