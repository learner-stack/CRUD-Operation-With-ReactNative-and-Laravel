
import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert,Platform, AsyncStorage} from 'react-native';
 
class RegisterScreen extends Component {

constructor(props) {
 
   super(props)
 
   this.state = {
 
    UserName: '',
     UserEmail: '',
     UserPassword: '',
     ConfirmPassword:'',
   }
}

InsertStudentRecordsToServer =()=>{
    console.log(this.state);
    fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
   
            name:this.state.UserName,
            email:this.state.UserEmail,
            password:this.state.UserPassword,
            password_confirmation:this.state.ConfirmPassword,
   
        })
   
        }).then((response) => response.json())
            .then((responseJson) => {
   
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
              console.log(responseJson);
   
            }).catch((error) => {
              console.error(error);
            });
   
}

GoTo_Login =({navigation}) =>{
    this.props.navigation.navigate('Login');
}

 render(){
   return(
    <View style={styles.MainContainer}>

 
    <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> ADMIN Registration Form </Text>

    <TextInput
      
      placeholder="Enter Your Name"

      onChangeText={ UserName => this.setState({ UserName  }) }

      underlineColorAndroid='transparent'

      style={styles.TextInputStyleClass}
    />

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

    <TextInput

      placeholder="Confirm your password"

      onChangeText={ ConfirmPassword => this.setState({ConfirmPassword  }) }

      underlineColorAndroid='transparent'

      style={styles.TextInputStyleClass}
    />

   <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >

     <Text style={styles.TextStyle}> REGISTER </Text>

   </TouchableOpacity>

   <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Login} >

     <Text style={styles.TextStyle}>GO TO LOGIN </Text>

   </TouchableOpacity>


</View>
   );

 }
 
 }
 

 //export RegisterScreen;

 

 


export default RegisterScreen;

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