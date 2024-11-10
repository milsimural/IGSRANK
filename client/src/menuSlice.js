import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    menuActivePoint: 'moscow',
};
const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuActivePoint: (state, action) => {
            state.menuActivePoint = action.payload;
        },
    },
});
export default menuSlice.reducer;
export const { setMenuActivePoint } = menuSlice.actions;
