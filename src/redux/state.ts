import {render} from "../render";

export type MessageType = {
    message: string
    id: string
}

export type DialogsType = {
    name: string
    id: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
    callbacks: CallbacksType
    values: valuesType
}

type CallbacksType = {
    addPost: (post: string) => void
}
type valuesType = {
    newPostText: string
}
export type StateType = {
    state: RootStateType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hurma Vashee', likesCount: '12'},
            {id: '2', message: 'Nehurma', likesCount: '11'},
            {id: '3', message: 'Hurma 12', likesCount: '16'},
            {id: '4', message: 'Hurma V21314shee', likesCount: '5'},
            {id: '5', message: 'Hurma Vashe21345215e', likesCount: '123mln+'},
            {id: '6', message: 'Neain', likesCount: '1312'},
        ]
    },
    messagesPage: {
        messages: [
            {message: "Hi", id: '1'},
            {message: "How are you doing ?", id: '2'},
            {message: "IDK", id: '3'},
            {message: "What about you ?", id: '4'},
        ],
        dialogs: [
            {name: "IAM", id: '1'},
            {name: "Sister", id: '2'},
            {name: "Bro", id: '3'},
            {name: "NeBro", id: '4'},
        ],
    },
    sidebar: {},
    callbacks: {
        addPost: (post: string) => {
            debugger;
            let newPost = {
                id: "5",
                message: post,
                likesCount: "0"
            }
            state.profilePage.posts.push(newPost)
            render(state)
        }
    },
    values: {
        newPostText: 'Hurma'
    }
}