import { useReducer,useState } from "react";
import { createContext } from "react";
import dataReducers from "../Reducer/Reducer";

export const AppContext=createContext()

export const initialData={
    isLoading:false,
    isError:false,
    politics:[],
    crypto:[],
    others:[],
    business:[],
    tech:[],
    entertainment:[],
    sports:[],
    health:[],
    science:[],
    crypto_detail:[],
    business_detail:[],
    tech_detail:[],
    entertainment_detail:[],
    sports_detail:[],
    health_detail:[],
    science_detail:[]
}


function AppContextProvider({children}){
const [state,dispatch]=useReducer(dataReducers,initialData)

const [isAuth, setisAuth] = useState({ auth: false, name: null })
  const handleLogin = (name) => {
    setisAuth({ auth: true, name: name })
  }

  const handleLogout = () => {
    setisAuth({ auth: false, name: null })
  }

return(
    <AppContext.Provider value={{state,isAuth,handleLogin,setisAuth,dispatch}}>
        {children}
    </AppContext.Provider>
)
}

export default AppContextProvider