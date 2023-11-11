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
import {RootStateType} from "./redux/state";


const App = (props: { store: RootStateType }) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route index path="/dialogs" element={<Dialogs dialogs={props.store.messagesPage.dialogs}
                                                                   messages={props.store.messagesPage.messages}/>}/>
                    <Route path="/profile" element={<Profile updateNewPostText={props.store.callbacks.updateNewPostText}
                                                             newPostText={props.store.values.newPostText}
                                                             posts={props.store.profilePage.posts}
                                                             addPost={props.store.callbacks.addPost}/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </div>
        </div>);
}

export default App;