import React from 'react';
import { Button, Glyphicon } from "react-bootstrap";
import "./LoaderButton.css";

const Loader = ({
    isLoading,
    text,
    loadingText,
    className = "",
    disabled = false,
    ...props
  }) => 
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
    >
    {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
    {!isLoading ? text : loadingText}
</Button>;

export default Loader;