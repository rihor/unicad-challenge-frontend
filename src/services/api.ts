import axios, { AxiosInstance } from "axios"

interface ApiError {
  status?: number
  data?: {
    errors: Array<{
      rule: string
      field: string
      message: string
    }>
  }
}

class Api {
  private axios: AxiosInstance

  constructor(url: string) {
    this.axios = axios.create({
      baseURL: url,
    })
  }

  private getErrorMessage(error: ApiError) {
    if (!error?.status) {
      return "No connection with server right now"
    }

    const errors = error?.data?.errors.map((err) => ({
      message: err.message,
      field: err.field,
    }))

    return {
      status: error.status,
      errors,
    }
  }

  async get<T>(resource: string) {
    try {
      return await this.axios.get<T>(resource)
    } catch (responseError) {
      this.getErrorMessage(responseError.response)
    }
  }

  async post<T>(resource: string, data: any) {
    try {
      return await this.axios.post<T>(resource, data)
    } catch (responseError) {
      console.log(this.getErrorMessage(responseError.response))
    }
  }
}

export default new Api(process.env.NEXT_PUBLIC_API_URL || "")
