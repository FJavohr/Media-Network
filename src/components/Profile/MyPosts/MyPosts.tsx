import React, { useRef } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

type PostsType = {
    id: string;
    message: string;
    likesCount: string;
};

type MyPostsType = {
    posts: Array<PostsType>;
    addPost: (post: string) => void;
    newPostText: string
};

export const MyPosts = (props: MyPostsType) => {
    const myRef = useRef<HTMLTextAreaElement>(null);

    let addPost = () => {
        if (myRef.current) {
            let text = myRef.current.value;
            props.addPost(text);
            myRef.current.value = ""
        }
    };

    let onPostChange = () => {
        if (myRef.current) {
        let text = myRef.current.value;
            console.log(text)
        }
    }

    let postsElements = props.posts.map((p) => (
        <Post id={p.id} like={p.likesCount} message={p.message} />
    ));

    return (
        <div className={s.postsBlock}>
            <h2>MyPosts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={myRef}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};
