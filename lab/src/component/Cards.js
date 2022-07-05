import React, { useState ,useEffect } from 'react';
import CardData from "./CardData";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card,CardGroup} from 'react-bootstrap';

function Cards() {
  
  const [memeImage, setMemeImahe] = useState();
  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div>
      <Button variant="outline-secondary" onClick={myRandomEmg}>Get a new image</Button>{' '}
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={memeImage} />
      </Card>
      </CardGroup>
    </div>
  );
}

export default Cards;