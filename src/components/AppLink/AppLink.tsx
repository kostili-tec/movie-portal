import { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

export const AppLink: FC<LinkProps> = (props) => {
  const { to, className, children, ...rest } = props;
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};
