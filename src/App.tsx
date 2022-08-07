import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {ActionsType, RootStateType} from './redux/redux-store';
import {Store} from 'redux';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type  AppPropsType = {
    store: Store
    state: RootStateType
    //posts: PostsType
    //addPost: (postMessage: string) => void
    //onChangeNewPostMessage: (newPostMessage: string) => void
    //newPostMessage: string
    //postMessage: string
    dispatch: (action: ActionsType) => void
}


const App: React.FC = (props) => {
    // const state = store.getState();
    return (
        <div className="app_wrap">
            <Header/>
            <Nav/>
            <main className="main">
                <Routes>
                    <Route path="/Profile/*" element={<Profile //posts={state.profilePage.posts}
                                                               //store={props.store}
                                                               //newPostMessage={state.profilePage.newPostMessage}
                                                               //postMessage={props.postMessage}
                                                              // dispatch={props.dispatch}
                        />}/>
                    <Route path="/Dialogs" element={<DialogsContainer
                                                           // dialogs={state.dialogsPage.dialogs}
                                                             //store={props.store}
                                                             //newDialogMessage={state.dialogsPage.newDialogMessage}
                                                             //messages={state.dialogsPage.messages}
                                                             //title={'My dialogs'}
                    />}/>
                </Routes>
            </main>
        </div>
    );
};


export default App;
