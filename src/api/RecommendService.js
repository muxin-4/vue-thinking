import axios from 'axios'
import { commonParams, options } from './config'
import jsonp from '@/common/jsonp'

class RecommendService {
  /**
   * QQ音乐推荐
   * @param options
   * @returns {*}
   */
  getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParams, {
      platform: 'h5',
      uin: 0,
      needNewCode: 1
    })

    return jsonp(url, data, options)
  }
}

export default new RecommendService();
