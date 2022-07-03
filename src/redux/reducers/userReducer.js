import { localStoreService } from "../../service/localStoreService";
import { SET_USER_INFOR } from "../constants/userConstants";

let initialState = {
  userInfor: localStoreService.getUserLocal(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFOR: {
      state.userInfor = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
