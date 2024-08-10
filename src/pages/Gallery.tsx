import React, { useState, useEffect, useRef } from 'react';
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
  const [visibleItemId, setVisibleItemId] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleScroll = () => {
    if (galleryRef.current) {
      const galleryItems = galleryRef.current.querySelectorAll('.gallery-card');
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const tolerance = 100; // Tolerance in pixels

      galleryItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const isNearCenter = Math.abs(itemCenter - viewportCenter) < tolerance;

        if (isNearCenter) {
          const id = parseInt(item.getAttribute('data-id') || '0', 10);
          setVisibleItemId(id);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderImageGrid = () => {
    return galleryData.map((item: GalleryItem) => (
      <Col key={item.id} xs={12} sm={6} md={3} lg={3} className="mb-4">
        <Card
          className={`gallery-card ${visibleItemId === item.id ? 'hover-effect' : ''}`}
          onClick={() => handleImageClick(item)}
          data-id={item.id}
        >
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
    <div className="gallery-section bg-dark text-light" ref={galleryRef}>
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
