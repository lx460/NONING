import {createContext} from 'react';

const UserContext = createContext({
  userData: {},
  setUserData: () => {},
  boardUserData: [],
  setBoardUserData: () => {},
  boardId: 0,
  setBoardId: () => {},
});

export default UserContext;
