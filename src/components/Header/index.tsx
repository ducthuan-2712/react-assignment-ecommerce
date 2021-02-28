import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Routing from 'routes';

interface TypeHeader {}

const HeaderModule: React.FC<TypeHeader> = () => {
  const checkLinkActived = (match: any, location: { pathname?: string | null }) => {
    if (!match) {
      return false;
    }

    return match.url === location.pathname;
  };

  return (
    <div className="header">
      <div className="header__logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 18">
          <title id="nakdlogotype">NA-KD</title>
          <path fill="#0D0F11" fillRule="evenodd" d="M31.9933,3.9998 L38.9673,21.2178 L35.4813,21.2178 L31.9933,12.6088 L28.5063,21.2178 L25.0193,21.2178 L31.9933,3.9998 Z M90.3623,12.6088 C90.3623,17.3638 86.4603,21.2178 81.6463,21.2178 L76.2263,21.2178 L76.2263,3.9998 L81.6463,3.9998 C86.4603,3.9998 90.3623,7.8538 90.3623,12.6088 Z M79.7133,18.0608 L81.3553,18.0608 C84.4033,18.0608 86.8763,15.6208 86.8763,12.6088 C86.8763,9.5978 84.4033,7.1568 81.3553,7.1568 L79.7133,7.1568 L79.7133,18.0608 Z M17.9483,3.9998 L17.9483,21.2178 L14.7063,21.2178 L7.4873,10.2498 L7.4873,21.2178 L4.0003,21.2178 L4.0003,3.9998 L7.2423,3.9998 L14.4613,14.9678 L14.4613,3.9998 L17.9483,3.9998 Z M48.7493,11.3178 L48.7493,13.8998 L42.6833,13.8998 L41.6373,11.3178 L48.7493,11.3178 Z M64.819,3.9998 L68.742,3.9998 L62.204,12.6088 L68.742,21.2178 L64.819,21.2178 L58.28,12.6088 L64.819,3.9998 Z M54.6753,21.2178 L54.6753,3.9998 L58.1623,3.9998 L58.1623,21.2178 L54.6753,21.2178 Z" transform="translate(-4 -4)"></path>
        </svg>
      </div>

      <div className="header__menu">
        <NavLink to={Routing.HOME.path} isActive={(match, location) => checkLinkActived(match, location)}>
          Home
        </NavLink>

        <NavLink to={Routing.ABOUT.path} isActive={(match, location) => checkLinkActived(match, location)}>
          About Us
        </NavLink>

        <NavLink to={Routing.CONTACT.path} isActive={(match, location) => checkLinkActived(match, location)}>
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderModule;
