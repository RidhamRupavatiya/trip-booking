import { createContext, useEffect, useReducer } from "react";

const storedUser = localStorage.getItem('user');
const initial_state = {
    user: storedUser ? JSON.parse(storedUser) : null,
    loading: false,
    error: null
};

export const AuthContext = createContext(initial_state)

const AuthReducer = (state,action) => {
    switch(action.type){
        case 'LOAGIN_START' :
            return {
                user: null,
                loading: true,
                error: null
            };
        case 'LOGIN_SUCCESS' :
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case 'LOGIN_FAILURE' :
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case 'REGISTER_SUCCESS' :
            return {
                user: null,
                loading: false,
                error: null,
            }
        case 'LOGOUT' :
            return {
                user: null,
                loading: false,
                error: null
            }
        default :
        return state;
    }
};

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer,initial_state)

    useEffect(()=>{
         // Store user in local storage
         localStorage.setItem('user', JSON.stringify(state.user));
    },[state.user]);

    return <AuthContext.Provider value={{
        user: state.user,
        loading:state.loading,
        error:state.error,
        dispatch,
    }}>
    {children}
    </AuthContext.Provider>
}


// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   loading: null,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.user = null;
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action) => {
//       state.user = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     loginFailure: (state, action) => {
//       state.user = null;
//       state.loading = false;
//       state.error = action.payload;
//     },
//     registerSuccess: (state) => {
//       state.user = null;
//       state.loading = false;
//       state.error = null;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.loading = false;
//       state.error = null;
//     },
//   },
// });

// export const {
//   loginStart,
//   loginSuccess,
//   loginFailure,
//   registerSuccess,
//   logout,
// } = authSlice.actions;

// export const authReducer = authSlice.reducer;

// export const AuthContext = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default AuthContext;