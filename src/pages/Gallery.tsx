import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import galleryData from '../gallery.json';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const renderImageGrid = () => {
    return galleryData.map((item: GalleryItem) => (
      <Col key={item.id} xs={12} sm={6} md={3} lg={3} className="mb-4">
        <Card className="gallery-card" onClick={() => handleImageClick(item)}>
          <Card.Img variant="top" src={item.image} />
          <Card.ImgOverlay>
            <div className="overlay-content">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="gallery-section bg-dark text-light">
      <Container>
        <h2>Gallery</h2>
        <p>Explore our collection of artwork.</p>
        <Row>{renderImageGrid()}</Row>

        {selectedItem && (
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedItem.image} alt={selectedItem.title} />
              <p>{selectedItem.description}</p>
              <h4>Price: $100</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary">Buy Now</Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default Gallery;
