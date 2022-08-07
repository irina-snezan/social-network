import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType} from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {Store} from 'redux';
import {PostsType} from '../../redux/profileReducer';


export type ProfileType = {
    posts: Array<PostsType>
    //addPost: (postMessage: string) => void
    //onChangeNewPostMessage: (newPostMessage: string) => void
    dispatch: (action: ActionsType) => void
    newPostMessage: string
    //postMessage: string
    store: Store
}


// function Profile(props: ProfileType) {
function Profile() {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsContainer
                //store={props.store}
                      //posts={props.posts}
                     //newPostMessage={props.newPostMessage}
                     //dispatch={props.dispatch}
                     //addPost={props.addPost}
                     //onChangeNewPostMessage={props.onChangeNewPostMessage}
                     //postMessage={props.postMessage}

            />
        </div>
    )
}

export default Profile;