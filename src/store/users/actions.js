import * as types from "./types";
export const fetchUsers = (username, page, limit) => ({
  type: types.FETCH_USERS_ASYNC,
  payload: {
    username,
    page,
    limit,
  },
});
export const resetFetchUsers = () => ({
  type: types.FETCH_USERS_RESET,
});

export const changeRole = (roles, id) => ({
  type: types.CHANGE_ROLE_ASYNC,
  payload: {
    roles,
    id,
  },
});

export const resetChangeRole = () => ({
  type: types.CHANGE_ROLE_RESET,
});
