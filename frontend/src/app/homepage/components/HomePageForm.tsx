import React, {useState} from 'react';
import RSelect from '../../../components/select/RSelect';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {ICountries} from '../../../store/slices/enum.slice';

const HomePageForm = () => {
  const {enumCountries} = useSelector((state: RootState) => state);
  const [fff, setFff] = useState(enumCountries);
  const changeFilterHandler = (event: string) => {
    setFff(enumCountries?.filter((b) => b.country.toLowerCase()?.includes(event.toLowerCase())));
  };
  return (
    <div>
      <label className="form-label">Select Language</label>
      <RSelect
        options={fff}
        onInputChange={(country: string) => changeFilterHandler(country)}
        getOptionLabel={(option: ICountries) => `${option.country} - ${option?.code}`}
        getOptionValue={(option: ICountries) => option.code}
      />
    </div>
  );
};

export default HomePageForm;
