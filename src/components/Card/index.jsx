import { Card, Col } from 'antd';
import Images from 'constants/image';
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function CardProduct({ link, source }) {
  const { id, thumb_url = {}, thumb_url_alt = {}, title, description } = source;

  return (
    <Col xs={24} sm={12} md={12} lg={8} xl={6} className="card">
      <Card
        hoverable
        cover={
          <Link to={`/${link}/${id}`}>
            <img alt={thumb_url_alt} className="card-image" src={thumb_url} />
          </Link>
        }
      >
        <div className="card__name">
          <Link to={`/${link}/${id}`}>{title}</Link>
        </div>

        <p className="card__desc">{description}</p>
      </Card>
    </Col>
  );
}

CardProduct.propTypes = {};

export default CardProduct;
