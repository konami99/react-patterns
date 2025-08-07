import useLocalStorage from "../hooks/useLocalStorage"

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px"
      }}
    >
      <button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark" : "Switch to Light"}</button>
      <p>Current theme: {theme}</p>
    </div>
  )
}

export default ThemeToggle
