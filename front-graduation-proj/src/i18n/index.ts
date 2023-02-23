import en_US from './langs/en_US.json'
import zh_CN from './langs/zh_CN.json'

const locale = 'zh_CN'
const messages = {
    zh_CN: zh_CN,
    en_US: en_US,
}

import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale,
    messages,
})
export default i18n
