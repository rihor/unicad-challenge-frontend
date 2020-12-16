import { NextPage } from "next"
import { useRouter } from "next/router"
import { useForm, FormProvider } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"

import FormInput from "../components/form/Input"
import api from "../services/api"
import createDeliverySchema from "../validators/createDeliveryValidation"

const CreateDeliveryPage: NextPage = () => {
  const { push } = useRouter()

  const form = useForm({
    resolver: yupResolver(createDeliverySchema),
  })

  const onSubmit = form.handleSubmit(async (data) => {
    const delivery = await api.post("/deliveries", data)

    if (!delivery) {
      return
    }

    await push("/")
  })

  return (
    <div className="h-screen bg-gradient-to-br from-yellow-300 to-yellow-200">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 h-full mx-auto flex items-center transition-all">
        <main className="w-full h-auto flex flex-col justify-around bg-gray-50 rounded p-4">
          <h1 className="text-4xl font-semibold text-center text-green-600">
            Criar nova entrega
          </h1>
          <FormProvider {...form}>
            <form onSubmit={onSubmit} className="space-y-3">
              <FormInput label="Cliente" name="client_name" placeholder="Nome">
                <svg
                  className="h-5 w-5 mr-2 opacity-50 flex-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </FormInput>

              <FormInput label="Origem" name="start" placeholder="Endereço">
                <svg
                  className="h-5 w-5 mr-2 opacity-50 flex-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </FormInput>

              <FormInput
                label="Destino"
                name="destination"
                placeholder="Endereço">
                <svg
                  className="h-5 w-5 mr-2 opacity-50 flex-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </FormInput>

              <FormInput label="Data" name="date" type="datetime-local">
                <svg
                  className="h-5 w-5 mr-2 opacity-50 flex-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </FormInput>

              <button
                data-test="form-button"
                type="submit"
                className="py-3 px-14 flex items-center rounded bg-green-500 text-xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all">
                Criar
              </button>
            </form>
          </FormProvider>
        </main>
      </div>
    </div>
  )
}

export default CreateDeliveryPage
