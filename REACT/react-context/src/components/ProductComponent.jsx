import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { AppContext } from '../context/UserContext';
import { useContext } from 'react';

function ProductComponent(){

    const {basket, setBasket} = useContext(AppContext);

    function addToBasketHandler() {
        // add one item to the basket.items array
        const item = {name: "Mouse Asus", id: 231};
        setBasket({...basket, items: [...basket.items, item]})
    }

  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => addToBasketHandler()} >Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}
export { ProductComponent }