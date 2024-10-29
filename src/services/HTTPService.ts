import axios from 'axios'
import { BASE_URL } from '../constants.ts'
import { router } from '../router.ts'

class HTTPService {
  private static instance: HTTPService

  constructor() {
    const axiosInstance = axios.create({
      baseURL: BASE_URL
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*'
      // }
    })

    // Add a request interceptor
    axiosInstance.interceptors.request.use(
      async function (config) {
        // Do something before request is sent
        // const accessToken = await getAccessToken()
        // config.headers.Authorization = `Bearer ${accessToken}`
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
        // // Any status codes that falls outside the range of 2xx cause this function to trigger
        // // Do something with response error
        switch (status) {
          case 401: {
            //      removeUser
            await router.push({ name: 'authPage' })
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
  }

  public static getInstance(): HTTPService {
    if (!HTTPService.instance) {
      HTTPService.instance = new HTTPService()
    }
    return HTTPService.instance
  }

  public async getUserNotes() {}
  // public async getNotes(): Promise<void> {
  //   const wellData = this.getWellData(wellId)
  //   // если уже обновляется, то выходим
  //   if (!wellData.canUpdateData) {
  //     return
  //   }
  //
  //   wellData.canUpdateData = false
  //
  //   // докачка новых строк
  //   if (wellData.shrtIDOfUpdate !== endShrtIDOfUpdate) {
  //     await this.addNewRows(wellId, endShrtIDOfUpdate)
  //   }
  //
  //   // пересчет индексов если новые данные или новые дриллстейты
  //   // const getMaxDrillStateShrtIdofUpdate = (wellId: WellIdType): number => {
  //   const getMaxDrillStateShrtIdofUpdate = (): number => {
  //     return d3.max(drillStates, (el) => el.ShrtIDOfUpdate) || 0
  //   } // отдельный стор дриллстейтов
  //
  //   if (
  //     wellData.shrtIDOfUpdate !== endShrtIDOfUpdate ||
  //     wellData.lastDrillStatesShrtIdOfUpdate !== getMaxDrillStateShrtIdofUpdate()
  //   ) {
  //     await this.rebuildIndex(wellId, drillStates)
  //     wellData.lastDrillStatesShrtIdOfUpdate = getMaxDrillStateShrtIdofUpdate()
  //   }
  //
  //   await this.addNewCols(wellId, valueList)
  //
  //   wellData.canUpdateData = true
  // }
}

// Экспорт конкретного инстанса
export default HTTPService.getInstance()
