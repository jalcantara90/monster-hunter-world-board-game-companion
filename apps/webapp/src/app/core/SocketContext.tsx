import * as io from 'socket.io-client';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { environment } from '../../environments/environment';

type SocketListener = {
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SocketNotifier<T = any> = {
  message: string;
  payload: T;
};

function shouldBeWrappedWithContext<T>(_: T) {
  throw new Error('Should be wrapped with SocketProvider');
}

const SocketContext = createContext({
  on: shouldBeWrappedWithContext<SocketListener>,
  online: false,
  send: shouldBeWrappedWithContext<SocketNotifier>,
  off: shouldBeWrappedWithContext<string>,
});

export function SocketProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [socket, setSocket] = useState<io.Socket | null>(null);
  const [online, setOnline] = useState<boolean>(false);

  const connectSocket = useCallback(() => {
    const socketConnection = io.connect(environment.socketServer, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
    });
    setSocket(socketConnection);
  }, []);

  const listen = useCallback(
    ({ message, callback }: SocketListener) => {
      socket?.on(message, (args) => callback(args));
    },
    [socket]
  );

  const off = useCallback(
    (message: string) => {
      socket?.off(message);
    },
    [socket]
  );

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  const send = useCallback(
    ({ message, payload }: SocketNotifier) => {
      socket?.send({ message, payload, room: '123' });
    },
    [socket]
  );

  useEffect(() => {
    if (socket) {
      return;
    }

    connectSocket();

    return () => {
      disconnectSocket();
    }
  }, []);

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket]);

  return (
    <SocketContext.Provider
      value={{
        on: listen,
        off,
        online,
        send,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export function useListener<T>(message: string, callback: (args: T) => void) {
  const { on, off } = useContext(SocketContext);

  useEffect(() => {
    on({ message, callback });

    return () => {
      off(message);
    };
  }, [callback, message, off, on]);
}

export function useNotificator() {
  const { send } = useContext(SocketContext);

  return {
    send,
  };
}
