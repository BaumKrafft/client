import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Krafft" />
      <h1 className="app__header-h1">Wir pflegen Ihre Bäume!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Als Familienbetrieb stehen wir für .... Hier noch irgend einen Text hinzufügen</p>
      <button type="button" className="custom__button">Kontaktieren Sie uns</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.familiePic} alt="header_img" />
    </div>
  </div>
);

export default Header;