/**  
     RTK Query = API handling முழுவதையும் already handle பண்ணும்
    👉 அதனால் createAsyncThunk தேவையில்லை ❌

    RTK Query already gives:
    --------------------------
        ✅ data fetching - loading state (isLoading) - error state (isError) - caching - auto refetch
        const { data, isLoading, isError } = useGetPostsQuery();

        No props needed ❌
        | API data anywhere   | RTK Query directly 🔥 |
        Any component → useGetPostsQuery() ✅

    -------------------------------------------------------------------
    ஆம் — RTK Query use பண்ணினா slice mainly UI logic க்கு தான் use ஆகும்
    
        data fetch - display list - basic CRUD
            👉 இதுக்கு slice தேவையில்லை ❌


        UI logic complex ஆனா:
        -------------------------
            modal open/close - selected item- filters / search - tabs / sidebar state - multi-step forms
            👉 அப்போ slice use பண்ணலாம் ✅

    ----------------------------------------------------------

     query vs mutation
    --------------------
        query → GET
        mutation → POST / PUT / DELETE
    ----------------------------------------------------------

    providesTags - 👉 Cache identify பண்ணும் - cache-க்கு tag assign

    invalidatesTags - 👉 Data change ஆன பிறகு auto refetch 🔥

    🔹 providesTags
    ----------------
        👉 Cache-ஐ identify பண்ணும் (tag assign)
            query run ஆன பிறகு
            அந்த data cache-ல save ஆகும்
            அதுக்கு ஒரு tag attach பண்ணப்படும்

    🔹 invalidatesTags
    -------------------
        👉 Data change ஆன பிறகு cache invalidate + auto refetch
            mutation success ஆனதும்
            அந்த tag match ஆகுற cache remove/mark stale ஆகும்
            related query மீண்டும் fetch ஆகும்

    ----------------------------------------------------------

**/