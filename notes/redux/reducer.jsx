/**  
   
    Reducer — மாற்றும் இயந்திரம்
    ---------------------------------
    Action-ஐ பெற்று, state-ஐ மாற்றும் pure function

    Reducer என்பது சமையல்காரன் போல. "பழைய உணவு + புதிய செய்முறை = புதிய உணவு". 
    அதாவது: பழைய state + action = புதிய state

    counterSlice.js — createSlice மூலம் Reducer
    ----------------------------------------------
        import { createSlice } from '@reduxjs/toolkit'

        const counterSlice = createSlice({
        name: 'counter',          // Slice-ன் பெயர்
        
        initialState: { value: 0 }, // ஆரம்ப நிலை
        
        reducers: {
            // Action 1: ஒன்று கூட்டு
            increment: (state) => {
            state.value += 1       // நேரடியாக மாற்றலாம் (Immer காரணம்)
            },
            
            // Action 2: ஒன்று கழி
            decrement: (state) => {
            state.value -= 1
            },
            
            // Action 3: குறிப்பிட்ட அளவு கூட்டு
            addAmount: (state, action) => {
            state.value += action.payload  // payload-ல் வந்த எண்
            }
        }
        })

        export const { increment, decrement, addAmount } = counterSlice.actions
        export default counterSlice.reducer










    
**/
