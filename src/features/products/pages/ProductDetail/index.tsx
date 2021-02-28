import { Col, Row } from 'antd';
import React from 'react';
import Slider from './Slider';
import './style.scss';

const ProductDetailModule: React.FC<{}> = () => (
  <div className="app__main--wrap">
    <Row className="product-detail">
      <Col xs={24} sm={24} md={24} lg={10} xl={12} className="product-detail--left">
        <Slider />
      </Col>

      <Col xs={24} sm={24} md={24} lg={14} xl={12} className="product-detail--right">
        <div className="product-detail__title">
          <h1>Lorem Ispum 2</h1>
        </div>

        <div className="product-detail__date">
          28/02/2021 - 23:00 PM
        </div>
      </Col>
    </Row>
  </div>
);

export default ProductDetailModule;
