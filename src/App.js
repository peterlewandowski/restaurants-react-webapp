import { createContext } from 'react';
import RestaurantList from './components/RestaurantList';

// export const RestaurantContext = createContext()

export default function App() {
  // const [selectedRestaurant, setSelectedRestaurant] = useState();
  return (
      <section>
          <h1>Restaurants</h1>
          <RestaurantList />
      </section>
  )
}

