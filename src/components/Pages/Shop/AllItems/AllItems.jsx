import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from '../../../../Hooks/useMenu';
import FoodCard from '../../../Shared/FoodCard/FoodCard';
import OrderItems from '../OrderItems/OrderItems';

const AllItems = () => {
    const [tabIndex, setTabIndex] = useState(0);
   const [menu] = useMenu();
   const salad = menu.filter((item) => item.category === "salad");
   const pizza = menu.filter((item) => item.category === "pizza");
   const soups = menu.filter((item) => item.category === "soup");
   const dessert = menu.filter((item) => item.category === "dessert");
   const drinks = menu.filter((item) => item.category === "drinks");


    return (
      <div className="max-w-7xl mx-auto mb-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center mb-5">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderItems itme={salad}></OrderItems>
          </TabPanel>
          <TabPanel>
            <OrderItems itme={pizza}></OrderItems>
          </TabPanel>
          <TabPanel>
            <OrderItems itme={soups}></OrderItems>
          </TabPanel>
          <TabPanel>
            <OrderItems itme={dessert}></OrderItems>
          </TabPanel>
          <TabPanel>
            <OrderItems itme={drinks}></OrderItems>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default AllItems;