/* @flow */

import type { Action as _Action } from './action'
import type { State as _State } from './state'
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { RootState } from '../reducers'

export type State = _State
export type Action = _Action

type GetState = () => State

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState
) => void | Promise<void>

type ThunkDispatch<A> = ThunkAction => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<RootState, Action>
