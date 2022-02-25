import { useState, useEffect } from 'react';
import { List } from 'antd';
import RestaurantCard from './RestaurantCard';

// const restaurants = [
//     { id: 1, name: 'Tap42'},
//     { id: 2, name: 'Lazy Dog'},
//     { id: 3, name: 'Yardhouse'},
//     { id: 4, name: 'Firehouse'},
//     { id: 5, name: 'Moon Thai'},
// ]

export default function RestaurantList() {
const [restaurants, setRestaurants] = useState();
  useEffect(() => {
      // fetch data from API
      fetch('https://bocacode-intranet-api.web.app/restaurants')
          .then(response => response.json())
          .then(data => {setRestaurants(data)})
          .catch(alert)
  }, [])
  return (
    <List
      dataSource={restaurants}
      renderItem={item => <RestaurantCard item={item} />}
    />
  );
}