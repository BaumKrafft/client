import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Adresse</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Hier brauche ich Adresse/telefon nummer etc</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mo - Fr: 10:00 Uhr - 20:00 Uhr</p>
        <p className="p__opensans">Sa - So: 10:00 Uhr - 18:00 Uhr</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;