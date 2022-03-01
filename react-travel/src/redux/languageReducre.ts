interface LanguageState {
  language: 'en' | 'zh',
  languageList: {name: string, code: strign}[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'Englist', code: 'en' }
  ]
}

export default (state = defaultState, action) => {
  return state
}