import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert,Platform, AsyncStorage} from 'react-native';

class Dashboard extends Component {
  constructor(props) {
 
    super(props)
  
    this.state = {
  
      ceoname: '',
      company_name: '',
      year:'',
      company_head:'',
      what_does:'',
    }
 }
 
     InsertCEODetails =()=>{
        console.log(this.state);
        const {ceoname,company_name,year,company_head,what_does} = this.state;
        fetch('http://127.0.0.1:8000/api/ceo/', {
            method: 'POST',
            body: JSON.stringify({
              'cname':this.state.ceoname,
              'company_name':this.state.company_name,
              'year':this.state.year,
              'company_head':this.state.company_head,
              'what_company':this.state.what_does,
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json; charset=UTF-8',
            },
           
       
            }).then((response) => response.json())
                .then((responseJson) => {
       
                  // Showing response message coming from server after inserting records.
                  Alert.alert(responseJson);
                  console.log(responseJson);
                //  this._onValueChange(STORAGE_KEY, responseJson.id_token)
       
                }).catch((error) => {
                  console.error(error);
                });
              }
    
                GoTo_Show_StudentList_Activity_Function = () =>
                {
                  this.props.navigation.navigate('Second');
                  
                }

    render(){
        return(
          <View style={styles.MainContainer}>

 
          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> CEO Registration Form </Text>
      
         <TextInput
            
            placeholder="Enter CEO Name"
      
            onChangeText={ceoname=> this.setState({ceoname}) }
      
            underlineColorAndroid='transparent'
      
            style={styles.TextInputStyleClass}
          />
      
         <TextInput
            
            placeholder="Enter the Company Name"
      
            onChangeText={ company_name => this.setState({company_name}) }
      
            underlineColorAndroid='transparent'
      
            style={styles.TextInputStyleClass}
          />

<TextInput
            
            placeholder="Enter the Year"
      
            onChangeText={ year => this.setState({year}) }
      
            underlineColorAndroid='transparent'
      
            style={styles.TextInputStyleClass}
          />
          
         <TextInput
            
            placeholder="Enter the Company Head"
      
            onChangeText={ company_head => this.setState({company_head}) }
      
            underlineColorAndroid='transparent'
      
            style={styles.TextInputStyleClass}
          />
      
      <TextInput
            
            placeholder="Enter the working"
      
            onChangeText={ what_does => this.setState({what_does}) }
      
            underlineColorAndroid='transparent'
      
            style={styles.TextInputStyleClass}
          />
      
         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertCEODetails} >
      
           <Text style={styles.TextStyle}> ADD CEO </Text>
      
         </TouchableOpacity>
      

         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_StudentList_Activity_Function} >
 
        <Text style={styles.TextStyle}> SHOW ALL INSERTED STUDENT RECORDS IN LISTVIEW </Text>

        </TouchableOpacity>
         
      
      </View>
        );
    }

}








export default Dashboard;

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