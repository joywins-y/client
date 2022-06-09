/** 产品颜色 */
export type Color = '蓝色' | '红色' | '白色'

/**
 * 库存一条记录
 */
export interface Production {
  id?: number,
  /**
   * 产品系列
   */
  series: string
  /**
   * 产品名称
   */
  name: string
  /** 
   * 产品尺寸 
   */
  size: number
  /**
   * 产品颜色
   */
  color: Color
  /**
   * 产品仓库编号
   */
  store: number
  /**
   * 仓库产品库存数量
   */
  number: number
}

/**
 * 发货记录 一条记录
 */
export interface PushProduction {
  /**
   * 出货时间
   */
  timer: string
  /**
   * 入货数量
   */
  number: number
  /**
   * 入货到达时间
   */
  dist: string
  /**
   * 入货产品
   */
  production: Production
  /**
   * 入货备注
   */
  description: string
}

/**
 * 出货记录 一条记录
 */
export interface PopProduction {
  /**
   * 出货时间
   */
  timer: string
  /**
   * 出货数量
   */
  number: number
  /**
   * 出货到达时间
   */
  dist: string
  /**
   * 出货产品
   */
  production: Production
  /**
   * 出货备注
   */
  description: string
}

/**
 * localStoreage 中存储的三种 总库记录 出库记录 入库记录
 */
export type StoreProduction = PopProduction | PushProduction | Production