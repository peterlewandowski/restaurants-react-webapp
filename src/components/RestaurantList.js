import { useState, useEffect } from 'react';
import { List } from 'antd';
import RestaurantCard from './RestaurantCard';

const restaurants = [
    { id: 1, name: 'Tap42'},
    { id: 2, name: 'Lazy Dog'},
    { id: 3, name: 'Yardhouse'},
    { id: 4, name: 'Firehouse'},
    { id: 5, name: 'Moon Thai'},
]

export default function RestaurantList() {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={restaurants}
      renderItem={item => <RestaurantCard item={item} />}
    />
  );
}