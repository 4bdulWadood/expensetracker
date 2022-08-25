import { StyleSheet, Text, View } from 'react-native';

export default function Total({value, text}) {
  return (
     <View style={styles.container}>
        <View style={styles.containerText}>
            <Text style={styles.leftText}>{text}</Text>
            <Text style={styles.rightText}>${value}</Text>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey",
        width: "85%",
        height: 50,
        alignSelf: "center",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        marginBottom: 0,
        marginTop: "4%",
        marginBottom:  15
    },
    containerText: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    leftText: {
        marginLeft: "6%"
    },
    rightText: {
        marginRight: "5%",
        fontSize: "20", 
        fontWeight: "bold"
    }
});
