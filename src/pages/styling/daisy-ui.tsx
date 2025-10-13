export function DaisyUIPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold">DaisyUI Page</h1>

      <h2 className="mt-4 text-2xl">Botões:</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <button type="button" className="btn btn-neutral">
          Neutral
        </button>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-accent">
          Accent
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-error">
          Error
        </button>
      </div>
    </div>
  )
}
