import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {
    DialogsPageType,
    DialogsType,
    MessagesType,
    sendMessageAC,
    updateNewDialogMessageAC
} from '../../redux/dialogsReducer';
import {Dispatch, Store} from 'redux';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


export type DialogsContainerPropsType = {
    title: string
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newDialogMessage: string
    store: Store<AppStateType>

}

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    title: string
}

type mapDispatchToPropsType = {
    updateNewDialogMessage: (newMessage: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        title: 'My dialogs'
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        updateNewDialogMessage: (newMessage: string) => {
            dispatch(updateNewDialogMessageAC(newMessage));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;