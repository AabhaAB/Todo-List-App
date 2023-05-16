import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

function TodoRow(props) {
  // Destructure props
  const { index, text, completed, onDelete, onComplete } = props;

  // State for tracking hover state
  const [hovered, setHovered] = useState(false);

  // Event handler for mouse enter event
  const handleMouseEnter = () => {
    setHovered(true);
  };

  // Event handler for mouse leave event
  const handleMouseLeave = () => {
    setHovered(false);
  };

  // Render the TodoRow component
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <Checkbox
          label={text}
          checked={completed}
          onChange={() => onComplete(index)}
        />
        {hovered && (
          <Button variant="small" onClick={() => onDelete(index)}>
            Delete
          </Button>
        )}
      </div>
    </li>
  );
}

export default TodoRow;