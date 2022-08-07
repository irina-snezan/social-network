import React from 'react';
import classes from './Post.module.css';

type PostsPropsType = {
    message: string
    likeCount: number
}

function Post(props: PostsPropsType) {
    return (
        <div className={classes.item}>
            <img
                src="https://z2u.s3-accelerate.amazonaws.com/avatar_img/20200811/043f1ebc86cceaf73c29c6ba85dfe950.jpeg"/>
            <div>{props.message} </div>
            <span>like {props.likeCount}</span>
        </div>
    )
}

export default Post;