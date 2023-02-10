import React, { useContext,useState } from "react";
import Body from "./Body";

import { ResturantContext } from "../Contexts/ContextResturant";
import Carousel from "./Carousel";
import useRestaurant from "../customHooks/useRestaurant";
import { locationContext } from "../Utilities/MyApp";
import HomPageShimmer from "./HomPageShimmer";
import { getMoreRestaurant } from "../Utilities/helpers";


export const Homepage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showRestaurant, setShowRestaurant] = useState(31);

  const cordinates = useContext(locationContext)

  
  console.log(showRestaurant);
  useRestaurant(restaurants, setRestaurants,showRestaurant,
    setShowRestaurant,);



 
       



  
 
       


      

  if (restaurants?.length <= 0 || typeof restaurants === "undefined")
    return <HomPageShimmer />;
  else
    return (
      <div className="Homepage">
        <ResturantContext.Provider value={restaurants}>
          <Carousel />
          <Body />
          
        </ResturantContext.Provider>
      </div>
    );
};