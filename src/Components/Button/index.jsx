import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss'

const Button = (props) => {
  const { link, children } = props;

  return (
    <button className={style.Button}>
      <Link to={link}>
          {children}
      </Link>
    </button>
  );
}

export default Button;
