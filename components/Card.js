import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Card({title, date, amount}) {
    const navigation = useNavigation();
    function UpdateExpenseHandler(){
        navigation.navigate("Manage Expense", {
            headerName: "Update Expenses",
            name: title
        })
    }

  return (
    <Pressable style={(pressed)=>(pressed?"pressedStyle":null)} onPress={UpdateExpenseHandler}>
     <View style={styles.container}>
        <View style={styles.innercontainer}>
            <View style={styles.innercontainerLeft}>
                <Text style={styles.textStyle}>{title}</Text>
                <Text>{date}</Text>
            </View>
        <View style={styles.innercontainerRight}><Text>${amount}</Text></View>
        </View>
     </View>
     </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey",
        width: "85%",
        height: 80,
        alignSelf: "center",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        marginBottom: 20
    },
    innercontainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    leftText: {
        marginLeft: "6%"
    },
    rightText: {
        marginLeft: "47%",
        fontSize: "20", 
        fontWeight: "bold"
    },
    innercontainerLeft: {
        flexDirection: "column",
        marginHorizontal: 20
    },
    innercontainerRight:{
        marginRight: 15,
        backgroundColor: "white",
        width: "20%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    textStyle: {
        fontWeight: "bold",
        marginBottom: 4
    },
    pressedStyle: {
        opacity: "50%"
    }
});
