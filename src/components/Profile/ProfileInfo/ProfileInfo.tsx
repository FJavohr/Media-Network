import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = (props: any) => {
    return (
    <div>
        <div>
            <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
        </div>
        <div className={s.description} >
            ava + description
        </div>
    </div>
    )
}