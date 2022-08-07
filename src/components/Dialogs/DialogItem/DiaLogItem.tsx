import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

type DialogsItemType = {
    id: number
    name: string
}

const DialogsItem: React.FC<DialogsItemType> = (props) => {
    let path = 'Dialogs' + props.id;
    return (
        <>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
            </div>
        </>

    )
}
export default DialogsItem;


