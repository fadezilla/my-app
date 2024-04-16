import React, { useState } from 'react';

function ToggleComponent() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button onClick={() => setIsToggled(!isToggled)}>
      {isToggled ? 'On' : 'Off'}
    </button>
  );
}