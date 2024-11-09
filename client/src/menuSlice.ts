import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type MenuState = {
    menuActivePoint: string;
};

const initialState: MenuState = {
    menuActivePoint: 'moscow',
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuActivePoint: (state, action: PayloadAction<string>) => {
            state.menuActivePoint = action.payload;
        },
    },
});

export default menuSlice.reducer;
export const { setMenuActivePoint } = menuSlice.actions;