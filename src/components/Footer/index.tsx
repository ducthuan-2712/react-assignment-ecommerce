import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Routing from 'routes';

interface TypeHeader {}

const FooterModule: React.FC<TypeHeader> = () => {
  const list = [
    {
      name: 'About Us',
      targetBlank: false,
      goTo: Routing.ABOUT.path,
    },
    {
      name: 'Contact Us',
      targetBlank: false,
      goTo: Routing.CONTACT.path,
    },
  ];

  return (
    <Row className="footer">
      <Col xs={12} sm={12} md={12}>
        <div className="footer__block">
          <ul className="footer__block-nav">
            {list.map(item => (
              <li key={`item-${item.name}`}>
                {item.targetBlank === true
                  ? (
                    <a target="_blank" rel="noopener noreferrer" href={item.goTo}>
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.goTo}>
                      {item.name}
                    </Link>
                  )
                }
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default FooterModule;
