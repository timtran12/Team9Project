import './Fonts.css';
import './App.css';
import React, { useState, useEffect } from "react";
import storage from 'local-storage-fallback'
import "bootstrap/dist/css/bootstrap.css";
import AppNav from './components/Nav';
import About from './components/About';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';


// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// npm install styled-components
// npm install local-storage

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
}
`;

function getInitialTheme(){
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
    useEffect(()=>{
      storage.setItem('theme', JSON.stringify(theme));
    },
    [theme]
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <button className="btn btn-lg btn-dark toggleButton"
        onClick={e => setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' })}>
          <i className="fa fa-sun-o"> Theme </i>
        </button>
      
      </div>
    </ThemeProvider>
  );
}



export default App;