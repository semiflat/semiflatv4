import type { UserProfile } from './profile'
import type { SSEEvent, SSEEventHandlers } from './sse'
import type { WebinarVisibility } from './webinars'

export enum ChatSSEEventType {
  ERROR = 'ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
  USER_JOINED = 'USER_JOINED',
  USER_LEFT = 'USER_LEFT',
  ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE',
  START_SURVEY = 'START_SURVEY',
  UPDATE_SURVEY = 'UPDATE_SURVEY',
  STOP_SURVEY = 'STOP_SURVEY',
  START_STREAM = 'START_STREAM',
  STOP_STREAM = 'STOP_STREAM',
  ADD_DIRECT_MESSAGE = 'ADD_DIRECT_MESSAGE',
}

export interface ChatUser {
  id: number
  firstName: string
  lastName: string
  emailAddress: string
  activeInstances: number
}

export interface ChatMessage {
  id: number
  message: string
  createDate: string
  author: UserProfile
}

export interface ChatEvent extends SSEEvent<ChatSSEEventType> {
  webinar: {
    id: number
    visibility: WebinarVisibility
  }
  initiatedBy: UserProfile
}

export interface ChatMessageEvent extends ChatEvent {
  data: ChatMessage
  relatesTo?: UserProfile
}

export type ChatSSEEventHandlers = SSEEventHandlers<ChatSSEEventType, ChatEvent>
