import React, {useEffect} from 'react';
import './App.scss';
import Loader from './components/shared/Loader';
import Toaster from './components/shared/Toaster';
import Layout from './components/shared/Layout';
import {AppRoutes} from './app/routes';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import {commonSlice} from './store/slices/common.slice';
import {enumApi} from './api';
import {enumSlice} from './store/slices/enum.slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    toast.onChange((payload) => {
      payload?.status === 'removed' && dispatch(commonSlice.actions.setMessage(undefined));
    });
  }, [dispatch]);

  useEffect(() => {
    enumApi.getEnums().then((response) => {
      const {data} = response;
      dispatch(enumSlice.actions.setCountries(data));
    });
  }, [dispatch]);
  return (
    <>
      <Loader />
      <Toaster />
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
