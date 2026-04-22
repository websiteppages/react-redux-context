/**   
    configureStore 
    ---------------
        → Redux store create செய்ய உதவும் function (Redux Toolkit லிருந்து)
    -------------------------------------------------------------------------
    Dispatch → Action → Reducer → State → UI"

        Dispatch → action அனுப்பு

        Reducer → புதிய state உருவாக்கும் (old state-ஐ மாற்றாமல், new state return பண்ணும்
            Example  → state = ["Arun", "Kumar"] → { type: "ADD_USER", payload: "Jhon" }
                     → ["Arun", "Kumar", "Jhon"] - old state ❌ change ஆகலை - new array ✅ create பண்ணியது

        Store → அந்த new state-ஐ replace பண்ணும் (automatically update ஆகும்)

        UI → update ஆகும் (re-render)

    -------------------------------------------------------------------------

    useDispatch  → action அனுப்ப
    ------------
      React Redux Hook
      Redux store-க்கு action அனுப்ப (dispatch செய்ய) உதவும்

    const dispatch = useDispatch();
    -------------------------------
        store-ல இருக்கும் dispatch function-ஐ எடுத்துக்கொள்கிறோம்
        const dispatch - இதுதான் standard ✔️- 👉 team code-லும் easy to understand

        ஆம் — எந்த பெயரிலும் assign பண்ணலாம்
        --------------------------------------------
        const myDispatch = .....
        const sendAction = .....
   
    -----------------------------------------------------------------
    
    useSelector
    -----------
        store-ல இருக்கும் data-ஐ read பண்ண use பண்ணும் Hook
    -----------------------------------------------------------------



 **/
