import { useEffect, useState } from 'react'

interface Address {
  erro?: boolean
  cep: string
  logradouro: string
  complemento?: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
  estado: string
}

export function UseEffectPage() {
  const [count, setCount] = useState(1)
  const [anotherCount, setAnotherCount] = useState(1)
  const [zipAddress, setZipAddress] = useState('')
  const [address, setAddress] = useState<Address | null>(null)

  function handleIncrement() {
    setCount((state) => state + 1)
  }

  function handleDecrement() {
    setCount((state) => state - 1)
  }

  useEffect(() => {
    console.log(
      `The value of count is changed to: ${count} OR anotherCount is changed to: ${anotherCount}`
    )
    document.title = `Count: ${count} | Another count: ${anotherCount}`
  }, [anotherCount, count])

  useEffect(() => {
    if (zipAddress.length === 8 && /^\d+$/.test(zipAddress)) {
      async function fetchAddress() {
        const response = await fetch(`https://viacep.com.br/ws/${zipAddress}/json/`)
        const data = (await response.json()) as Address
        if (data.erro) {
          setAddress(null)
          return
        }
        setAddress(data)
      }
      fetchAddress()
    }
  }, [zipAddress])

  return (
    <main>
      <h1>Use Effect Page</h1>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>

      <p>Another count: {anotherCount}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={() => setAnotherCount((state) => state + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setAnotherCount((state) => state - 1)}>
          Decrement
        </button>
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <label htmlFor="zip">Zip code:</label>
        <input
          id="zip"
          name="zip"
          type="text"
          value={zipAddress}
          onChange={(e) => setZipAddress(e.target.value)}
        />
      </div>

      {address && (
        <div style={{ marginTop: 16 }}>
          <p>Address:</p>
          <p>
            {address.logradouro}, {address.bairro} - {address.localidade}/{address.uf}
          </p>
          <p>CEP: {address.cep}</p>
          {address.complemento && <p>Complemento: {address.complemento}</p>}
        </div>
      )}
    </main>
  )
}
