import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { handleDelete } from "../firebase_handlers/handleDeleteItem";
import { getProduct } from "../firebase_handlers/handleGetProduct";
function Viewitem() {
  const location = useLocation();
  let navigate = useNavigate();
  const [data, setData] = useState(location.state.data);
  const [id, setId] = useState(location.state.id);

  return (
    // <div>stam</div>
    <Card style={{ width: "18rem", height: "500px" }} className="card1">
      <Card.Img variant="top" src={data.imgUrl} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Inventory: {data.inventory}</ListGroup.Item>
        <ListGroup.Item>price: {data.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link
          onClick={() => {
            console.log("delete");
            handleDelete({ id: id });
          }}
        >
          Delete
        </Card.Link>
        <Card.Link
          onClick={() => {
            navigate("/updateitem", {
              state: {
                id: id,
              },
            });
          }}
        >
          update
        </Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default Viewitem;
