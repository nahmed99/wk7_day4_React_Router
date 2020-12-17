import React from "react";


const Pricing = ({prices}) => {

  // console.log({prices});

  const priceList = prices.map((price) => {
  return <li>{price.level}: £{price.cost}</li>
  });

  return (
    <>
      <h4>Pricing</h4>
      <ul>
        {priceList}
      </ul>
    </>
  );
}

export default Pricing;
