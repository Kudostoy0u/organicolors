import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import galleryData from '../gallery.json';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string; // Added author property
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [visibleItemId, setVisibleItemId] = useState<number | null>(null);
  const [frameSize, setFrameSize] = useState<string>('medium');
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFrameSize('medium'); // Reset frame size when closing the modal
  };

  const handleFrameSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrameSize(event.target.value);
  };

  const handleScroll = () => {
    if (window.innerWidth > window.innerHeight) return;
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

  const getFramePrice = (size: string): number => {
    switch (size) {
      case 'small':
        return 7;
      case 'medium':
        return 12;
      case 'large':
        return 24;
      default:
        return 0;
    }
  };

  return (
    <div className="gallery-section bg-dark text-light" ref={galleryRef}>
      <Container>
        <h2>Gallery</h2>
        <p>Explore our collection of signed, framed, digital artwork, <br/>and support high school artists with your purchase.</p>
        <Row>{renderImageGrid()}</Row>

        {selectedItem && (
          <Modal data-bs-theme="dark" show={showModal} onHide={handleClose} centered className="modal-dark">
            <Modal.Header closeButton className="border-0">
              <Modal.Title>{selectedItem.title}<span className="text-secondary h6">&nbsp;&nbsp;by {selectedItem.author}</span></Modal.Title>

            </Modal.Header>
            <Modal.Body>
              <img src={selectedItem.image} alt={selectedItem.title} className="img-fluid mb-3" />
              <p>{selectedItem.description}</p>
              <Form.Group controlId="frameSizeSelect">
                <Form.Label>Select Frame Size:</Form.Label>
                <Form.Control
                  as="select"
                  value={frameSize}
                  onChange={handleFrameSizeChange}
                  className="bg-dark text-light border-0"
                >
                  <option value="small">Small Frame - $7</option>
                  <option value="medium">Medium Frame - $12</option>
                  <option value="large">Large Frame - $24</option>
                </Form.Control>
              </Form.Group>
              <h4 className="mt-3">Total Price: ${getFramePrice(frameSize)}</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark">Buy Now</Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default Gallery;
