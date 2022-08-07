import React from 'react';
import {AppStateType} from '../../../redux/redux-store';
import {addPostAC, onChangeNewPostMessageAC, PostsType} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

export type MyPostsTypeContainer = {
    //message: string
    //posts: Array<PostsType>
    //addPost: (postMessage: string) => void
    //newPostMessage: string
    //postMessage: string
    // onChangeNewPostMessage: (newPostMessage: string) => void
    //dispatch: (action: ActionsType) => void
    //store: Store<AppStateType>
}
type mapStateToPropsType = {
    posts: PostsType[]
    newPostMessage: string
}
type mapDispatchToPropsType = {
    addPost: () => void
    onNewPostChange: (newPostMessage: string) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            // dispatch(addPostAC(state.profilePage.newPostMessage));
            dispatch(addPostAC(state.newPostMessage));
        },

        onNewPostChange: (newPostMessage: string) => {
            let action = onChangeNewPostMessageAC(newPostMessage)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
