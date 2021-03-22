import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert,Platform, AsyncStorage, ListView, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Second extends Component{
   constructor(props){
     super(props);
     this.state = {
       company_id:'',
       ceo_name:'',
       company_name:'',
       year:'',
       company_headquarters:'',
       company_does:'',
     }
   }
   componentDidMount(props){
       const {ID,CNAME,COMPANY_NAME,YEAR,HEAD,WHAT} = this.props.route.params;
      this.setState({
         company_id:ID,
         ceo_name:CNAME,
         company_name:COMPANY_NAME,
        //  company_name:this.props.navigation.navigate.params.COMPANY_NAME,
         year:YEAR,
         company_headquarters:HEAD,
         what_company:WHAT,
      })
     // console.log(state);
      
     
   }
   UpdateStudentRecord = () =>{
    const id = this.state.company_id;
    console.log(id);
    fetch('http://127.0.0.1:8000/api/ceo/'+id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'cname':this.state.ceoname,
      'company_name':this.state.company_name,
      'year':this.state.year,
      'company_head':this.state.company_headquarters,
      'what_company':this.state.what_does,
    })

    }).then((response) => response.json())
        .then((responseJson) => {

          // Showing response message coming from server updating records.
          Alert.alert(responseJson);
          console.log("Updated successfully!");

        }).catch((error) => {
          console.error(error);
        });

}

DeleteStudentRecord = () =>{
  const id = this.state.company_id;
  console.log(id);      
  fetch('http://127.0.0.1:8000/api/ceo/'+id, {
  method: 'DELETE',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    'id' : this.state.company_id,

  })

  }).then((response) => response.json())
  .then((responseJson) => {

    // Showing response message coming from server after inserting records.
    Alert.alert(responseJson);
    console.log(responseJson);

  }).catch((error) => {
     console.error(error);
  });

  this.props.navigation.navigate('Second');

}

 

   render() {
 
    return (
 
 <View style={styles.MainContainer}>
 
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Record Form </Text>
  
        <TextInput
          
          placeholder="Student Name Shows Here"
          
          value={this.state.ceo_name}
 
          onChangeText={ceo_name => this.setState({ ceo_name }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
       <TextInput
          
          placeholder="Student Class Shows Here"

          value={this.state.company_name}
 
          onChangeText={ company_name=> this.setState({ company_name}) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
       <TextInput
          
          placeholder="Student Phone Number Shows Here"

          value={this.state.year}
 
          onChangeText={ year => this.setState({ year}) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
 
          placeholder="Student Email Shows Here"

          value={this.state.company_headquarters}
 
          onChangeText={ company_headquarters => this.setState({ company_headquarters }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 

 <TextInput
 
 placeholder="Student Email Shows Here"

 value={this.state.what_company}

 onChangeText={ what_company => this.setState({ what_company }) }

 underlineColorAndroid='transparent'

 style={styles.TextInputStyleClass}
/>

       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >
 
          <Text style={styles.TextStyle}> UPDATE STUDENT RECORD </Text>
 
       </TouchableOpacity>
 
       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >
 
          <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
 
       </TouchableOpacity>
  
 
 </View>
            
    );
  }
  
}





export default Second;

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
      color:'#fff'
    }
   
  });