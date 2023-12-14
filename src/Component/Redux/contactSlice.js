import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const contactState = {
  updateState: false,
  loading: false,
  contactList: [],
  error: "",
  response: "",
};

export const fetchcontact = createAsyncThunk(
  "contact/fetchcontact",
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/allcontact`);
    return response.data.response;
  }
);

export const addcontact = createAsyncThunk(
  "contact/addcontact",
  async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/add`, {
      name: data.name,
      position: data.position,
    });
    return response.data.response;
  }
);

export const removecontact = createAsyncThunk(
  "contact/removecontact",
  async (data) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/delete/${data}`
    );
    return response.data.response;
  }
);

export const modifiedcontact = createAsyncThunk(
  "contact/modifiedcontact",
  async (data) => {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/${data._id}`,
      {
        name: data.name,
        email: data.email,
        phonenumber: data.phonenumber,
        address: data.address,
      }
    );
    return response.data.response;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: contactState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addcontact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addcontact.fulfilled, (state, action) => {
        state.loading = false;
        state.contactList.push(action.payload);
        state.response = "add";
      })
      .addCase(addcontact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchcontact.fulfilled, (state, action) => {
        state.contactList = action.payload;
      })
      .addCase(fetchcontact.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder.addCase(removecontact.fulfilled, (state, action) => {
      state.contactList = state.contactList.filter(
        (item) => item._id != action.payload
      );
      state.response = "delete";
    });

    builder.addCase(modifiedcontact.fulfilled, (state, action) => {
      const updateItem = action.payload;
      console.log(updateItem);
      const index = state.contactList.findIndex(
        (item) => item._id === updateItem._id
      );
      if (index !== -1) {
        state.contactList[index] = updateItem;
      }
      state.response = "update";
    });
  },
});

export default contactSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  contactSlice.actions;