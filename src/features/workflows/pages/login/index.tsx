import commonApi from 'api/commonApi';
import { updateTokenAfterLogin } from 'app/userSlice';
import StorageKeys from 'constants/storage-keys';
import Login from 'features/workflows/components/login';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Routing from 'routes';

function LoginModule() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // Redirect user to home page page if pathname is /
    // GET ACCESS_TOKEN
    const accessToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
    if (accessToken) {
      toast.info(`You have aleady login.`);
      history.push(Routing.HOME.path);
    }
  }, [history]);

  const handleFormSubmit = async () => {
    const getToken = await commonApi.dummyLogin();
    await localStorage.setItem(StorageKeys.ACCESS_TOKEN, getToken);
    await dispatch(updateTokenAfterLogin(getToken));
    history.push(Routing.HOME.path);
  };

  return (
    <Login onSubmit={handleFormSubmit} />
  );
}

export default LoginModule;
