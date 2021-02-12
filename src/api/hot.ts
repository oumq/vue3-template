import request from '@/utils/request'

export const getHotList = () => {
  return request.get('/api/hot/selectAll')
}
