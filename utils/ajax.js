import {
  http
} from './config.js'

function ajax(url_, type_ = 'get', params = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: http + url_,
      data: params,
      method: type_,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.statusCode === 200) {
          const {
            code,
            data,
            msg
          } = res.data;
          if (code === 0) {
            resolve(data)
          } else {
            reject(data)
          }
        }

      },
      fail(e) {
        reject(e)
      }
    })
  })
}

module.exports = {
  $ajax: ajax
}