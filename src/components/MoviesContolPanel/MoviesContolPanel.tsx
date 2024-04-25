import React, { FC } from 'react';
import InputText from '../InputText/InputText';
import classes from './MoviesContolPanel.module.scss';
import { classNames } from '../../shared/lib/classNames';

interface MoviesContolPanelProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: (e: React.FormEvent) => void;
}

const MoviesContolPanel: FC<MoviesContolPanelProps> = (props) => {
  const { onChange, onSubmit } = props;
  return (
    <form action="" onSubmit={onSubmit} className={classNames('', {}, [classes.controlForm])}>
      <div className={classes.searchContainer}>
        <InputText label="Search" name="search" type="text" onChange={onChange} />
        <button className={classNames('', {}, [classes.searchBtn])} id="search" type="submit">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default MoviesContolPanel;
