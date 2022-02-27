import { List } from 'antd';
import Rating from './Rating'

export default function RestaurantRating () {
  return (
    <List
      renderItem={item => <Rating item={item} />}
    />
  );
}
