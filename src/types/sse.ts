export interface SSEEvent<T extends string = string> {
  id: number
  type: T
  createDate: string
  data: any
}

export type SSEEventHandler<T extends SSEEvent = SSEEvent> = (event: T) => any

export type SSEEventHandlers<E extends string = string, T extends SSEEvent<E> = SSEEvent<E>> = {
  [key in E]?: SSEEventHandler<T>
}

export enum SEEEventType {
  KEEP_ALIVE = 'KEEP_ALIVE',
}
