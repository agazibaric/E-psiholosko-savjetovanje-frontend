import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export const useWebsocket = () => {
  const [stompClient, setStompClient] = useState<any>(null);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/secured/room');
    setStompClient(Stomp.over(socket));
    return () => {
      stompClient && stompClient.disconnect();
    };
  }, [stompClient]);

  const connect = () => {
    if (stompClient) {
      let sessionId = '';
      stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        let url = stompClient.ws._transport.url;
        url = url.replace(
          'ws://localhost:8080/spring-security-mvc-socket/secured/room/',
          '',
        );
        url = url.replace('/websocket', '');
        url = url.replace(/^[0-9]+\//, '');
        console.log('Your current session is: ' + url);
        sessionId = url;

        stompClient.subscribe(
          'secured/user/queue/specific-user' + '-user' + sessionId,
          function (msgOut) {
            console.log('Received message');
            console.log(msgOut);
          },
        );
      });
    }
  };

  const disconnect = () => {
    stompClient && stompClient.disconnect();
    console.log('Disconnected');
  };

  const send = (message: any) => {
    stompClient.send(
      'http://localhost:8080/spring-security-mvc-socket/secured/room',
      {},
      JSON.stringify({
        from: message.from,
        to: message.to,
        text: message.text,
      }),
    );
  };

  const isConnected = !!stompClient;

  return { connect, disconnect, send, isConnected };
};
