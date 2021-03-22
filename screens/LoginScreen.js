
import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert,Platform, AsyncStorage} from 'react-native';
 
class LoginScreen extends Component {
    constructor(props) {
 
        super(props)
      
        this.state = {
      
          UserEmail: '',
          UserPassword: '',
        }
     }
     LoginRecords =()=>{
        const { userEmail }  = this.state ;
        const { password }  = this.state ;
        const { navigate } = this.props.navigation;
        console.log(this.state);
        fetch('http://127.0.0.1:8000/api/login/',{
                method:'post',
                body:JSON.stringify({        
                    "email" : this.state.UserEmail,
                    "password" : this.state.UserPassword,
            }),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8'
                }
            })//now fetch the data. . .
            //console.log("Body is sent")
            .then(function(response){
                response.json()
                .then(function(resp){
             //   console.log("everything is proper");
              //  console.log(resp)
                Alert.alert("Logged in");
                console.log(resp);
                if(resp.status === 500){
                    navigate('Dashboard');
                }
            
                })
            })
         console.log("You are logged in succesfully!");
     }


 render(){
   return(
    <View style={styles.MainContainer}>

 
    <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Student Registration Form </Text>

   <TextInput
      
      placeholder="Enter UserEmail"

      onChangeText={ UserEmail=> this.setState({UserEmail  }) }

      underlineColorAndroid='transparent'

      style={styles.TextInputStyleClass}
    />

   <TextInput
      
      placeholder="Enter the User Password"

      onChangeText={ UserPassword => this.setState({UserPassword}) }

      underlineColorAndroid='transparent'

      style={styles.TextInputStyleClass}
    />


   <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.LoginRecords} >

     <Text style={styles.TextStyle}> LOGIN </Text>

   </TouchableOpacity>

   

</View>
   );

 }
 
 }
 

 //export RegisterScreen;

 

 


export default LoginScreen;

const styles = StyleSheet.create({
 
    MainContainer :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff'
   
    },
   
    MainContainer_For_Show_StudentList_Activity :{
      
      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      
      },
   
    TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5 ,
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#00BCD4'
   
    },
   
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
   
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    }
   
  });