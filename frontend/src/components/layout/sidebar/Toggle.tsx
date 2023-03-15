import React from 'react';
import Icon from '../../icon/Icon';

const Toggle = ({className, click, icon}: any) => {
  return (
    <a
      href="src/components/layout/sidebar#toggle"
      className={className ? className : ''}
      onClick={(ev) => {
        ev.preventDefault();
        click(ev);
      }}
    >
      <Icon name={icon} />
    </a>
  );
};
export default Toggle;
