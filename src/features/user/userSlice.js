import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";
// get the position of the user
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
// use the native createAsyncThunk function and it takes two arguements
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function name(params) {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it on the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  }
);
//Now, let's create a slice of state using Redux Toolkit's createSlice function.
// initial state
const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};
//Next, create the user slice by calling createSlice with an object containing the slice's name, the initial state, and the reducers.
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAddress.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = "Please provide us correct address";
      });
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
