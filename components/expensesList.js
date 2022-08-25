import { FlatList, StyleSheet } from 'react-native';
import Card from './Card'
function RenderExpenseItem(itemData){
    return <Card title={itemData.item.name} date={itemData.item.date.toString()} amount={itemData.item.amount}/>
}



export default function ExpensesList({expenses}) {
  return (
     <FlatList style={styles.flatlist} data={expenses} renderItem={(props)=> <RenderExpenseItem {...props} />} keyExtractor={(item) => item.name}/>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: "20%"
  }
})