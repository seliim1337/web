import { Dispatch, SetStateAction } from 'react';
import { LanyardIncomingPayload, LanyardOpcode, LanyardUser } from '../types/lanyard';

type SetMyUser = Dispatch<SetStateAction<LanyardUser | undefined>>;

export class Lanyard {
  ws: WebSocket;
  heartbeat: NodeJS.Timer;
  user_id: string;

  constructor(userId: string) {
    this.user_id = userId;
  }

  connect(setUser: SetMyUser) {
    this.ws = new WebSocket(import.meta.env.VITE_GATEWAY_URL);

    this.ws.onopen = () => {
      console.info('[Lanyard] Successfully connected\nTaking a peek huh? Check out the source code:\nhttps://github.com/selim1337/niskii.dev');
    };
    this.ws.onmessage = ({ data }) => {
      if (this.ws.readyState !== this.ws.OPEN) return;
      const { d, op } = JSON.parse(data) as LanyardIncomingPayload;

      switch (op) {
        case LanyardOpcode.Hello: {
          this.heartbeat = setInterval(() => this.ws.send(JSON.stringify({ op: LanyardOpcode.Heartbeat })), d.heartbeat_interval);
          this.ws.send(JSON.stringify({ op: LanyardOpcode.Initialize, d: { subscribe_to_id: this.user_id } }));
          break;
        }

        case LanyardOpcode.Event:
          setUser(d);
          break;

        default:
          console.info(`[Lanyard] Unknown message: ${data}`);
      }
    };

    this.ws.onclose = ({ code }) => {
      clearInterval(this.heartbeat);
      console.info(`[Lanyard] Connection closed with code ${code}. Retrying in 1 second.`);

      setTimeout(() => {
        this.connect(setUser);
      }, 1000);
    };
  }
}

export const lanyard = new Lanyard(import.meta.env.VITE_USER_ID);
