import React from 'react';
import Select from 'react-select';

const RSelect = ({...props}: any) => {
  return <Select theme={themeSelect} className="form-react-select" {...props} />;
};

const themeSelect = (theme: any) => {
  return {
    borderRadius: 5,
    colors: {
      ...theme.colors,
      primary: 'var(--bs-primary)',
      boxShadow: '0 0 0 3px rgb(101 118 255 / 10%)',
    },
    spacing: {
      ...theme.spacing,
      controlHeight: 43,
      border: '1px solid #dbdfea',
    },
  };
};
export default RSelect;
