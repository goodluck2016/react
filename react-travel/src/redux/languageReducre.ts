export interface LanguageState {
  language: 'en' | 'zh';
  languageList: {name: string; code: string}[];
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'Englist', code: 'en' }
  ]
};

export default (state = defaultState, action) => {
  // console.log(state, action);
  switch(action.type) {
    case 'change_language':
      return { ...state, language: action.payload }
    case 'add_language':
      return {
        ...state,
        languageList: [...state.languageList, action.payload]
      }
    default:
      return state
  }
};