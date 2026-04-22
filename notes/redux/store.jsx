/**  
   Store — கிடங்கு
   ----------------
   App-ன் எல்லா data-வும் இங்கே சேமிக்கப்படும் — ஒரே ஒரு உண்மை மூலம்

   Store என்பது உங்கள் app-ன் "பொது நோட்புக்" போல. எல்லா components-உம் அதிலிருந்து படிக்கலாம், எழுதலாம். தனியே props-ல் அனுப்பத் தேவையில்லை.

----------------------------------------------------------------------------
    store.js — Store உருவாக்குதல்
    -------------------------------
        import { configureStore } from '@reduxjs/toolkit'
        import counterReducer from './counterSlice'

        // Store-ஐ உருவாக்குதல்
        const store = configureStore({
        reducer: {
            counter: counterReducer,  // இங்கே reducer-களை இணைக்கிறோம்
            user: userReducer,        // பல reducer-கள் சேர்க்கலாம்
        }
        })

        export default store

        ---------------------------------------------------------------

    main.jsx — Store-ஐ App-உடன் இணைத்தல்
    ------------------------------------------
        import { Provider } from 'react-redux'
        import store from './store'

        ReactDOM.render(
        // Provider மூலம் எல்லா components-உக்கும் store கிடைக்கும்
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
        )

----------------------------------------------------------------------------






    
**/
