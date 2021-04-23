import React from 'react';
import logo from './logo.svg';
import './App.css';
import {OpenCalendar} from './components/OpenCalendar';

function App() {
    return (
        <div className="App" style={{padding: 100}}>
            <OpenCalendar/>
        </div>
    );
}

export default App;
