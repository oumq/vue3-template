import request from '@/utils/request'

export const renderTemplate = (str: string) => {
  return request.post('/template', str, {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
}
