import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import './Loading.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Loading: React.FC<{}> = () => (
  <div className="loading">
    <div className="loading__circle">
      <Spin indicator={antIcon} />
    </div>
  </div>
);

export default Loading;
