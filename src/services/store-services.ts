import { StoreProduction } from '@/interfaces/production'

/** localStoreage 存储的三种数据为 总库记录 出库记录 入库记录 */
export type LOCA_KEY = 'store' | 'pop_store' | 'push_store'

let store: StoreProduction[] = []

const push = (store: any[], key: LOCA_KEY, data: StoreProduction) => {
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
  save(key: LOCA_KEY, data: StoreProduction) {
    let result = storeServices.check(key)
    if (result) {
      store = JSON.parse(result) as any[]
      push(store, key, data)
    }
    else {
      push(store, key, data)
    }
  },
  check(key: LOCA_KEY) {
    const result = localStorage.getItem(key) as any
    if (result) {
      return result as string
    }
    return null
  },

  get(key: LOCA_KEY) {
    const result = localStorage.getItem(key)
    return result ? JSON.parse(result) as StoreProduction[] : [] as any[]
  },
  clear(key: LOCA_KEY) {
    localStorage.removeItem(key)
  }
}