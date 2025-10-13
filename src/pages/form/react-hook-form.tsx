import { type SubmitHandler, useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  password: string
}

export function ReactHookFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="font-semibold text-3xl">React Hook Form Page</h1>

      <h2 className="font-semibold text-2xl mt-4">Form will be here</h2>

      <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Email is invalid' },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
              maxLength: { value: 20, message: 'Password must be at most 20 characters' },
            })}
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 transition-colors"
        >
          Salvar
        </button>
      </form>

      <div className="mt-4">
        <strong>Form is valid:</strong> {isValid ? 'Yes' : 'No'}
      </div>
    </div>
  )
}
