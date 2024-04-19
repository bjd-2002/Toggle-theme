import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
// import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

    document.body.style.backgroundColor = themeMode==="light" ? "white":"black";
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1>Hey</h1>
      <ThemeBtn/>
      <Card/>
    </ThemeProvider>
  )
}

export default App
