import React from 'react';
import './App.css';

import PlayerPage from "./page/player";
import Author from "./Author";

function App() {
    return (
        <div className="App">
            <PlayerPage/>

            <div className="center">
                <Author xiaohongshu={"6512f3a6000000002401676b"}/>
            </div>
        </div>
    );
}

export default App;
