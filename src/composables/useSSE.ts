import type { MaybeRef } from '@vueuse/core'
import { SEEEventType } from '~/types/sse'
import type { SSEEvent, SSEEventHandlers } from '~/types/sse'

export const useSSE = <
  T extends SSEEventHandlers<string, any> = SSEEventHandlers<string, SSEEvent>
>(
  eventSourceUrl: MaybeRef<string>,
  eventHandlers: T
) => {
  const debug = ref(true)
  const eventSource = ref<EventSource | null>()

  function connect() {
    eventSource.value = new EventSource(unref(eventSourceUrl))

    eventSource.value.addEventListener('message', (e) => {
      const event = JSON.parse(e.data) as SSEEvent

      if (event.type !== SEEEventType.KEEP_ALIVE && debug.value) {
        // eslint-disable-next-line no-console
        console.log({ type: event.type, event })
      }

      const handler = eventHandlers[event.type]
      if (handler) handler(event)
    })

    eventSource.value.addEventListener('error', (e) => {
      // TODO: remove after testing
      // eslint-disable-next-line no-console
      console.log({ msg: 'EVENT ERROR', e })
    })
  }

  function close() {
    eventSource.value?.close()
  }

  return {
    eventSource,
    connect,
    close,
  }
}
