import * as React from 'react';
import {useState} from 'react';
import {API_KEY} from '@env';
import { connect } from 'react-redux';
import { loginAction } from '../../action';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';
import { ScrollView } from 'react-native';
import { Input, Layout, Text, Button, Modal, Card, Tab, TabView } from '@ui-kitten/components';


const SignUpPage = ({navigation})=> {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [gerai, setGerai] = useState("");
  const [idSisiDarat, setIdSisiDarat] = useState("");
  const [masaBerlakuPass, setMasaBerlakuPass] = useState("");
  const [masaBerlakuKontrak, setMasaBerlakuKontrak] = useState("");
  const [message, setMessage] = useState("");
  const [dialog, setDialog] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const SignUp=()=>{
    if(username==""){
      setMessage("Mohon isi Username");
      setDialog(true);
    }
  }
  const closeDialog=()=>{
    setDialog(false);
  }
  const goToLogin=()=>{
    navigation.navigate('Login')
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
        <Text category="h2">Pendaftaran</Text>
        <Text category="s1">Masukkan data Anda</Text>
        <TabView
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
          style={styles.p0}>
            <Tab style={[{backgroundColor:"black", margin:0, padding:0}]} title="Perusahaan">
              <Layout style={styles.tabContainer}>
                <ScrollView style={styles.w100}>
                  <Input
                    style={styles.input}
                    placeholder='Nama Perusahaan'
                    value={namaPerusahaan}
                    onChangeText={nextValue => setNamaPerusahaan(nextValue)}
                  />
                  <Input
                    style={styles.input}
                    placeholder='Gerai'
                    value={gerai}
                    onChangeText={nextValue => setGerai(nextValue)}
                  />
                </ScrollView>
              </Layout>
            </Tab>
            <Tab title="Data Diri">
              <Layout style={styles.tabContainer}>
                <ScrollView style={styles.w100}>
                  <Text category="s1" style={styles.mt20}>Masukkan id sisi darat atau upload kartu</Text>
                  <Input
                    style={styles.input}
                    placeholder='Id Sisi Darat'
                    value={idSisiDarat}
                    onChangeText={nextValue => setIdSisiDarat(nextValue)}
                  />
                  <Input
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={e => setPassword(e)}
                  />
                </ScrollView>
              </Layout>
            </Tab>
            <Tab title="Data Akun">
              <Layout style={styles.tabContainer}>
                <ScrollView style={styles.w100}>
                  <Input
                    style={styles.input}
                    placeholder='Email'
                    value={username}
                    onChangeText={nextValue => setUsername(nextValue)}
                  />
                  <Input
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={e => setPassword(e)}
                  />
                </ScrollView>
              </Layout>
            </Tab>
        </TabView>
        <Button onPress={()=>SignUp()} style={styles.mt20}>
          Daftar
        </Button>
        <Text style={[styles.textcenter, styles.mt10]}>
          Sudah memiliki akun?
          <Text style={styles.link} onPress={()=>{goToLogin()}}> Masuk</Text>
        </Text>
      </Layout>
    </Layout>
  );
}
export default SignUpPage;