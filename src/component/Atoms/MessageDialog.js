import {Modal, FormControl, Button} from 'native-base';
import React, {Component} from 'react';
export const MessageDialog = (message, show)=>{
    const [showModal, setShowModal] = React.useState(show);
    return(
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Alert</Modal.Header>
          <Modal.Body>
            <FormControl mt="3">
              <FormControl.Label>{message}</FormControl.Label>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Ok
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )
}