import { createContext, useContext, useState } from 'react'
import ru from '../i18n/ru'
import en from '../i18n/en'

const translations = { ru, en }
const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ru')

  const t = (key) => {
    return translations[lang]?.[key] ?? key
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}