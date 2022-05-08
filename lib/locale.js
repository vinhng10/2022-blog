import { useContext, createContext } from 'react'
const { fetchLocaleLang } = require("./lang");

const locale = fetchLocaleLang()
const LocaleContext = createContext()

export function LocaleProvider({ children }) {
    return (
        <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
    )
}

export const useLocale = () => useContext(LocaleContext)