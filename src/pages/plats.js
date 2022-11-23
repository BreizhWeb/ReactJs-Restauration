import axios from "axios";
import React from "react";
import { Card, Modal, Button } from 'react-bootstrap'

const baseURL = "http://localhost:3001/";

export default function Plats() {
    const [plats, setPlats] = React.useState(null);
    const [aliments, setAliments] = React.useState(null);

    const [isShow, invokeModal] = React.useState(false)
    const initModal = () => {
        return invokeModal(!false)
    }
     
    React.useEffect(() => {
        async function fetchPlats(){
            return await axios.get(baseURL+`plats/`);
        }
        async function fetchAliments(){
            return await axios.get(baseURL+`aliments/`);
        }
        
        (async () => {
            const plats = await fetchPlats();
            setPlats(plats.data);
            console.log(plats)
            const aliments = await fetchAliments();
            setAliments(aliments.data);
            console.log(aliments)
        })();
    }, []);

  if (!plats) return null;
  if (!aliments) return null;

  return (
    <>
            <section className='iteam_section mt-2 container'>
                <h2 className='text-center mb-2' style={{ fontWeight: 400 }}>Search Your Food</h2>
                <div className='container mt-3'>
                    <div className="row d-flex justify-content-center align-items-center">
                        {plats.map((e) => {
                            return (
                                <>
                                    <Card key={e.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style" >
                                        <Card.Img variant="top" src={e.imgdata} style={{ height: "16rem" }} className='mt-3' />
                                        <Card.Body>
                                            <Card.Title>{e.nom}</Card.Title>
                                            <Card.Text>
                                                Type :  {e.type}
                                                Prix :  {e.prix}
                                            </Card.Text>
                                            <Button variant="success" onClick={initModal}>Open Modal</Button>                                        
                                        </Card.Body>
                                    </Card>
                                    <Modal show={isShow}>
                                        <Modal.Header closeButton onClick={initModal}>
                                        <Modal.Title>React Modal Popover Example</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="danger" onClick={initModal}>
                                            Close
                                        </Button>
                                        <Button variant="dark" onClick={initModal}>
                                            Store
                                        </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
  );
}