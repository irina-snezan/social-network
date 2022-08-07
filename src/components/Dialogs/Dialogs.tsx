import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogItem/DiaLogItem';
import MessageItem from './MessageItem/MessageItem';
import {DialogsPageType} from '../../redux/dialogsReducer';



export type DialogsPropsType = {
    title: string
    // dialogs: Array<DialogsType>
    // messages: Array<MessagesType>
    // newDialogMessage: string
   // store: Store
    updateNewDialogMessage: (newMessage:string) => void
    //newMessage:string
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
    // let state = props.dialogsPage;


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} id={m.id} key={m.id}/>);
    let newDialogMessage = props.dialogsPage.newDialogMessage;


    let newAddMessageElement = React.createRef<HTMLTextAreaElement>();

    let onChangeNewPostMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.target.value;
        //state.dispatch(updateNewDialogMessageAC(newMessage))
        props.updateNewDialogMessage(newMessage)
    }
    let sendMessageHandler = () => {
        props.sendMessage()
    }
    return (
        <div className={classes.dialogs}>
            <h2>{props.title}</h2>
            <div className={classes.dialogs_content}>
                <div>
                    {dialogsElements}
                </div>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea value={newDialogMessage}
                              placeholder="Enter your message"
                              ref={newAddMessageElement}
                              onChange={onChangeNewPostMessage}
                    ></textarea>
                    <button onClick={sendMessageHandler}>Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;