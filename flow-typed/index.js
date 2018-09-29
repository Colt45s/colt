import type { BrowserHistory } from "history/createBrowserHistory";

declare module 'react-router-redux' {
  declare export var ConnectedRouter: any;
  declare export var routerReducer: Function;
  declare export function routerMiddleware(history: BrowserHistory): Function;
}

declare module 'redux-thunk' {
  declare module.exports: Function;
}

declare module 'redux-logger' {
  declare export function createLogger(options?: Object): Function;
}