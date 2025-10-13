import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? 'Salvando...' : 'Salvar'}
    </button>
  )
}
