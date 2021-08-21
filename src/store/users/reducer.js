import * as types from "./types";

const initialState = {
  fetchedUsers: {
    users: [],
    loading: false,
    error: null,
    total: 0,
  },
  changedRoles: {
    error: null,
    success: null,
  },
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS: {
      const { users, totalUsers } = action.payload;
      return {
        ...state,
        fetchedUsers: {
          users: users,
          loading: false,
          error: null,
          total: totalUsers,
        },
      };
    }
    case types.FETCH_USERS_FAILURE: {
      return {
        ...state,
        fetchedUsers: {
          ...state.fetchedUsers,
          loading: false,
          error: action.payload,
        },
      };
    }
    case types.CHANGE_ROLE_SUCCESS: {
      const { roles, id, msg } = action.payload;
      const changedUsers = state.fetchedUsers.users.map((user) => {
        if (user.id == id) {
          user.roles = roles;
        }
        return user;
      });
      return {
        ...state,
        fetchedUsers: {
          ...state.fetchedUsers,
          users: changedUsers,
          error: null,
        },
        changedRoles: {
          error: null,
          success: msg,
        },
      };
    }
    case types.CHANGE_ROLE_RESET: {
      return {
        ...state,
        changedRoles: {
          error: null,
          success: null,
        },
      };
    }
    case types.CHANGE_ROLE_FAILURE: {
        return {
          ...state,
          changedRoles: {
            error: action.payload,
            success: null,
          },
        };
      }
  }
  return state;
};
export default userReducer;
