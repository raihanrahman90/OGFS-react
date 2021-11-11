import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Layout, Modal, Text } from '@ui-kitten/components'

const messageModal = ({message, visible})=>{
  return(
      <Modal visible={visible}>
        <Card disabled={true}>
          <Text>{message}</Text>
          <Button onPress={() => setVisible(false)}>
            Ok
          </Button>
        </Card>
      </Modal>
  );
}
export default messageModal;