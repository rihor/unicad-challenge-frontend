import axios, { AxiosInstance } from "axios"

class Api {
  private axios: AxiosInstance

  constructor(url: string) {
    this.axios = axios.create({
      baseURL: url,
    })
  }

  async get<T>(resource: string) {
    const response = await this.axios.get<T>(resource)

    return response
  }

  async post<T>(resource: string, data: any) {
    const response = await this.axios.post<T>(resource, { data })

    return response
  }
}

export default new Api(process.env.NEXT_PUBLIC_API_URL || "")
