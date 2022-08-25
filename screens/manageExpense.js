import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import { addExpense, removeExpense, updateExpense } from '../store/redux/expenses'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function ManageExpense({navigation}) {
  //The id of the component being updated is received as a prop
  const route = useRoute();
  const expenses = useSelector((state)=> state.expenses.ids)
  const dispatch = useDispatch();

  const [text, onChangeText] = useState("")
  const [date, onChangeDate] = useState("")
  const [amount, onChangeAmount] = useState("")

  function Add() {
    //Append the global state ( the array containing all expenses )
    //When your adding an expense you need to have all fields entered
    if(text!=""&&date!=""&&amount!=""){
      const obj = {
        name: text,
        date,
        amount: parseFloat(amount)
      }

      const namesList = expenses.map((item)=>{return item.name;});

      if(!namesList.includes(text)){
        dispatch(addExpense(obj))
      }
    }

    navigation.goBack();
  }

  function Remove(){
      dispatch(removeExpense({ name: route.params.name  }))
      navigation.goBack();
  }
  
  function Update(){
      dispatch(updateExpense({ name: text, date: date, amount: parseFloat(amount), prevName: route.params.name  }))
      navigation.goBack();
  }

  navigation.setOptions({ title: route.params.headerName })
  var str = ""
  if(route.params.headerName==="Add Expenses"){
    str = "Add"
  }else{
    str = "Update"
  }

  return (
     <View style={styles.mainContainer}>
          <View style={styles.textInput}>
              <Text style={styles.header}>Your Expense</Text>
              <View style={styles.divider}>
                <View style={{"marginLeft": "4%"}}>
                  <Text>Amount</Text>
                  <View style={styles.inputContainer}>
                  <TextInput 
                      style={styles.input}
                      onChangeText={onChangeAmount}
                      value={amount}
                  />
                  </View>
                </View>
                <View style={{"marginRight": "4%"}}>
                  <Text>Date</Text>
                  <View style={styles.inputContainer}>
                  <TextInput 
                      style={styles.input}
                      onChangeText={onChangeDate}
                      value={date}
                      placeholder="YYYY-MM-DD"
                  />
                  </View>
                </View>
                
              </View>

              <View style={{"marginTop": "4%"}}>
                  <Text>Description</Text>
                  <View style={styles.bigInputContainer}>
                  <TextInput 
                      style={styles.bigInput}
                      onChangeText={onChangeText}
                      value={text}
                      multiline={true}
                      blurOnSubmit={true}
                  />
                  </View>
              
              </View>
          </View>
          <View style={styles.secondaryContainer}>
            <Pressable onPress={navigation.goBack}><View style={styles.buttonBackground}><Text style={{color: "white"}}>Cancel</Text></View></Pressable>
            <Pressable onPress={str==="Add"?Add:Update}><View style={styles.buttonBackground}><Text style={{color: "white"}}>{str}</Text></View></Pressable>
          </View>
          <Ionicons onPress={Remove} name="trash-outline" size={35} color={"red"}/> 
     </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: "center"
    },
    secondaryContainer: {
      flexDirection: "row",
      width: "90%",
      height: "10%",
      borderBottomWidth: 2,
      borderColor: "lightorange",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10%"
    },
    buttonBackground: {
      marginHorizontal: 25,
      backgroundColor: "orange",
      width: 85,
      height: "60%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5
    },
    textInput: {
      height: "40%",
      marginBottom: "15%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20%"
    },
    description: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "10%"
    },
    amount: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "10%",
      marginTop: "20%"
    },
    input: {
      height: 40,
      fontWeight: "bold",
      paddingHorizontal: 10
    },
    header: {
      fontSize: 25,
      fontWeight: "bold",
    },
    divider: {
      flexDirection: "row",
      marginTop: "5%",
      width: "100%",
      justifyContent: "space-between"
    },
    inputContainer: {
      backgroundColor: "lightgrey",
      borderRadius: 5,
      width: 175,
    },
    bigInputContainer: {
      backgroundColor: "lightgrey",
      borderRadius: 5,
      height: 120,
      width: 360
    },
    bigInput: {
      height: "90%",
      fontWeight: "bold",
      paddingHorizontal: 10,
      marginTop: "1%",
    }

    
    

});
