    import { createSlice } from '@reduxjs/toolkit'

    const expensesSlice = createSlice({
        name: 'expenses',
        initialState: {
            ids: [],
        },
        reducers: {
            //The name/description can be used as an ID because we only accept unique values for the name 
            addExpense: (state, action)=>{
                state.ids.push(action.payload)
            },
            removeExpense: (state, action)=>{
                 state.ids = state.ids.filter((item)=>item.name!==action.payload.name)
            },
            updateExpense: (state, action)=>{
                state.ids = state.ids.map((item)=>{
                    if(item.name===action.payload.prevName){
                        return {
                            name: action.payload.name===""?item.name:action.payload.name,
                            date: action.payload.date===""?item.date:action.payload.date,
                            amount: action.payload.amount===""?item.amount:action.payload.amount,
                        }
                    }else{
                        return item;
                    }
                })
           }
        }
    }) 

    export const addExpense = expensesSlice.actions.addExpense;
    export const removeExpense = expensesSlice.actions.removeExpense;
    export const updateExpense = expensesSlice.actions.updateExpense;
    export default expensesSlice.reducer;