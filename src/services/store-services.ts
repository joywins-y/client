export type LOCA_KEY = 'store' | 'pop_store' | 'push_store'

const push = (store: any[], key: LOCA_KEY, data: any) => {
  store.push(data)
  switch (key) {
    case 'store':
      localStorage.setItem(key, JSON.stringify(store))
      break
    case 'push_store':
      localStorage.setItem(key, JSON.stringify(store))
      break
    case 'pop_store':
      localStorage.setItem(key, JSON.stringify(store))
  }
}

export const storeServices = {
  save(key: LOCA_KEY, data: any) {
    let result = storeServices.fetch(key)
    let store: any[] = []
    if (result) {
      store = JSON.parse(result) as any[]
      push(store, key, data)
    }
    else {
      push(store, key, data)
    }
  },
  fetch(key: LOCA_KEY) {
    return localStorage.getItem(key)
  },
  clear(key: LOCA_KEY) {
    localStorage.removeItem(key)
  }
}