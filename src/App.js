import React from 'react';
import './App.css';
import Post from './components/Post'
import UserSelect from './components/UserSelect'

function App() {
    return (
        <div className="App">
            <h1>User:</h1>
            <UserSelect/>
            <Post/>
        </div>
    );
}

export default App;
