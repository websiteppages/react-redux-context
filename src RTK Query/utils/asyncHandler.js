export const asyncHandler = async (apiCall, thunkAPI, ...args) => {
  try {
    const response = await apiCall(...args);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
};
