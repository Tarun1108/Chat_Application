import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

        if (!localStorage.getItem('username')) return <LoginForm / > ;

        return ( <
            ChatEngine height = "100vh"
            projectID = "35fddf21-5f54-4519-81c6-80bc09ceb104"
            userName = { localStorage.getItem('username') }
            userSecret = { localStorage.getItem('password') }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />} / >
            );
        }
        export default App;