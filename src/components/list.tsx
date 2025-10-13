export function List() {
  const items = Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`)

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
