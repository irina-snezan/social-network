const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newDialogMessage: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type InitialStateType = typeof initialState
let initialState = {
    dialogs: [
        {id: 1, name: 'Meredith'},
        {id: 2, name: 'Owen'},
        {id: 3, name: 'Nick'},
        {id: 4, name: 'Jo'},
        {id: 5, name: 'Miranda'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi Miranda! Where do you want to travel next?'},
        {id: 2, message: 'Well, I don’t know almost anything about Barcelona.'},
        {id: 3, message: 'It sounds great. I’ll definitely go there.'},
        {id: 4, message: 'What are you planning to do?'},
        {id: 5, message: 'I’m thinking of going to Argentina this summer.'}
    ] as Array<MessagesType>,
    newDialogMessage: 'hello'
}

export const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_DIALOG_MESSAGE:
            return {
                ...state,
               newDialogMessage: action.newMessage
            };

        case SEND_MESSAGE:
            let newMessage = state.newDialogMessage;
            return {
                ...state,
                newDialogMessage: '',
                messages: [...state.messages, {id: 6, message: newMessage}]
            };
        default:
            return state;
    }
}


export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewDialogMessageAC = (newDialogMessage: string) => {
    return {
        type: UPDATE_NEW_DIALOG_MESSAGE,
        newDialogMessage: newDialogMessage
    } as const
}