import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { handleDelete } from "../firebase_handlers/handleDeleteItem";
import { useNavigate } from "react-router-dom";

function CardPage({ data }) {
  let navigate = useNavigate();

  useEffect(() => {
    console.log(data.id);
  }, []);
  return (
    <Card style={{ width: "18rem", height: "500px" , marginBottom:"200px"}} className="card1">
      <Card.Img  variant="top" src={data.data().imgUrl} />
      <Card.Body>
        <Card.Title>{data.data().name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Inventory: {data.data().inventory}</ListGroup.Item>
        <ListGroup.Item>price: {data.data().price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link
          onClick={() => {
            console.log("delete");
            handleDelete({ id: data.id });
          }}
        >
          Delete
        </Card.Link>
        <Card.Link
          onClick={() => {
            navigate("/updateitem", {
              state: {
                id: data.id,
              },
            });
          }}
        >
          update
        </Card.Link>
        <Card.Link
          onClick={() => {
            navigate("/viewitem", {
              state: {
                data: data.data(),
                id: data.id,
              },
            });
          }}
        >
          ViewItem
        </Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default CardPage;
