/**  
   
    Redux என்றால் என்ன? — ஒரு central "கிடங்கு" (store), அங்கு உங்கள் app-ன் எல்லா data-வும் சேமிக்கப்படும்.
    ஏன் Redux? — பல components-க்கு ஒரே data தேவைப்படும்போது, props drilling தவிர்க்க Redux உதவும்.

    ஒரு பெரிய கடையை நினைத்துக்கொள்ளுங்கள்
    Store (கிடங்கு) — எல்லா பொருட்களும் சேமிக்கும் இடம்
    Action (கோரிக்கை) — "5 கிலோ அரிசி வேண்டும்" என்று சொல்வது
    Reducer (கடை ஆட்கள்) — கோரிக்கையை பார்த்து பொருளை கொடுப்பவர்கள்
    Dispatch (ஆர்டர் போடுவது) — கோரிக்கையை அனுப்பும் செயல்

    -----------------------------------------------------
        npm install @reduxjs/toolkit react-redux
    ----------------------------------------------------

            src/
        ├── store.js
        ├── features/
        │   └── counter/
        │       ├── counterSlice.js
        │       └── Counter.jsx
        └── main.jsx

        Redux Data Flow
        -----------------
        1. User button click செய்கிறார்
        2. dispatch(increment()) அழைக்கப்படுகிறது
        3. Action → Reducer-க்கு செல்கிறது
        4. Reducer புதிய state திரும்பிக்கொடுக்கிறது
        5. Store புதுப்பிக்கப்படுகிறது
        6. useSelector re-render தூண்டுகிறது
        7. UI புதிய count காட்டுகிறது


    counterSlice.js — முழு கோடு
    --------------------------------
        import { createSlice } from '@reduxjs/toolkit'

        export const counterSlice = createSlice({
        name: 'counter',
        initialState: { value: 0 },
        reducers: {
            increment: state => { state.value += 1 },
            decrement: state => { state.value -= 1 },
            reset:     state => { state.value = 0 },
            addAmount: (state, action) => { 
            state.value += action.payload 
            }
        }
        })

        export const { increment, decrement, reset, addAmount } 
        = counterSlice.actions

        export const selectCount = (state) => state.counter.value
        export default counterSlice.reducer


    Counter.jsx — முழு Component
    -------------------------------

        import { useSelector, useDispatch } from 'react-redux'
        import { increment, decrement, reset, addAmount, selectCount }
        from './counterSlice'

        export function Counter() {
        const count = useSelector(selectCount)
        const dispatch = useDispatch()

        return (
            <div>
            <h2>எண்: {count}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(addAmount(5))}>+5</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        )
        }

        

        Store — data சேமிக்கும் கிடங்கு, configureStore மற்றும் Provider
        Action — என்ன செய்ய வேண்டும் என்று சொல்லும் object
        Reducer — Action-ஐ பெற்று state மாற்றும் function, createSlice
        Dispatch — useDispatch hook மூலம் Action அனுப்புதல்
        Selector — useSelector hook மூலம் data படிக்குதல்
        முழு உதாரணம் — Counter App-ல் எல்லாம் சேர்ந்து வருவது
        வினா-விடை — உங்கள் புரிதலை சோதியுங்கள்

    
**/
