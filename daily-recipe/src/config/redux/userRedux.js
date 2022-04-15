import { createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name:"user",
  initialState : {value:{name:"fajri", age:0, email:""}},
  reducers:{
    login:(state,action)=> ({
        ...state,
        value : action.payload
      // console.log(state.value)
    }),
  },
})
export  const { login } = userSlice.actions;
// console.log(userSlice)
export default userSlice.reducer