import cn from '../../public/locales/cn.json'
import tc from '../../public/locales/tc.json'
import en from '../../public/locales/en.json'

// 本地化语言列表
const langs: Record<string, any> = {
  // 简体中文
  cn,
  // 繁体中文
  tc,
  // 英文
  en
}

// 本地化语言管理
const langsManager: Record<string, any> = {
  // 默认语言
  default: 'cn',
  // 当前语言（无值则使用默认语言）
  lang: '',
  // 语言列表 keys
  keys: Object.keys(langs),
  // 语言列表
  langs,
  // 设置语言
  setLang (lang: string) {
    // 记录
    this.lang = lang
  },
  // 获取语言
  getLang (): string {
    // 语言key
    let lang = ''
    // 是否为客户端
    if (typeof window !== 'undefined') {
      // 客户端直接读取浏览器链接上的
      lang = getQueryParam('lang') || this.default
    } else {
      // 服务端直接读取 Page 设置的
      lang = this.lang || this.default
    }
    // 传入的语言是否存在，不存在使用默认的
    return this.keys.includes(lang) ? lang : this.default
  }
}

// 获取页面链接参数，客户端组件使用
function getQueryParam(key: string): string {
  const regex = new RegExp(`[?&]${key}=([^&#]*)`, 'i')
  const match = window.location.search.match(regex)
  return match ? decodeURIComponent(match[1]) : ''
}

// 获取语言
function t (key: string): string {
  // 当前语言 key
  let langkey = langsManager.getLang()
  // 判断是否存在
  let langObject = langsManager.langs[langkey]
  // 判断语言
  if (!langObject) {
    // 不存在获取默认语言
    langkey = langsManager.default
    // 不存在获取默认语言
    langObject = langsManager.langs[langkey]
  }
  // 内容
  const content = langObject[key] || key
  // 日志
  console.log('获取语言：', langkey, key, content)
  // 返回
  return content
}

// 导出
export {
  // 获取语言
  t,
  // 本地化语言管理
  langsManager
}