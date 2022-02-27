import { Routes, Route } from 'react-router-dom'
import RestaurantList from './components/RestaurantList';
import RestaurantRating from './components/RestaurantRating';
import { Layout} from 'antd'
import './App.css'

const { Header, Footer, Content } = Layout

export default function App() {
  return (
    <Layout>
      <Header>
        <h1>Restaurant List</h1>
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/RestaurantRating/:id" element={<RestaurantRating />} />
        </Routes>
      </Content>
        <Footer>
          &copy; 2022, Peter L.
        </Footer>
    </Layout>
  );
}