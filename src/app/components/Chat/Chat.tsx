import {
  ChatController,
  Message,
  MessageContent,
  MuiChat,
} from 'chat-ui-react';
import React, { useEffect, useState } from 'react';
import { api, LocalStorage } from 'services';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { Button, TextField } from '..';

let stompClient;

const isMyMessage = (message: any): boolean => {
  return true;
};

const Chat = () => {
  // const [messages, setMessages] = useState<any>([]);
  const [chatCtl] = useState(new ChatController());

  const convertToChatMessages = (
    messages: any,
  ): Array<Message<MessageContent>> => {
    return messages.map(message => {
      return {
        content: message.content,
        type: 'text',
        self: isMyMessage(message),
      };
    });
  };

  const handleResponse = response => {
    console.log(response);
    //setMessages(prevMessages => [...prevMessages, response.value]);
  };

  const listenForMessages = async () => {
    await chatCtl.setActionRequest(
      { type: 'text', always: true },
      handleResponse,
    );
  };

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect(
      { 'X-Authorization': 'Bearer ' + LocalStorage.getUserToken() },
      function (frame) {
        console.log('Connected: ' + frame);

        stompClient.subscribe('/user/queue/chat', (msg: any) => {
          console.log('Received message');
          console.log(msg);
        });
      },
    );

    api
      .get('/meeting/1/messages')
      .then(res => {
        // res.data.forEach(message => {
        //   chatCtl.addMessage({
        //     type: 'text',
        //     self: true,
        //     content: message.content,
        //   });
        // });
        chatCtl.setMessages(convertToChatMessages(res.data));
      })
      .catch(err => {
        console.log(err);
      });

    listenForMessages();
    // eslint-disable-next-line
  }, []);

  const [to, setTo] = useState('');
  const [content, setContent] = useState('');

  const handleSendMessage = e => {
    e.preventDefault();
    stompClient.send(
      '/chat/message',
      {},
      JSON.stringify({
        to: to,
        content: content,
        meetingId: 1,
      }),
    );
    chatCtl.addMessage({ type: 'text', self: true, content: content });
  };

  return (
    <>
      <form noValidate onSubmit={handleSendMessage}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="to"
          label="to"
          name="to"
          value={to}
          onChange={e => setTo(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="content"
          label="content"
          type="content"
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Send
        </Button>
      </form>
      <div style={{ height: '90vh', margin: 0, padding: 0 }}>
        <MuiChat chatController={chatCtl} />
      </div>
    </>
  );
};

export default Chat;
