import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem"

type CommonType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagesPropsType>
}

type MessagesPropsType = {
    message: string
    id: string
}

type DialogsPropsType = {
    name: string
    id: string
}

export const Dialogs = (props: CommonType) => {


    let dialogsElements = props.dialogs.map(dialog => (
        <DialogItem id={dialog.id} userName={dialog.name}/>
    ))


    let messagesElements = props.messages.map(message => (
        <Message message={message.message}/>
    ))
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.massages}>
                    {messagesElements}
                </div>
            </div>
                <div className={s.input}>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Message</button>
                    </div>
                </div>
        </div>
    );
};