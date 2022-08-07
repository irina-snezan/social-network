/*import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';

export type MessagesType = {
    id: number
    message: string
}
export type FriendsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newDialogMessage: string
}
export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    //addPost: (postMessage: string) => void
    // onChangeNewPostMessage: (newPostMessage: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

//type AddPostActionType = ReturnType<typeof addPostAC>
//type OnChangeNewPostMessageActionType = ReturnType<typeof onChangeNewPostMessageAC>
//export type ActionsType = AddPostActionType | OnChangeNewPostMessageActionType

export type ActionsType = {
    ReturnType<typeof addPostAC>
    | ReturnType<typeof onChangeNewPostMessageAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewDialogMessageAC>
}
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'I am cool!', likesCount: 35},
                {id: 3, message: 'I know it!', likesCount: 4}
            ],
            newPostMessage: 'it-kamasutra',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Meredith'},
                {id: 2, name: 'Owen'},
                {id: 3, name: 'Nick'},
                {id: 4, name: 'Jo'},
                {id: 5, name: 'Miranda'}
            ],
            messages: [
                {id: 1, message: 'Hi Miranda! Where do you want to travel next?'},
                {id: 2, message: 'Well, I don’t know almost anything about Barcelona.'},
                {id: 3, message: 'It sounds great. I’ll definitely go there.'},
                {id: 4, message: 'What are you planning to do?'},
                {id: 5, message: 'I’m thinking of going to Argentina this summer.'}
            ],
            newDialogMessage: 'hello'
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Michael'},
                {id: 2, name: 'Izy'},
                {id: 3, name: 'Ben'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}*/

//window.store = store;

///message: this._state.profilePage.postMessage,
export {}


