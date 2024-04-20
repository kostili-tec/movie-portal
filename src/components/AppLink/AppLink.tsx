import { FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from '../../shared/lib/classNames';

export const AppLink: FC<LinkProps> = (props) => {
  const { to, className, children, ...rest } = props;
  return (
    <Link className={classNames('', {}, [className])} to={to} {...rest}>
      {children}
    </Link>
  );
};
