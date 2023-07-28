import * as io from 'socket.io-client';
import { useCallback, useEffect, useState } from 'react';

import { environment } from '../../environments/environment';

export function useSocket() {
  const [socket, setSocket] = useState<io.Socket | null>(null);
  const [online, setOnline] = useState<boolean>(false);

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem('token');

    const socketConnection = io.connect(environment.socketServer, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-token': token,
      },
    });

    setSocket(socketConnection);
  }, []);

  const desconectarSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    connectSocket();
  }, [connectSocket])

  useEffect(() => {
    if (!socket) {
      return;
    }
    setOnline((socket as io.Socket).connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
    conectarSocket: connectSocket,
    desconectarSocket,
  };
}
