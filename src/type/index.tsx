// Type definitions for common use

export interface Articles {
  _id: string,
  author: string,
  peek: string,
  reviews: number,
  tags: string[],
  timestamp: number,
  title: string,
  views: number,
  deleted: boolean
}
