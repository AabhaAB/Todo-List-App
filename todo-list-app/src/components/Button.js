import React from 'react';
import './Button.css';

function Button(props) {
  // Destructure props
  const { variant, children, onClick } = props;

  // Define className variable based on the variant prop
  let className = 'button1';
  if (variant === 'big') {
    className += ' bg-blue-500 text-white'; // Apply styles for a big button
  } else if (variant === 'small') {
    className += ' bg-gray-300 text-gray-800'; // Apply styles for a small button
  }

  // Render the button component
  return (
    <button className={className} onClick={onClick}>
      {children} {/* Render the children of the button */}
    </button>
  );
}

export default Button;