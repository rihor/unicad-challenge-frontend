import { FC } from "react"
import { useFormContext } from "react-hook-form"

interface Props {
  name: string
  label?: string
  type?: string
  placeholder?: string
}

const FormInput: FC<Props> = ({ name, label, type, placeholder, children }) => {
  const { register, errors } = useFormContext()

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={name}>{label}</label>}

      <div className="p-2 flex items-center bg-gray-100 shadow-inner rounded">
        {children}
        <input
          className="w-full bg-transparent focus:outline-none"
          id={name}
          name={name}
          placeholder={placeholder}
          type={type || "text"}
          ref={register}
        />
      </div>

      {errors?.[name] && (
        <p className="text-red-400 italic text-sm">{errors[name].message}</p>
      )}
    </div>
  )
}

export default FormInput
