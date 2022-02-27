import { List, Card } from 'antd';


export default function RestaurantCard({ item }) {
  return (
    <List.Item>
      <div padding="30px" background-color="grey">
        <Card
          title={item.name}
          bordered={true}
          style={{ width: 300 }}
          cover={<img alt="Restaurant" src={item.photoUrl} />}
        >
          <p>Rating</p>
          <p>Rate this restaurant</p>
        </Card>
      </div>
    </List.Item>
  );
}

