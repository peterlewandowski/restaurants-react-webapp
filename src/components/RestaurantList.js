import React, { useState, useEffect } from 'react';
import { List, Card} from 'antd';


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
      renderItem={(item) => (
        <List.Item>
          <Card 
            title={item.name}
            hoverable
            style={{ width: '80%' }}
            cover={<img alt="Restaurant" src={item.photoUrl} />}
          >
            <p>Rating</p>
            <p>Rate this restaurant</p>
          </Card>
        </List.Item>
      )}
    />
  );
}

