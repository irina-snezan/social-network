import React from 'react';
import classes from './Sidebar.module.css';
import Friend from './Friends/Friend';
import {FriendsType} from '../../redux/redux-store';

export type SidebarType = {
    title: string
    friends: Array<FriendsType>
}

const Sidebar: React.FC<SidebarType> = (props) => {


    let friendsElements = props.friends.map(f => <Friend name={f.name}/>);


    return (
        <div className={classes.sidebar}>
            <h3>{props.title}</h3>
            <div className={classes.sidebar_content}>
                <div>
                    {friendsElements}
                </div>
            </div>
        </div>
    )
}
export default Sidebar;