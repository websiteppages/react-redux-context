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
        data change ஆனா → UI auto re-render ஆகும்
        store data change ஆனா → React automatically UI update பண்ணும்
    -----------------------------------------------------------------
    createAsyncThunk
    ----------------
        createAsyncThunk = API call செய்யும் Redux async function

        🟡 pending (loading) | 🟢 fulfilled (success) | 🔴 rejected (error) states automatically handle பண்ண உதவும்

        👉 இதை easy-ஆ manage பண்ண தான் createAsyncThunk

    -----------------------------------------------------------------
    reducers vs extraReducers
    ---------------------------
        reducers = உள் (local state update) actions handle பண்ணும்
                நாம உருவாக்கும் actions (local)
                    addUser,
                    removeUser
        
        extraReducers என்பது createAsyncThunk போன்ற external async actions-க்கு use பண்ணப்படுகிறது
        வெளியில் இருந்து வரும் async actions
            fetchUsers.pending
            fetchUsers.fulfilled
            fetchUsers.rejected
    -----------------------------------------------------------------
    createSlice
    ------------
        Redux Toolkit-ல் state + reducers + actions எல்லாம் ஒரே place-ல define பண்ண use பண்ணும் function
    -----------------------------------------------------------------
    (_, thunkAPI)
    -------------
        _ = data வேண்டாம்

        (_, thunkAPI) என்பது createAsyncThunk-ல் payload தேவையில்லை என்பதை காட்ட _ பயன்படுத்தி,
        
        Example (payload use பண்ணினா)
            async (id, thunkAPI) => // id பயன்படுத்தலாம்

        Example (payload வேண்டாம்)
            async (_, thunkAPI) => // no payload needed

        thunkAPI
        ---------
        👉 இது Redux Toolkit கொடுக்கும் helper object
            thunkAPI.dispatch() - extra action call பண்ண 
            thunkAPI.getState() - store data read பண்ண
            thunkAPI.rejectWithValue() - custom error return பண்ண
    -----------------------------------------------------------------
    Payload
    -------
        Payload என்பது action உடன் அனுப்பப்படும் actual data (value)
        
        dispatch(addUser({ name: "Pravin", age: 25 }));

            addUser → action
            { name: "Pravin", age: 25 } → payload

    -----------------------------------------------------------------



 **/
