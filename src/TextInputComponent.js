function TextInputComponent({ onTextChange }) {
    return <input type="text" onChange={(e) => onTextChange(e.target.value)} />;
   }

export default TextInputComponent;