import React from 'react';
import { Helmet } from "react-helmet-async";
import PageCover from '../PageCover/PageCover';

const Menu = () => {
    return (
      <div>
        <Helmet>
          <title>BISTRO BOSS | menu</title>
        </Helmet>
       <PageCover></PageCover>
      </div>
    );
};

export default Menu;