import React from 'react';
import s from './Navbar.module.css';
import {Link, NavLink} from "react-router-dom";
import {log} from "util";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink style={({isActive}) => {
                return {
                    fontWeight: isActive  ? "bold" : "",
                    color: isActive ? "red" : "black",
                    viewTransitionName: isActive ? "slide" : "",
                };
            }} to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink style={({isActive}) => {
                return {
                    fontWeight: isActive  ? "bold" : "",
                    color: isActive ? "red" : "black",
                    viewTransitionName: isActive ? "slide" : "",
                };
            }} to="/dialogs">Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink style={({isActive}) => {
                return {
                    fontWeight: isActive  ? "bold" : "",
                    color: isActive ? "red" : "black",
                    viewTransitionName: isActive ? "slide" : "",
                };
            }} to="/news">News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink style={({isActive}) => {
                return {
                    fontWeight: isActive  ? "bold" : "",
                    color: isActive ? "red" : "black",
                    viewTransitionName: isActive ? "slide" : "",
                };
            }} to="/music">Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink style={({isActive}) => {
                return {
                    fontWeight: isActive  ? "bold" : "",
                    color: isActive ? "red" : "black",
                    viewTransitionName: isActive ? "slide" : "",
                };
            }} to="/settings">Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;