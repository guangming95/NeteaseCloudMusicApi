import { RequestBaseConfig } from './base'

export interface CommentMvRequestConfig extends RequestBaseConfig {
  id: string | number
  limit?: string | number
  offset?: string | number
  before?: string | number
}
