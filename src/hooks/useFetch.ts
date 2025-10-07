import { useEffect, useState } from 'react'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
  }, [url])

  return { data }
}
