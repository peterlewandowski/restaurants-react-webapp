import { List, Card } from 'antd';

export default function RestaurantCard ({ item }) {

    return <List.Item>
    <Card title={item.name}>Card content</Card>
  </List.Item>
}