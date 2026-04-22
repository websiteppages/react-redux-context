/**  
   
    Dispatch — Action அனுப்புதல்
    -------------------------------
    useDispatch hook மூலம் Actions-ஐ Store-க்கு அனுப்புகிறோம்

    Dispatch என்பது "ஆர்டர் போடுவது" போல. நீங்கள் ஆர்டர் போட்டால், கடை ஆட்கள் (Reducer) 
    அதை handle செய்வார்கள்.


    Counter.jsx — useDispatch பயன்பாடு
    --------------------------------------
        import { useDispatch } from 'react-redux'
        import { increment, decrement, addAmount } 
        from './counterSlice'

        function Counter() {
        // dispatch function-ஐ பெறுகிறோம்
        const dispatch = useDispatch()

        return (
            <div>
            // Button click-ல் Action அனுப்புகிறோம்
            <button onClick={() => dispatch(increment())}>
                + கூட்டு
            </button>
            
            <button onClick={() => dispatch(decrement())}>
                - கழி
            </button>
            
            // payload-உடன் dispatch
            <button onClick={() => dispatch(addAmount(5))}>
                +5 கூட்டு
            </button>
            </div>
        )
        }










    
**/
