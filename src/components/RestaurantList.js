import React, { useState, useEffect } from "react";
import { List, Card, Rate } from "antd";
import RestaurantRating from "./RestaurantRating";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    // fetch data from API
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch(alert);
  }, []);

  return (
    <List
      dataSource={restaurants}
      renderItem={(restaurant) => (
        <List.Item>
          <Card
            headStyle={{ textAlign: "left", fontSize: 20, padding: 0 }}
            title={restaurant.name}
            hoverable
            style={{ width: "400px" }}
            cover={<img alt={restaurant.name} src={restaurant.photoUrl} />}
          >
            <Rate disabled allowHalf defaultValue={restaurant.rating} />
            <span> ({restaurant.numRatings})</span>
            <p>{restaurant.address}</p>
            <RestaurantRating id={restaurant.id} setRestaurants={setRestaurants} />
          </Card>
        </List.Item>
      )}
    />
  );
}
