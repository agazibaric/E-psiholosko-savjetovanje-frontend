import { NavBar } from 'app/components';
import Chat from 'app/components/Chat/Chat';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ChatPage = () => {
  return (
    <>
      <Helmet>
        <title>Chat</title>
        <meta name="description" content="Send a message to a doctor" />
      </Helmet>
      <NavBar />
      <Chat />;
    </>
  );
};

export default ChatPage;
