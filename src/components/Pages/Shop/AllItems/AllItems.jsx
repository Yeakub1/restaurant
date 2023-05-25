import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from '../../../../Hooks/useMenu';

const AllItems = () => {
    const [tabIndex, setTabIndex] = useState(0);
   const [menu] = useMenu();
   const salad = menu.filter((item) => item.category === "salad");


    return (
      <div className="max-w-7xl mx-auto mb-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='text-center'>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel>tumi</TabPanel>
        </Tabs>
      </div>
    );
};

export default AllItems;