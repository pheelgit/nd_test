import axios, { AxiosInstance, AxiosResponse } from 'axios'
// import { BASE_URL } from './constants.ts'
import { router } from '../router.ts'
import { BASE_URL } from '../constants.ts'
import { NewNoteType, NoteIdType, NoteType } from '../types/noteType.ts'

class HTTPService {
  private static instance: HTTPService
  private axiosInstance: AxiosInstance

  constructor() {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

    // Add a request interceptor
    axiosInstance.interceptors.request.use(
      async function (config) {
        const accessToken = localStorage.getItem('token')
        config.headers.Authorization = `Bearer ${accessToken}`
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response
      },
      async function (error) {
        // const { title, detail } = error.response.data
        const status = error.response.status
        switch (status) {
          case 401: {
            //      removeUser
            localStorage.setItem('token', '')
            await router.push({ name: 'mainPage' })
            break
          }
          //   case 404: {
          //     await router.push({ name: 'notFoundPage' })
          //     break
          //   }
          // }
        }
        return Promise.reject(error)
      }
    )

    this.axiosInstance = axiosInstance
  }

  public static getInstance(): HTTPService {
    if (!HTTPService.instance) {
      HTTPService.instance = new HTTPService()
    }
    return HTTPService.instance
  }

  public async logIn(data: {
    email: string
    password: string
  }): Promise<AxiosResponse<{ accessToken: string }>> {
    return await this.axiosInstance.post('/api/auth', data)
  }

  public async signIn(data: {
    email: string
    password: string
    confirm_password: string
  }): Promise<AxiosResponse<{ id: number; email: string }>> {
    return await this.axiosInstance.post('/api/reg', data)
  }
  public async getToken(data: {
    email: string
    password: string
  }): Promise<AxiosResponse<{ accessToken: string }>> {
    return await this.axiosInstance.post('/api/auth', data)
  }
  public async getUser(): Promise<AxiosResponse<{ id: number; email: string }>> {
    return await this.axiosInstance.get('/api/auth')
  }

  public async getNotes(): Promise<AxiosResponse<NoteType[]>> {
    return await this.axiosInstance.get('/api/notes')
  }
  public async addNote(note: NewNoteType): Promise<AxiosResponse<NoteType>> {
    return await this.axiosInstance.post('/api/notes', note)
  }
  public async deleteNote(id: NoteIdType): Promise<AxiosResponse> {
    return await this.axiosInstance.delete(`/api/notes/${id}`)
  }
}

// Экспорт конкретного инстанса
export default HTTPService.getInstance()
