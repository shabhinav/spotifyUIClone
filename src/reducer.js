export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAOZofe0LxKxPj8FvSBSjmTZGc1d6lV2wgBr4uAUY5W0i4KDSFqu41mtEHhrvQmrPIONvHXcyM8Ucvi_lnE0tlryJ7W9gmuChY5gSUTVMuPzSyUXUzxK85yXtzCCIEueuJsmAR8mWT29S6cQ9eWoJtX4V9iZIfkm6-4j0-J58Y2GpuI",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
