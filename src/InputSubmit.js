function InputSubmit({ onSubmit }) {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        onSubmit();
      }
    };
  
    return <input type="text" onKeyDown={handleKeyDown} />;
}

export default InputSubmit;