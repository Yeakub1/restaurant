import React from 'react';
import PageCover from '../PageCover/PageCover';
import Location from '../Location/Location';
import ContactFrom from '../Contact From/ContactFrom';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
      <div>
        <Helmet>
          <title>BISTRO BOSS | Contact</title>
        </Helmet>
        <PageCover></PageCover>
        <Location></Location>
        <ContactFrom></ContactFrom>
      </div>
    );
};

export default Contact;