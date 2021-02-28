import React, { useState } from 'react';
import './style.scss';
import Product from 'features/home/components/Product';
import { dummy } from 'features/home/__mocks__/data';

function HomePage() {
  const [data, ] = useState(dummy);
  /*------------------------------------------------------*/
  /*------------------ LIFE CYCLE HOOKS ------------------*/
  /*------------------------------------------------------*/


  /*-----------------------------------------------------------*/
  /*------------------ FUNCTION HANDLE LOGIC ------------------*/
  /*-----------------------------------------------------------*/

  const handleSorted = (type: string) => {

  };

  
  /*--------------------------------------------*/
  /*------------------ LAYOUT ------------------*/
  /*--------------------------------------------*/

  return (
    <div className="HomePage HomePage-module">
      <div className="banner" />

      <div className="app__main--wrap">
        <Product
          products={data}
          handleSorted={handleSorted}
        />
      </div>
    </div>
  );
}

export default HomePage;
