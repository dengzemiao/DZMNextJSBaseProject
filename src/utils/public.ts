const Pub = {

  // 移动设备
  MOBILE() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = 'https://m.xxx.com/'
    }
  },

  // 是否为测试环境
  IS_DEBUG() {
    return !(process.env.NODE_ENV === 'production')
  },

  // 根据指定数字的倍数往上补充满数据
  SUPP_DATA(array: Record<string, any>[], num: number): Record<string, any>[] {
    let newArray = [...array]
    let count = array.length
    let dvalue = 0
    if (count % num != 0) { dvalue = num - count % num }
    for (let index = 0; index < dvalue; index++) {
      newArray.push({})
    }
    return newArray
  }
}

export default Pub