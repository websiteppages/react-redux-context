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
      useDispatch() என்பது ஒரு hook
      Redux store-க்கு action அனுப்ப (dispatch செய்ய) உதவும்
      dispatch என்ற variable-ல் அந்த function சேமிக்கப்படுகிறது

        Redux store = ஒரு database
        useDispatch() → “store-க்கு message அனுப்ப tool”
        dispatch() → அந்த message-ஐ அனுப்பும் action

        example: onClick={() => dispatch(closePostModal())}
        ------------------------------------------------------
            1. Button click ஆகும் போது - 👉 onClick trigger ஆகும்

            2. dispatch(closePostModal()) run ஆகும் - 👉 இது ஒரு action-ஐ Redux store-க்கு அனுப்புது

            3. அந்த action slice-க்கு போகும் - 👉 குறிப்பாக postSlice (அல்லது எந்த slice-ல் அந்த reducer இருக்குனோ)

            4. reducer execute ஆகும் - 👉 closePostModal reducer state-ஐ update பண்ணும்

            Flow diagram மாதிரி: 
            --------------------
            👉 Click : → dispatch(action) → Store → Slice reducer → State update → UI re-render (React)

    const dispatch = useDispatch();
    -------------------------------
        const dispatch - இதுதான் standard ✔️- 👉 team code-லும் easy to understand
        --------------------------------------------
        const myDispatch = ..... | const sendAction = .....
   
    -----------------------------------------------------------------
    
    useSelector
    -----------
        store-ல இருக்கும் data-ஐ read பண்ண use பண்ணும் Hook - store-ல இருந்து value எடுக்கும்
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
        reducers = “நம்ம வீட்டுக்காரன் வேலை”
        extraReducers = “வெளியிலிருந்து வந்த வேலை handle பண்ணுறது” 😄

        reducers = உள் (local state update) actions handle பண்ணும்
                    simple state changes
                    UI actions (open/close modal, toggle etc.)              
        
        extraReducers என்பது createAsyncThunk போன்ற external async actions-க்கு use பண்ணப்படுகிறது
        வெளியில் இருந்து வரும் async actions

        👉 வெளியில் இருந்து வரும் actions-ஐ handle பண்ணும்
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
    Hooks
    ------
        Hook = React function component-க்கு extra capability தரும் special function

        Hooks வந்ததுக்கு முன்னாடி (Class Component):
        ------------------------------------------------
            class Counter extends Component { }
                👉 இதில்:
                    this.state → state
                    this.setState() → update
                    componentDidMount() → lifecycle
                    ⚠️ கொஞ்சம் complicated, syntax அதிகம்
                👉 இதை எல்லாம் class component-ல தான் பண்ண முடியும்

        Hooks வந்த பிறகு (Function Component):
        -----------------------------------------
            function Counter() { }
                👉 இதில்:
                    useState → state
                    useEffect → lifecycle
                    this எதுவும் இல்ல 😄
                👉 simple function-லேயே எல்லாம் செய்ய முடியும்
    -----------------------------------------------------------------
    Export:
    -------
        👉 இந்த actions-ஐ மற்ற files-ல use பண்ணணும் அதனால தான் export

            export default postSlice.reducer;
                Store-ல் எப்படி use ஆகுது?
                    reducer: {
                        posts: postReducer,
                    }
                    👉 இப்ப:
                    posts state-ஐ handle பண்ணுறது → postSlice.reducer

            export = “இந்த function-ஐ வெளியுலகத்துக்கு share பண்ணுறது”
            import = “அதை எடுத்துக்கிட்டு use பண்ணுறது”

            | Type             | எப்படி import பண்ணுவீங்க          |
            | ---------------- | --------------------------------- |
            | `export default` | `import anythingName from "file"` |
            | `export const`   | `{ name }` use பண்ணி import       |

            import postReducer from "./postSlice"; // default
            import { closePostModal } from "./postSlice"; // named

    -----------------------------------------------------------------



 **/
