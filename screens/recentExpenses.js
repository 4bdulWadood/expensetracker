  import { View } from 'react-native';
  import Total from '../components/total'
  import ExpensesList from '../components/expensesList'
  import { useSelector } from 'react-redux'

  export default function RecentExpenses() {
    const expenses = useSelector((state)=> state.expenses.ids)
    var startingIndex = (expenses.length-7<0?Math.abs(expenses.length-7):expenses.length-7)+1
    console.log(startingIndex, expenses.length)
    var cpy=expenses.slice(startingIndex, expenses.length).reverse();
    const costList = cpy.map((item)=>{return item.amount;});

    return (
       <View>
            <Total value={costList.reduce(
              (acc, value)=>{
                return acc + value
              },
              0
            ).toFixed(2)} text="Last 6 Expenses"/>
            <ExpensesList expenses={cpy}/>
       </View>
    )
  }
  