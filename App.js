import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import RecentExpenses from './screens/recentExpenses'
import AllExpenses from './screens/allExpenses';
import ManageExpense from './screens/manageExpense';
import { Provider } from 'react-redux'
import { store } from './store/redux/store'

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const color = "orange"


const Home = ({navigation}) => {

  function pressHandler(){
    navigation.navigate("Manage Expense",{
      headerName: "Add Expenses"
    })
  }

  return (
    <Tab.Navigator  screenOptions={{
      headerRight: ()=>{return (<View style={styles.headerRight}><Ionicons name="add-outline" size={25} onPress={pressHandler}/></View>)}
    }}>
      <Tab.Screen name="Recent Expenses" options={{
        title: "Expenses",
        headerTitle: "Recent Expenses",
        tabBarIcon: ({ color})=>(( <Ionicons name="hourglass-outline" size={25} color={color}/>)),
        tabBarActiveTintColor: color,
        }} component={()=>((<RecentExpenses/>))} />
      <Tab.Screen name="All Expenses"  options={{
        tabBarIcon: ({ color } )=>(( <Ionicons name="calendar-outline" size={25} color={color}/>)), 
        tabBarActiveTintColor: color,
        }}  component={()=>((<AllExpenses/>))} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="Manage Expense"
          component={ManageExpense}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight:{
    marginRight: 15
  }
});
