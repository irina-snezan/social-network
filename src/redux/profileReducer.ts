const ADD_POST = 'ADD-POST';
const ON_CHANGE_NEW_POST_MESSAGE = 'ON-CHANGE-NEW-POST-MESSAGE';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostMessage: string
}
export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'I am cool!', likesCount: 35},
        {id: 3, message: 'I know it!', likesCount: 4}
    ] as Array<PostsType>,
    newPostMessage: 'it-kamasutra'
}
export const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: 5,
                message: action.postMessage,
                likesCount: 18
            };
            return {
                ...state,
                newPostMessage: '',
                posts: [...state.posts, newPost],
            };
        }
        case ON_CHANGE_NEW_POST_MESSAGE: {
            return {
                ...state,
                newPostMessage: action.newPostMessage
            }
        }
        default:
            return state;
    }
}
export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}
export const onChangeNewPostMessageAC = (newPostMessage: string) => {
    return {
        type: ON_CHANGE_NEW_POST_MESSAGE,
        newPostMessage: newPostMessage
    } as const
}
