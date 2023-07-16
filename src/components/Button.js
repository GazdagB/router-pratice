import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ text, url, color, hoverColor }) => {
  let navigate = useNavigate();

  const buttonStyle = {
    background: color,
  };

  const buttonHoverStyle = {
    background: hoverColor,
  };

  return (
    <button
      onClick={() => navigate(`${url}`)}
      className="button"
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.target.style.background = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.background = color;
      }}
    >
      {text}
    </button>
  );
};

export default Button;
