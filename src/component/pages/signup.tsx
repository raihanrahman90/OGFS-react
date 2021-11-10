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
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';
import { useState } from 'react';

const SignUpPage =({navigation}: {navigation: any})=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
      <Heading size="lg" fontWeight="600" color="coolGray.800">
        Selamat Datang
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Silahkan Mendaftar
      </Heading>

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
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            Konfirmasi Password
          </FormControl.Label>
          <Input type="password" onChange={(e)=>setPassword(e)}/>
        </FormControl>
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            Daftar
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            Sudah punya akun? {' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="#">
            Login
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}

export default SignUpPage;