import { useEffect, useState } from "react"

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const handleStorageChange = () => {
      const item = window.localStorage.getItem(key)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      item ? setStoredValue(JSON.parse(item)) : setStoredValue(initialValue)
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [key, initialValue])

  return [storedValue, setValue] as const
}

export default useLocalStorage
