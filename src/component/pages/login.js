import * as React from 'react';
import {API_KEY} from '@env';
import { connect } from 'react-redux';
import { loginAction } from '../../action';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';
import { StyleSheet, Link } from 'react-native';
import { Input, Layout, Text, Button, Modal, Card } from '@ui-kitten/components';
const LoginPage = ({navigation})=> {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [dialog, setDialog] = React.useState(false);
  const Login=()=>{
    if(username==""){
      setMessage("Mohon isi Username");
      setDialog(true);
    }
  }
  const closeDialog=()=>{
    setDialog(false);
  }
  const goToSignUp=()=>{
    navigation.navigate('SignUp')
  }
  return (
    <Layout style={[styles.column,styles.primaryBg]} level='1'>
      <Layout style={[styles.vcenter,styles.primaryBg]}>
        <Modal 
          backdropStyle={styles.backdrop}
          visible={dialog}
          style={styles.modal}
          >
          <Card disabled={true}>
            <Text category="h5">Warning</Text>
            <Text category="s2">{message}</Text>
            <Button size="small" 
                  style={styles.buttonDialog}
                  onPress={() => setDialog()}>
              Ok
            </Button>
          </Card>
        </Modal>
        <Text category="h2">Selamat Datang</Text>
        <Text category="s1">Silahkan Login</Text>
        <Input
          style={styles.input}
          placeholder='Username'
          value={username}
          onChangeText={nextValue => setUsername(nextValue)}
        />
        <Input
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={e => setPassword(e)}
        />
        <Button onPress={()=>Login()} style={styles.mt20}>
          Masuk
        </Button>
        <Text style={[styles.textcenter, styles.mt10]}>
          Belum memiliki akun?
          <Text style={styles.link} onPress={()=>{goToSignUp()}}> Daftar</Text>
        </Text>
      </Layout>
    </Layout>
  );
}
export default LoginPage;