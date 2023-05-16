import React from 'react';

function Checkbox(props) {
  // Destructure props
  const { label, checked, onChange } = props;

  // Render the checkbox component
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label>{label}</label> {/* Render the label text */}
    </div>
  );
}

export default Checkbox;