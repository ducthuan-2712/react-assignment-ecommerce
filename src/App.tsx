import { LoadingOutlined } from '@ant-design/icons';
import { Layout, Spin } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { RootState } from 'app/store';
import Loading from 'components/Common/Loading';
import ErrorBoundary from 'components/ErrorBoundary';
import FooterModule from 'components/Footer';
import HeaderModule from 'components/Header';
import RouteList from 'components/RouteList';
import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routing from 'routes';
import './App.scss';

const { Content } = Layout;
const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

function App() {
  const history = useHistory();
  const location = useLocation();

  const showGlobalLoading = useSelector((state: RootState) => state.common.loading);
  const userToken = useSelector((state: RootState) => state.user.userToken);

  /*------------------------------------------------------*/
  /*------------------ LIFE CYCLE HOOKS ------------------*/
  /*------------------------------------------------------*/

  useEffect(() => {
    // Redirect user to home page page if pathname is /
    if (location.pathname === '/') {
      history.push(Routing.HOME.path);
    }
  }, [history, location.pathname]);


  /*--------------------------------------------*/
  /*------------------ LAYOUT ------------------*/
  /*--------------------------------------------*/

  return (
    <Layout className="app">
      {userToken && (<div className="app__header">
        <div className="app__header--wrap">
          <HeaderModule />
        </div>
      </div>)}

      <Content className="app__main layout">
        <Suspense fallback={(
          <div className="loading-fallback">
            <Spin indicator={antIcon} />
          </div>
        )}>
          <ErrorBoundary>
            <RouteList routes={Routing} />
          </ErrorBoundary>
        </Suspense>
      </Content>

      {userToken && (<div className="app__footer">
        <FooterModule />
      </div>)}

      {showGlobalLoading && <Loading />}

      <ToastContainer
        draggable
        closeOnClick
        pauseOnHover
        hideProgressBar
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        rtl={false}
      />
    </Layout>
  );
}

export default App;
