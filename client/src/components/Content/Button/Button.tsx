/*
component: Custom Button with dynamic label and className
@Author: Pawel Borkar
Date: 21 January 2023
*/

import { ButtonProps } from '../../../types';

const Button = ({ type, label }: ButtonProps) => {
  return <button className={`btn ${type}`}>{label}</button>;
};
export default Button;
