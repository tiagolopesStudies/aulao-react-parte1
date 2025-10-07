import { useId } from 'react'

export function UseId() {
  const id = useId()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <label htmlFor={`${id}-email`} style={{ width: '80px', display: 'inline-block' }}>
          Email:
        </label>
        <input id={`${id}-email`} type="email" placeholder="johndoe@example.com" />
      </div>

      <div>
        <label
          htmlFor={`${id}-password`}
          style={{ width: '80px', display: 'inline-block' }}
        >
          Password:
        </label>
        <input id={`${id}-password`} type="password" placeholder="pwd123" />
      </div>
    </div>
  )
}
