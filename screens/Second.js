import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert,Platform, AsyncStorage, ListView, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Second extends Component{
   constructor(props){
     super(props);
     this.state = {
       isLoading:true,
       dataSource:[],
     }
   }
   componentDidMount(){
     fetch('http://127.0.0.1:8000/api/ceo/')
     .then((response)=>response.json())
     .then((responseJson)=>{
       this.setState({
         isLoading:false,
         dataSource:responseJson
       });
     })
     .catch((error)=>{
       console.error(error);
     });
   }
 
   FlatListItemSeparator = () =>{
     return(
       <View
       style={{
         height:4,
         width:"100%",
         backgroundColor:"red",
       }}>
       </View>
     );
   }
   _renderItem = (id,cname,company_name,year,company_head,what_company)=>{
     const {navigate} = this.props.navigation
     navigate('EditActivity',{
      ID : id,
      CNAME : cname,
     COMPANY_NAME:company_name,
    YEAR:year,
    HEAD:company_head,
     WHAT:what_company
     });
   }
   /*_renderItem =({item,index})=>{
     return(
       <TouchableOpacity onPress={()=>alert(item.body)}>
       <View>
         <Text>{item.cname}</Text>
       </View>
       </TouchableOpacity>
     )
   }*/
   render(){
     let {dataSource,isLoading} = this.state
     if(isLoading){
       <View>
         <ActivityIndicator size="large" animating/>
       </View>
     }
     
     return(
       <View style={styles.MainContainer}>
         <FlatList
         data={dataSource}
         ItemSeparatorComponent={this.FlatListItemSeparator}
         renderItem={({item})=>
      <View>
          <Text
         onPress={this._renderItem.bind(this,
          item.id,
          item.cname,
          item.company_name,
          item.year,
          item.company_head,
          item.what_company)}>
            Hello {item.cname}
            </Text>
            </View>
         }
          keyExtractor={(item,index)=>index.toString()}
       />
       </View>
     )
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