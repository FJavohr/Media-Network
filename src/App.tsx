import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Routes} from 'react-router'
import './App.css';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";


const App = (props: StateType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route index path="/dialogs" element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} />}/>
                    <Route path="/profile" element={<Profile newPostText={props.state.values.newPostText} posts={props.state.profilePage.posts} addPost={props.state.callbacks.addPost} />}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </div>
        </div>);
}

export default App;