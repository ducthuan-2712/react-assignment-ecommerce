/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Menu, Dropdown } from 'antd';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { ProductProps, ProductModuleProps } from './product.d';
import Card from 'components/Card';
import './product.scss';

const ProductModule: React.FC<ProductModuleProps> = ({ products, handleSorted }) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async (page: number, id: string) => {
    if (hasMore === true && loading === false) {
      try {
        setLoading(true);

        // log load-more
      } catch (err) {
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => handleSorted('order_count_desc')}>
        <span>Best selling</span>
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="1" onClick={() => handleSorted('product_name_asc')}>
        <span>Product title A-Z</span>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleSorted('product_name_desc')}>
        <span>Product title Z-A</span>
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="3" onClick={() => handleSorted('product_price_desc')}>
        <span>Highest price</span>
      </Menu.Item>
      <Menu.Item key="4" onClick={() => handleSorted('product_price_asc')}>
        <span>Lowest price</span>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key="5" onClick={() => handleSorted('created_at_desc')}>
        <span>Newest</span>
      </Menu.Item>
      <Menu.Item key="6" onClick={() => handleSorted('created_at_asc')}>
        <span>Oldest</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="product-list__product">
      <h2>High quality products you can personalise</h2>

      {Object.keys(products).map(key => {
        const { id, name, source } = products[key];

        return (
          <div key={`home-product-${id}`} className="product-list__product-block">
            <div className="product-list__product-block__title">
              <h5>{name}</h5>

              <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Best selling <i className="material-icons">keyboard_arrow_down</i>
                </a>
              </Dropdown>
            </div>

            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={(page: number) => loadMore(page, id)}
              hasMore={!loading && hasMore}
            >
              <Row className="product-list__product-block__cards">
                {source.map((product: ProductProps) => (
                  <Card
                    key={`card-${product.id}`}
                    link="products"
                    source={product}
                  />
                ))}
              </Row>

              {loading && hasMore && <div className="loader">Loading ...</div>}
            </InfiniteScroll>
          </div>  
        )
      })}
    </div>
  );
}

ProductModule.propTypes = {};

export default ProductModule;
