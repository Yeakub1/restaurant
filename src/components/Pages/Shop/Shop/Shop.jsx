import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageCover from '../PageCover/PageCover';
import AllItems from '../AllItems/AllItems';

const Shop = () => {
    return (
      <div>
        <Helmet>
          <title>BISTRO BOSS | menu</title>
        </Helmet>
        <PageCover></PageCover>
        <AllItems></AllItems>
      </div>
    );
};

export default Shop;