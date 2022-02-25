import { useState, useEffect } from 'react';
import { List, Card } from 'antd';
// import Restaurant from './Restaurant';

const { Meta } = Card

export default function RestaurantCard ({ item }) {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
      // fetch data from API
      fetch('https://bocacode-intranet-api.web.app/restaurants')
          .then(response => response.json())
          .then(data => {setRestaurants(data)})
          .catch(alert)
  }, [])

    return <List.Item>
    <Card title={item.name}>Card content</Card>
  </List.Item>
}