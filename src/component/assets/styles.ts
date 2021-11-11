'use strict';
import { StyleSheet } from 'react-native';
const primary = "#74b9ff";
module.exports = StyleSheet.create({
    pt10:{
        paddingTop:10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        color:'black',
        marginTop:20
    },
    mt10:{
        marginTop:10,
    },
    mt20:{
        marginTop:20
    },
    column:{
      flex:1,
      flexDirection:'column',
      paddingLeft:20,
      paddingRight:20,
    },
    vcenter:{
        justifyContent:'center',
        flex:1
    },
    primaryBg:{
        backgroundColor:primary
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal:{
        padding:10,
        width:300
    },
    buttonDialog:{
        marginTop:30
    },
    textcenter:{
        textAlign:"center"
    },
    link:{
        color:"blue"
    },
    tabContainer:{
        height:400,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:primary
    },
    p0:{
        padding:0,
    },
    m0:{
      margin:0  
    },
    w100:{
        width:"100%"
    },
    h100:{
        height:"100%"
    },
    htab:{
        height:100
    },
    textwhite:{
        color:"white",
    }
})