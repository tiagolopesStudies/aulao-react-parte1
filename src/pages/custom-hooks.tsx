import { useFetch } from '../hooks/useFetch'

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

export function CustomHooksPage() {
  const zipAddress = 13476552
  const apiUrl = `https://viacep.com.br/ws/${zipAddress}/json/`
  const { data: address } = useFetch<Address>(apiUrl)

  return (
    <main>
      <h1>Custom Hooks Page</h1>

      <div style={{ display: 'flex', gap: 8 }}>
        <label htmlFor="zip">Zip code:</label>
        <input id="zip" name="zip" type="text" value={zipAddress} disabled />
      </div>

      {address && !address.erro && (
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
