import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name : "user",
        initialState: {
            openAiKey: null,
        },
        reducers : {
            addUser : (state,action) => {
                return action.payload;
            },
            removeUser : (state,action) => {
                return null;
            },   
            addOpenAiKey: (state,action) => {
                state.openAiKey = action.payload;
            }

        }
    }
);

export const { addUser, removeUser, addOpenAiKey } = userSlice.actions;

export default userSlice.reducer;