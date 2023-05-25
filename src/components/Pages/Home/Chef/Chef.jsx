import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import ChefItems from './ChefItems';

const Chef = () => {
    const [item, setItems] = useState([]);
     useEffect(() => {
       fetch("menu.json")
         .then((res) => res.json())
         .then((data) => {
           const saladItems = data.filter(
             (item) => item.category === "salad"
           );
           setItems(saladItems);
         });
     }, []);
  
    
    return (
      <section className="max-w-7xl mx-auto mb-10">
        <SectionHeading
          subHeding={"---Should Try---"}
          heading={"CHEF RECOMMENDS"}
        ></SectionHeading>
            <section>
                <div className="grid lg:grid-cols-4 gap-6 ">
                    {
                        item.map(items=> <ChefItems key={items._id} items={items}></ChefItems>)
                    }
          </div>
        </section>
      </section>
    );
};

export default Chef;