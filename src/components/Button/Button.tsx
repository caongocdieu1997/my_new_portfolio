import React from "react";

interface Props {
  children: React.ReactNode;
  href?: string;
}

const Button = ({ children, ...props }: Props) => {
  console.log({ ...props });
  return (
    <a {...props} className="primary__button">
      <span>{children}</span>
    </a>
  );
};

export default Button;
