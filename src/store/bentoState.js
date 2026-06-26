let activeIndex = -1
const listeners = new Set()

export const bentoState = {
  set(idx) {
    activeIndex = idx
    listeners.forEach(fn => fn(idx))
  },
  get: () => activeIndex,
  subscribe: (fn) => {
    listeners.add(fn)
    return () => listeners.delete(fn)
  }
}
