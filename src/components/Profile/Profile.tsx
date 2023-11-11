import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    posts: Array<ProfilePropsType>
    addPost: (post: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

type ProfilePropsType = {
    id: string
    message: string
    likesCount: string
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} posts={props.posts} newPostText={props.newPostText}/>
        </div>
    );
};

