/**   
    let vs const vs var
    -------------------
        1. var  →  👉 பழைய JavaScript keyword - பழையது (avoid)
                   👉 block scope ❌
                   👉 redeclare + reassign இரண்டும் possible

            scope problem
            bugs அதிகம்

        2. let  →  👉 modern JS (ES6) - value change ஆகும் variable
                   👉 block scope ✔️
                   👉 reassign possible ✔️
                   👉 redeclare not allowed ❌

        3. const →  👉 modern JS (ES6) - change ஆகாத variable
                    👉 block scope ✔️
                    👉 reassign ❌
                    👉 redeclare ❌

            Important (const special)
            ------------------------
                👉 object / array உள்ள values change செய்யலாம் ✔️
                -------------------------------------------------------
                    const user = { name: "Arun" };
                    user.name = "Kumar"; // ✅ allowed

    -------------------------------------------------------------------------
    Block scope 
    -----------
        = { } உள்ளே மட்டும் வேலை செய்யும் variable
        Block scope என்பது { } உள்ளே declare பண்ணப்பட்ட variable, அந்த block-க்குள் மட்டும் access செய்ய முடியும் (let, const).
    -------------------------------------------------------------------------
    Reassign என்றால் என்ன?
    --------------------------
        ஒரு variable-க்கு புதிய value assign பண்ணுவது
            let a = 10;
            a = 20; // ✅ reassign
            a-வின் value change ஆகுது ✔️

    Redeclare என்றால் என்ன?
    --------------------------
        அதே variable name-ஐ மீண்டும் declare பண்ணுவது
            let a = 10;
            let a = 20; // ❌ error (redeclare)

    Example
    --------
        let a = 10;
        a = 20;     // ✅ reassign allowed
        let a = 30; // ❌ redeclare not allowed

    -------------------------------------------------------------------------
    Arrow Function Component - const App = () => {
    ------------------------
        modern React style (recommended 👍)
        Modern (ES6) - this binding issue இல்லை

    Function Declaration Component - function App() {
    ------------------------------
        old style but still works

        const App = () => மற்றும் function App() இரண்டும் React component எழுதும் valid ways. ஆனால் modern React-ல் arrow function (const App) அதிகமாக use பண்ணப்படுகிறது.
    -------------------------------------------------------------------------
    async and await and Promise
    ---------------------------
        API calls, database calls போன்ற time எடுக்கும் operations-ஐ application freeze ஆகாமல் handle பண்ண async/await use பண்ணப்படுகிறது

            async = ஒரு function-ஐ Promise return பண்ணும் 
                API calls, database calls போன்ற time எடுக்கும் வேலைகளை handle பண்ண

                Problem - 👉 இவை எல்லாம் synchronousஆ run ஆனா:
                    ❌ app freeze ஆகும்
                    ❌ UI block ஆகும்

            await = அந்த work முடியும் வரை காத்திருக்கும்

                👉 Swiggy order:
                    order place → async
                    food arrive ஆகும் வரை wait → await
                    food வந்ததும் → continue

        Promise = future-ல result வரும் என்று promise பண்ணும் object
                  JavaScript-ல் asynchronous operation முடிந்ததும் success, pending or error result தரும் object
    -------------------------------------------------------------------------
    Synchronous vs Asynchronous
    ---------------------------
        Synchronous (Sync)
        -------------------
            ஒன்று முடிந்த பிறகு தான் அடுத்தது நடக்கும் (line-by-line execution)
                console.log("1");
                console.log("2");
                console.log("3");
                output - 1, 2, 3
                ஒன்று முடியும் வரை அடுத்தது wait பண்ணும்

        Asynchronous (Async)
        ---------------------
            ஒன்று நடக்கும்போது மற்றவை நிற்காமல் continue ஆகும்    
                console.log("1");

                setTimeout(() => {
                    console.log("2");
                }, 2000);

                console.log("3");

                output - 1, 3, 2
                
            Synchronous = one task complete ஆன பிறகு next task run ஆகும்
            Asynchronous = time எடுக்கும் task நடக்கும்போது மற்ற tasks continue ஆகும்
    -------------------------------------------------------------------------


 **/
