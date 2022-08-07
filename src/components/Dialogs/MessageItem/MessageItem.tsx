import React from 'react';
import classes from './MessageItem.module.css';


export type MessageItemType = {
    id: number
    message: string
}

const MessageItem: React.FC<MessageItemType> = (props) => {
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>

    )
}
export default MessageItem;

