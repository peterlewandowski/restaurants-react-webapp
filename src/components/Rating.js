import { useState, useEffect } from 'react';

export default function Rating () {
    const [ratings, setRatings] = useState();
  useEffect(() => {
      // fetch data from API
      fetch('https://bocacode-intranet-api.web.app/restaurants')
          .then(response => response.json())
          .then(data => {setRatings(data)})
          .catch(alert)
  }, [])
    return (
        ratings
    )
}