import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Rate, Button, Cascader } from 'antd';

const options = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 4.5,
    label: "4.5",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 3.5,
    label: "3.5",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 2.5,
    label: "2.5",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 1.5,
    label: "1.5",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 0.5,
    label: "0.5",
  },
];

export default function RestaurantRating () {
    const [restaurant, setRestaurant] = useState({}); // initial state set to null?
    const [rating, setRating] = useState();
    const params = useParams();

    const handleRating = () => {
        fetch(`https://bocacode-intranet-api.web.app/restaurants/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ rating: rating }),
        })
        .then((response) => response.json)
        .then(() => setRating(0))
        .catch(alert);
    };

    useEffect(() => {
        fetch(`https://bocacode-intranet-api.web.app/restaurants`)
            .then((response) => response.json())
            .then((data) => setRestaurant(data))
            .catch(alert);
    }, [rating]);

    

  return (
    <div className="rating">
      {/* <Rate value={rating} onChange={(value) => setRating(value)} /> */}
      <Cascader
        defaultValue={["Give it a rating"]}
        options={options}
        onChange={(value) => setRating(value)}
      />
      <br></br>
      <Button
        onClick={handleRating}
        type="primary"
        size={"large"}
        style={{ marginTop: "20px" }}
      >
        Submit Rating
      </Button>
    </div>
  );
}
