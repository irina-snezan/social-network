import {combineReducers, createStore} from 'redux';
import {addPostAC, onChangeNewPostMessageAC, profileReducer} from './profileReducer';
import {dialogsReducer, sendMessageAC, updateNewDialogMessageAC} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';


type MessagesType = {
    id: number
    message: string
}
export type FriendsType = {
    id: number
    name: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
type DialogsType = {
    id: number
    name: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newDialogMessage: string
}
type ProfilePageType = {
    posts: Array<PostsType>,
    newPostMessage: string
}
export type  RootStateType = {
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


export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof onChangeNewPostMessageAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewDialogMessageAC>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
});
// export type AppStateType = ReturnType<typeof store.getState>
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

// window.store=store;