import { SubmitButton } from '@/components/submit-button'

export function ActionsPage() {
  async function handleSubmit(formData: FormData) {
    await new Promise((resolve) => {
      setTimeout(() => {
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`)
        }

        console.log({ name, email, password })
        resolve(true)
      }, 2000)
    })
  }

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-xl font-semibold text-center">Actions Page</h1>

      <h2 className="text-lg font-semibold">Actions</h2>

      <form className="mt-4 flex flex-col gap-2" action={handleSubmit}>
        <div className="flex flex-col gap-1">
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>

        <div className="flex flex-col gap-1">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>

        <div className="flex flex-col gap-1">
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}
