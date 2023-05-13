import { Modal, Form, Stack, Row, Col, Button } from "react-bootstrap";
import { Tag } from "../App";

type EditTagsModalProps = {
  availableTags: Tag[];
  show: boolean;
  handleCloseModal: () => void;
  onUpdateTag: (id: string, Label: string) => void;
  onDeleteTag: (id: string) => void;
};

export function EditTagsModal({
  availableTags,
  show,
  handleCloseModal,
  onUpdateTag,
  onDeleteTag,
}: EditTagsModalProps) {
  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      onDeleteTag(tag.id);
                    }}
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
