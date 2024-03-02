import React from 'react';
import './App.css';

import PlayerPage from "./page/player";
import XiaohongshuAuthor from "./XiaohongshuAuthor";
import MailAuthor from "./MailAuthor";

function App() {
    return (
        <div className="App">
            <PlayerPage/>

            <div className="center author-info" style={{marginBottom: ".5rem"}}>
                <XiaohongshuAuthor hash={"6512f3a6000000002401676b"}/>
                <MailAuthor mail={"dovexiaoxiami@163.com"}/>
            </div>
        </div>
    );
}

export default App;
