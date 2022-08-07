import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from '../../../redux/profileReducer';

export type MyPostsType = {
    //message: string
    posts: Array<PostsType>
    addPost: () => void
    newPostMessage: string
    //postMessage: string
    onChange: (newPostMessage: string) => void
    //dispatch: (action: ActionsType) => void
   // store: StoreType
}

function MyPosts(props: MyPostsType) {
    let postsElement =
        props.posts.map((post, index) => <Post message={post.message} likeCount={post.likesCount} key={index}/>);

    let addPostHandler = () => {
        props.addPost();
    };
    // let addPostHandler = (message:string) => {
    //     props.addPost(message);
    // };
    let onChangeNewPostMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostElement = e.currentTarget.value
        props.onChange(newPostElement);
    }
    return (
        <div className={classes.myPosts}>
            <div>
                <h1> My post</h1>
                <div className={classes.add_post}>
                    {<textarea  onChange={onChangeNewPostMessageHandler}
                                value={props.newPostMessage}>
                    </textarea>}
                    <button onClick={addPostHandler}>Add new post</button>
                </div>
            </div>
            {postsElement}
        </div>

    )
}

export default MyPosts;