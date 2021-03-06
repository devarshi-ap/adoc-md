import { createSlice } from '@reduxjs/toolkit';

// function convertToPlain(html){
//     // Create a new div element
//     var tempDivElement = document.createElement("div");

//     // Set the HTML content with the given value
//     tempDivElement.innerHTML = html;

//     // Retrieve the text property of the element 
//     return tempDivElement.textContent || tempDivElement.innerText || "";
// }

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: '',
    inType: 'AsciiDoc',
  },
  reducers: {
    updateValue: (state, action) => {
        state.value = action.payload.value;
    },
    updateInputType: (state, action) => {
        state.inType = action.payload.inType;
    },
    reset: (state) => {
        state.value = '';
    },
  },
});

// each case under reducers becomes an action
export const { updateValue, updateInputType, reset } = inputSlice.actions;
export default inputSlice.reducer;
