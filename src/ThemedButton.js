import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton({ label }) {
  const theme = useContext(ThemeContext);
  return <button className={theme}>{label}</button>;
}