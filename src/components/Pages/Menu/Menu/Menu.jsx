import React from 'react';
import { Helmet } from "react-helmet-async";
import PageCover from '../PageCover/PageCover';
import OfferItems from '../OfferItems/OfferItems';
import Dessert from '../Dessert/Dessert';
import BestItems from '../BestItems/BestItems';
import Pizza from '../Pizza/Pizza';
import PizzaItems from '../PizzaItems/PizzaItems';
import Salad from '../Salad/Salad';
import SaladItems from '../SaladItems/SaladItems';
import Sopu from '../Soup/Sopu';
import SuapItems from './SuapItems/SuapItems';

const Menu = () => {
    return (
      <div>
        <Helmet>
          <title>BISTRO BOSS | menu</title>
        </Helmet>
        <PageCover></PageCover>
        <OfferItems></OfferItems>
        <Dessert></Dessert>
        <BestItems></BestItems>
        <Pizza></Pizza>
        <PizzaItems></PizzaItems>
        <Salad></Salad>
        <SaladItems></SaladItems>
        <Sopu></Sopu>
        <SuapItems></SuapItems>
      </div>
    );
};

export default Menu;