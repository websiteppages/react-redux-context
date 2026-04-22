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


 **/
