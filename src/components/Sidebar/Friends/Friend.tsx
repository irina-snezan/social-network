import React from 'react';
import classes from '../../Profile/MyPosts/Post/Post.module.css';

type FriendType = {
     name: string
}

const Friend: React.FC<FriendType> = (props) => {

    return (
        <div className={classes.friend}>
            <img
                src="https://avatars.mds.yandex.net/i?id=3b44bc16699febcd52bbe46551e20df4-5660573-images-thumbs&n=13"/>
            <div>{props.name} </div>
        </div>
    )
}

export default Friend;