import React, { FC, useId } from 'react';
import classes from './InputText.module.scss';
import { classNames } from '../../shared/lib/classNames';

interface InputTextProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string; // TODO enum?
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  placeholder?: string;
  defaultValue?: string;
  children?: React.ReactNode;
}

const InputText: FC<InputTextProps> = (props) => {
  const { autoComplete, label, onChange, type, placeholder, name, defaultValue, children } = props;
  const id = useId();
  return (
    <div className={classes.coolinput}>
      <label className={classNames('', {}, [classes.label])} htmlFor={id}>
        {label}
      </label>
      <input
        className={classNames('', {}, [classes.input])}
        type={type}
        id={id}
        autoComplete={autoComplete}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
      />
      {children}
    </div>
  );
};

export default InputText;
