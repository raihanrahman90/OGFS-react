import * as React from 'react';
import {API_KEY} from '@env';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Modal,
  HStack,
} from 'native-base';

import { connect } from 'react-redux';
import { loginAction } from '../../action';
import { MessageDialog } from '../Atoms/MessageDialog';
const LoginPage = ({navigation}: {navigation: any})=> {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dialog, setDialog] = React.useState(false);
  const Login=()=>{
    if(username==""){
      setDialog(true);
    }
  }
  return (
    <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
      <Heading size="lg" fontWeight="600" color="coolGray.800">
        Selamat Datang
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Silahkan Login
      </Heading>
      <MessageDialog message={"Mohon isi username"} showModal={dialog}/>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            Email ID
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            Password
          </FormControl.Label>
          <Input type="password" />
          <Link
            _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
            alignSelf="flex-end"
            mt="1">
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
          Masuk
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            I'm a new user.{' '}
          </Text>
          <Link
            onPress={()=>{
              navigation.navigate('SignUp')
            }}
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            >
              Daftar
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
export default LoginPage;