import { createContext, useContext, useReducer } from 'react';
import { userReducer } from '../reducers';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

export const UserProvider = ({ children, initialValue}) => {
  const [state, dispatch] = useReducer(userReducer, initialValue);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
}

export const useUser = () => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);