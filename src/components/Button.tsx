import { default as MaterialUIButton, ButtonProps } from '@material-ui/core/Button';
import React, { forwardRef } from 'react';

// this is a button
type ButtonRef = HTMLButtonElement;

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref) {
  return <MaterialUIButton {...props} ref={ref} />;
});

export default Button;
