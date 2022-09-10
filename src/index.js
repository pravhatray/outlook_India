import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import AppContextProvider from './Contexts/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      <ChakraProvider>
      <ColorModeScript initialColorMode='light'>   </ColorModeScript>
  
         <BrowserRouter>
        <AppContextProvider>
          
            <App />
        
        </AppContextProvider>
     </BrowserRouter>
  
      </ChakraProvider>
    
  </React.StrictMode>
);


