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
  langs
}

// 获取语言
function t (key: string): string {
  // 当前语言 key
  let langkey = langsManager.lang || langsManager.default
  // 判断是否存在
  let langObject = langsManager.langs[langsManager.lang || langsManager.default]
  // 判断语言
  if (!langObject) {
    // 不存在获取默认语言
    langkey = langsManager.default
    // 不存在获取默认语言
    langObject = langsManager.langs[langsManager.default]
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