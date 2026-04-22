/**  
   Selector — data படிக்குதல்
   ------------------------------
    useSelector hook மூலம் Store-லிருந்து data படிக்கிறோம்

    useSelector என்பது Store என்ற "பொது நோட்புக்"-லிருந்து குறிப்பிட்ட பக்கத்தை திறப்பது போல.

        Counter.jsx — useSelector பயன்பாடு
        ---------------------------------------------
        import { useSelector, useDispatch } from 'react-redux'
        import { increment, decrement } from './counterSlice'

        function Counter() {
        // Store-லிருந்து counter.value-ஐ படிக்கிறோம்
        const count = useSelector(
            (state) => state.counter.value
        )
        const dispatch = useDispatch()

        return (
            <div>
            // count மாறும்போது UI தானாக update ஆகும்
            <h2>எண்: {count}</h2>
            
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        )
        }


    Selector Functions — தனியே எழுதலாம்
    ------------------------------------------

        // counterSlice.js-ல் selector export செய்யலாம்
        export const selectCount = (state) => state.counter.value
        export const selectDouble = (state) => state.counter.value * 2

        // Component-ல் பயன்படுத்தல்
        const count = useSelector(selectCount)
        const doubled = useSelector(selectDouble)










    
**/
