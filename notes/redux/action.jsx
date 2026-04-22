/**  
   Action — செய்தி / கோரிக்கை
   --------------------------------
      என்ன செய்ய வேண்டும் என்று சொல்லும் ஒரு JavaScript object

      "INCREMENT" என்ற action என்பது "எண்ணை ஒன்று கூட்டு" என்று கட்டளை இடுவது போல. Action-ல் இரண்டு பகுதிகள்: type (என்ன செய்ய வேண்டும்) மற்றும் payload (என்ன data அனுப்புகிறோம்).

      // எளிய Action object
      ------------------------
            { 
                type: 'counter/increment'  // என்ன செய்ய வேண்டும்
            }

            // Payload உடன் Action (data-வுடன்)
            { 
                type: 'counter/addAmount',
                payload: 5           // 5 கூட்டு என்று சொல்கிறோம்
            }

            // User data அனுப்பும் Action
            { 
                type: 'user/setName',
                payload: { name: 'அரவிந்த்', age: 25 }
            }

    Redux Toolkit-ல் Action Creators தானாகவே உருவாகும்
    ---------------------------------------------------------
        // createSlice மூலம் Actions தானாக உருவாகும்
        const { increment, decrement, addAmount } = counterSlice.actions

        // இவை உங்களுக்கு உதவும் Action Creator functions:
        increment()        → { type: 'counter/increment' }
        decrement()        → { type: 'counter/decrement' }
        addAmount(5)       → { type: 'counter/addAmount', payload: 5 }











    
**/
