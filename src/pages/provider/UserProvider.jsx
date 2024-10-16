import { createContext, useReducer} from "react";

export const UserContext = createContext();

const initialValues = {
    user: null,
    isAuthenticate: false
}

const reducer = (state, action) =>{
    if(action.type === 'Auth'){
        return{
            ...state,
            isAuthenticate: action.value
        };
    }
    else if(action.type === 'user'){
        return{
            ...state,
            user: action.value
        };
    }
    if(action.type === 'all'){
        return{
            ...action.value
        }
    }
}

const UserProvider = ({children}) =>{

    const [user ,dispatch] = useReducer(reducer, initialValues)

    return(
        <UserContext.Provider value={{...user,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;