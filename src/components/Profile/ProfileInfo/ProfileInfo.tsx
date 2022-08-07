import React from 'react';
import classes from './ProfileInfo.module.css';


type ProfileInfoType = {
    // message: string
}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (
        <div className={classes.profileInfo}>
            <img src="https://avatars.mds.yandex.net/i?id=25c3e9fb498d890c6cc6228eb778f1f5-5469819-images-thumbs&n=13"/>
            <div className={classes.description}> ava + description</div>
        </div>
    )
}
export default ProfileInfo;

