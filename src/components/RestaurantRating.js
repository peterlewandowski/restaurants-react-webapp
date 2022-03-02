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

export default function RestaurantRating({ id, setRestaurants }) {
    const [rating, setRating] = useState();

    const handleRating = () => {
        fetch(`https://bocacode-intranet-api.web.app/restaurants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ rating: rating }),
        })
        .then((response) => response.json())
        .then(data => {
          setRestaurants(data)
          setRating(0)
        })
        .catch(alert);
    };    

  return (
    <div className="rating">
      {/* <Rate value={rating} onChange={(value) => setRating(value)} /> */}
      <Cascader
        defaultValue={["Give it a rating"]}
        options={options}
        onChange={(rating) => setRating(rating)}
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
