import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    userName: string
}

export const DialogItem = (props: DialogItemType) => {
    let path: string = `/dialogs/${props.id}`
    return (
        <div className={s.dialog}>
            <NavLink to={path}> 
                {props.userName}
            </NavLink>
        </div>
    )
}
