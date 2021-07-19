// Type definitions for isomorphic-ws
// Run `npm install @types/ws` before using this.
// Fix for https://github.com/heineiuo/isomorphic-ws/issues/8
// If there is still something wrong, welcome issue.

import * as WebSocket from 'ws';
import {
	Server,
	Data,
	CertMeta,
	VerifyClientCallbackAsync,
	VerifyClientCallbackSync,
	ClientOptions,
	PerMessageDeflateOptions,
	OpenEvent,
	ErrorEvent,
	CloseEvent,
	MessageEvent,
	EventListenerOptions,
	ServerOptions,
	AddressInfo
} from 'ws';

export {
	WebSocket,
	Server,
	Data,
	CertMeta,
	VerifyClientCallbackAsync,
	VerifyClientCallbackSync,
	ClientOptions,
	PerMessageDeflateOptions,
	OpenEvent,
	ErrorEvent,
	CloseEvent,
	MessageEvent,
	EventListenerOptions,
	ServerOptions,
	AddressInfo
};
