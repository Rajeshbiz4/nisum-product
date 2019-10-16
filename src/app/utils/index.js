import Rcookie from 'react-cookies'

export function apiCallFetch (method, authReq = true, body = {}) {
  let obj = {}
  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
    obj = {
      method,
      body: JSON.stringify(body),
      credentials: 'same-origin',
    }
  } else {
    obj = {
      method,
    }
  }
  if (authReq) {
    return ({
      ...obj,
      headers: {
        Authorization: Rcookie.load(`${process.env.app}_accessToken_${process.env.type}`) ? Rcookie.load(`${process.env.app}_accessToken_${process.env.type}`) : '',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
  return ({
    ...obj,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
