export type Color = 'blue' | 'red' | 'wihet'

export interface Production {
  /**
   * 产品系列
   */
  series: string[]
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
}

/**
 * 发货记录
 */
export interface PushProduction {
  timer: string
  number: number
  dist: string
  production: Production
  description: string
}

/**
 * 出货记录
 */

export interface PopProduction {
  timer: string
  number: number
  dist: string
  production: Production
  description: string
}