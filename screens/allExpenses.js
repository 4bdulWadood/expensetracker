import { View } from 'react-native';
import Total from '../components/total'
import ExpensesList from '../components/expensesList'
import { useSelector } from 'react-redux'

export default function AllExpenses() {
  const expenses = useSelector((state)=> state.expenses.ids)
  const costList = expenses.map((item)=>{return item.amount;});
  return (
     <View>
          <Total value={costList.reduce(
            (acc, value)=>{
              return acc + value
            },
            0
          ).toFixed(2)} text="Total"/>
          <ExpensesList expenses={expenses} />
     </View>
  )
}

