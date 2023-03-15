import classNames from 'classnames';
import React from 'react';

const Icon = ({name, id, className, style, ...props}: any) => {
  const iconClass = classNames({
    [`${className}`]: className,
    icon: true,
    ni: true,
    [`ni-${name}`]: true,
  });
  return <em className={iconClass} id={id} style={style} {...props}></em>;
};
export default Icon;
