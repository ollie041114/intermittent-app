import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { name: "", id: -1 },
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setId(state, action) {
            state.id = action.payload;
        },
    },
});

export const { setName, setId } = userSlice.actions;
const store = configureStore({
    reducer: userSlice.reducer,
});
export default store;
