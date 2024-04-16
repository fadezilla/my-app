function EmailInput({ onChange }) {
    return <input type="email" onChange={(e) => onChange(e.target.value)} />;
}

export default EmailInput;