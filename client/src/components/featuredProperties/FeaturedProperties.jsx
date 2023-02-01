import React from "react";
import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
import Error from "../Error/Error";
import Loading from "../loading/Loading";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels/getHotels?featured=true");
  console.log(data);
  if (error) return <Error />;
  if (loading) return <Loading />;
  return (
    <div className="fp">
      {data.slice(0, 4).map((item) => (
        <div className="fpItem" key={item._id}>
          <img src={item.photos[0]} alt="" className="fpImg" />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city.toUpperCase()}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {item.rating && (
            <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
