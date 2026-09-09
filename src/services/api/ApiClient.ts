// type ApiService = 'PORTAL' | 'AUTH'
//
// type QueryParams = Record<
//   string,
//   string | number | boolean | null | undefined
// >
//
// type RequestOptions = Omit<RequestInit, 'body' | 'method'> & {
//   params?: QueryParams
// }
//
// export class ApiError extends Error {
//   status: number
//   data: unknown
//
//   constructor(message: string, status: number, data: unknown) {
//     super(message)
//     this.name = 'ApiError'
//     this.status = status
//     this.data = data
//   }
// }
//
// class ApiClient<TResponse> {
//   private readonly baseUrl: string
//   private readonly endpoint: string
//
//   constructor(service: ApiService, endpoint: string) {
//     this.baseUrl = this.getServiceUrl(service).replace(/\/$/, '')
//     this.endpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
//   }
//
//   getUnPaginatedList = (): Promise<TResponse> => {
//     return this.get()
//   }
//
//   get(options: RequestOptions = {}): Promise<TResponse> {
//     return this.request<TResponse>({
//       ...options,
//       method: 'GET',
//     })
//   }
//
//   post<TPayload = unknown>(
//     data?: TPayload,
//     options: RequestOptions = {},
//   ): Promise<TResponse> {
//     return this.request<TResponse>({
//       ...options,
//       method: 'POST',
//       body: this.createBody(data),
//       headers: this.createHeaders(options.headers, data),
//     })
//   }
//
//   private getServiceUrl(service: ApiService) {
//     const serviceUrls: Record<ApiService, string | undefined> = {
//       PORTAL: import.meta.env.VITE_API_URL,
//       AUTH: import.meta.env.VITE_AUTH_API_URL,
//     }
//
//     return serviceUrls[service] ?? ''
//   }
//
//   private async request<TResult>(
//     options: RequestOptions & RequestInit,
//   ): Promise<TResult> {
//     const response = await fetch(this.createUrl(options.params), options)
//     const data = await this.parseResponse(response)
//
//     if (!response.ok) {
//       throw new ApiError(
//         this.getErrorMessage(data, response.statusText),
//         response.status,
//         data,
//       )
//     }
//
//     return data as TResult
//   }
//
//   private createUrl(params?: QueryParams) {
//     const url = new URL(
//       `${this.baseUrl}${this.endpoint}`,
//       window.location.origin,
//     )
//
//     Object.entries(params ?? {}).forEach(([key, value]) => {
//       if (value !== null && value !== undefined) {
//         url.searchParams.set(key, String(value))
//       }
//     })
//
//     return url.toString()
//   }
//
//   private createBody<TPayload>(data: TPayload | undefined): BodyInit | undefined {
//     if (data === undefined) return undefined
//     if (data instanceof FormData) return data
//
//     return JSON.stringify(data)
//   }
//
//   private createHeaders(headers: HeadersInit | undefined, data: unknown) {
//     if (data instanceof FormData) return headers
//
//     return {
//       'Content-Type': 'application/json',
//       ...headers,
//     }
//   }
//
//   private async parseResponse(response: Response) {
//     if (response.status === 204) return null
//
//     const contentType = response.headers.get('content-type')
//     return contentType?.includes('application/json')
//       ? response.json()
//       : response.text()
//   }
//
//   private getErrorMessage(data: unknown, fallback: string) {
//     if (
//       data &&
//       typeof data === 'object' &&
//       'message' in data &&
//       typeof data.message === 'string'
//     ) {
//       return data.message
//     }
//
//     return fallback || 'API request failed'
//   }
// }
//
// export default ApiClient
//

// import { CookieHandler } from '@/features/auth/cookieHandler.ts'
//
// type ApiService = 'PORTAL' | 'AUTH'
//
// type QueryParams = Record<
// string,
// string | number | boolean | null | undefined
// >
//
// type RequestOptions = Omit<RequestInit, 'body' | 'method'> & {
//   params?: QueryParams
//   skipAuth?: boolean
// }
//
// export class ApiError extends Error {
//   status: number
//   data: unknown
//
//   constructor(message: string, status: number, data: unknown) {
//     super(message)
//     this.name = 'ApiError'
//     this.status = status
//     this.data = data
//   }
// }
//
// interface RefreshResponse {
//   access_token: string
//   token_type: string
// }
//
// let refreshPromise: Promise<string | null> | null = null
//
// async function refreshAccessToken(): Promise<string | null> {
//   if (refreshPromise) return refreshPromise
//
//   refreshPromise = (async () => {
//     const refreshToken = CookieHandler.getRefreshToken()
//     if (!refreshToken) return null
//
//     try {
//       const client = new ApiClient<RefreshResponse>('AUTH', '/auth/refresh')
//       const data = await client.post(
//           { refresh_token: refreshToken },
//           { skipAuth: true },
//       )
//       CookieHandler.setAccessToken(data.access_token)
//       return data.access_token
//     } catch {
//       CookieHandler.clearTokens()
//       return null
//     } finally {
//       refreshPromise = null
//     }
//   })()
//
//   return refreshPromise
// }
//
// class ApiClient<TResponse> {
//   private readonly baseUrl: string
//   private readonly endpoint: string
//
//   constructor(service: ApiService, endpoint: string) {
//     this.baseUrl = this.getServiceUrl(service).replace(/\/$/, '')
//     this.endpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
//   }
//
//   getUnPaginatedList = (): Promise<TResponse> => {
//     return this.get()
//   }
//
//   get(options: RequestOptions = {}): Promise<TResponse> {
//     return this.request<TResponse>({
//       ...options,
//       method: 'GET',
//       headers: this.createHeaders(options.headers, undefined, options.skipAuth),
//     })
//   }
//
//   post<TPayload = unknown>(
//       data?: TPayload,
//       options: RequestOptions = {},
//   ): Promise<TResponse> {
//     return this.request<TResponse>({
//       ...options,
//       method: 'POST',
//       body: this.createBody(data),
//       headers: this.createHeaders(options.headers, data, options.skipAuth),
//     })
//   }
//
//   private getServiceUrl(service: ApiService) {
//     const serviceUrls: Record<ApiService, string | undefined> = {
//       PORTAL: import.meta.env.VITE_API_URL,
//       AUTH: import.meta.env.VITE_AUTH_API_URL,
//     }
//
//     return serviceUrls[service] ?? ''
//   }
//
//   private async request<TResult>(
//       options: RequestOptions & RequestInit,
//       isRetry = false,
//   ): Promise<TResult> {
//     const response = await fetch(this.createUrl(options.params), options)
//
//     if (response.status === 401 && !options.skipAuth && !isRetry) {
//       const newAccessToken = await refreshAccessToken()
//       if (!newAccessToken) {
//         throw new ApiError('Session expired', 401, null)
//       }
//       return this.request<TResult>(
//           {
//             ...options,
//             headers: this.createHeaders(options.headers, undefined, false),
//           },
//           true,
//       )
//     }
//
//     const data = await this.parseResponse(response)
//
//     if (!response.ok) {
//       throw new ApiError(
//           this.getErrorMessage(data, response.statusText),
//           response.status,
//           data,
//       )
//     }
//
//     return data as TResult
//   }
//
//   private createUrl(params?: QueryParams) {
//     const url = new URL(
//         `${this.baseUrl}${this.endpoint}`,
//         window.location.origin,
//     )
//
//     Object.entries(params ?? {}).forEach(([key, value]) => {
//       if (value !== null && value !== undefined) {
//         url.searchParams.set(key, String(value))
//       }
//     })
//
//     return url.toString()
//   }
//
//   private createBody<TPayload>(data: TPayload | undefined): BodyInit | undefined {
//     if (data === undefined) return undefined
//     if (data instanceof FormData) return data
//
//     return JSON.stringify(data)
//   }
//
//   private createHeaders(
//       headers: HeadersInit | undefined,
//       data: unknown,
//       skipAuth?: boolean,
//   ): HeadersInit {
//     const accessToken = skipAuth ? null : CookieHandler.getAccessToken()
//     const result: Record<string, string> = {}
//
//     if (!(data instanceof FormData)) {
//       result['Content-Type'] = 'application/json'
//     }
//
//     if (accessToken) {
//       result.Authorization = `Bearer ${accessToken}`
//     }
//
//     return {
//       ...result,
//       ...(headers as Record<string, string> | undefined),
//     }
//   }
//
//   private async parseResponse(response: Response) {
//     if (response.status === 204) return null
//
//     const contentType = response.headers.get('content-type')
//     return contentType?.includes('application/json')
//         ? response.json()
//         : response.text()
//   }
//
//   private getErrorMessage(data: unknown, fallback: string) {
//     if (
//         data &&
//         typeof data === 'object' &&
//         'message' in data &&
//         typeof data.message === 'string'
//     ) {
//       return data.message
//     }
//
//     return fallback || 'API request failed'
//   }
// }
//
// export default ApiClient

import { CookieHandler } from '@/features/auth/cookieHandler.ts'

type ApiService = 'PORTAL' | 'AUTH'

type QueryParams = Record<
string,
string | number | boolean | null | undefined
>

type RequestOptions = Omit<RequestInit, 'body' | 'method'> & {
  params?: QueryParams
  skipAuth?: boolean
}

export class ApiError extends Error {
  status: number
  data: unknown

  constructor(message: string, status: number, data: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

interface RefreshResponse {
  access_token: string
  token_type: string
}

let refreshPromise: Promise<string | null> | null = null

async function refreshAccessToken(): Promise<string | null> {
  if (refreshPromise) return refreshPromise

  refreshPromise = (async () => {
    const refreshToken = CookieHandler.getRefreshToken()
    if (!refreshToken) return null

    try {
      const client = new ApiClient<RefreshResponse>('AUTH', '/auth/refresh')
      const data = await client.post(
          { refresh_token: refreshToken },
          { skipAuth: true },
      )
      CookieHandler.setAccessToken(data.access_token)
      return data.access_token
    } catch {
      CookieHandler.clearTokens()
      return null
    } finally {
      refreshPromise = null
    }
  })()

  return refreshPromise
}

class ApiClient<TResponse> {
  private readonly baseUrl: string
  private readonly endpoint: string

  constructor(service: ApiService, endpoint: string) {
    this.baseUrl = this.getServiceUrl(service).replace(/\/$/, '')
    this.endpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  }

  getUnPaginatedList = (): Promise<TResponse> => {
    return this.get()
  }

  get(options: RequestOptions = {}): Promise<TResponse> {
    return this.request<TResponse>({
      ...options,
      method: 'GET',
      headers: this.createHeaders(options.headers, undefined, options.skipAuth),
    })
  }

  post<TPayload = unknown>(
      data?: TPayload,
      options: RequestOptions = {},
  ): Promise<TResponse> {
    return this.request<TResponse>({
      ...options,
      method: 'POST',
      body: this.createBody(data),
      headers: this.createHeaders(options.headers, data, options.skipAuth),
    })
  }

  patch<TPayload = unknown>(
      data?: TPayload,
      options: RequestOptions = {},
  ): Promise<TResponse> {
    return this.request<TResponse>({
      ...options,
      method: 'PATCH',
      body: this.createBody(data),
      headers: this.createHeaders(options.headers, data, options.skipAuth),
    })
  }

  delete(options: RequestOptions = {}): Promise<TResponse> {
    return this.request<TResponse>({
      ...options,
      method: 'DELETE',
      headers: this.createHeaders(options.headers, undefined, options.skipAuth),
    })
  }

  private getServiceUrl(service: ApiService) {
    const serviceUrls: Record<ApiService, string | undefined> = {
      PORTAL: import.meta.env.VITE_API_URL,
      AUTH: import.meta.env.VITE_AUTH_API_URL,
    }

    return serviceUrls[service] ?? ''
  }

  private async request<TResult>(
      options: RequestOptions & RequestInit,
      isRetry = false,
  ): Promise<TResult> {
    const response = await fetch(this.createUrl(options.params), options)

    if (response.status === 401 && !options.skipAuth && !isRetry) {
      const newAccessToken = await refreshAccessToken()
      if (!newAccessToken) {
        throw new ApiError('Session expired', 401, null)
      }
      return this.request<TResult>(
          {
            ...options,
            headers: this.createHeaders(options.headers, undefined, false),
          },
          true,
      )
    }

    const data = await this.parseResponse(response)

    if (!response.ok) {
      throw new ApiError(
          this.getErrorMessage(data, response.statusText),
          response.status,
          data,
      )
    }

    return data as TResult
  }

  private createUrl(params?: QueryParams) {
    const url = new URL(
        `${this.baseUrl}${this.endpoint}`,
        window.location.origin,
    )

    Object.entries(params ?? {}).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        url.searchParams.set(key, String(value))
      }
    })

    return url.toString()
  }

  private createBody<TPayload>(data: TPayload | undefined): BodyInit | undefined {
    if (data === undefined) return undefined
    if (data instanceof FormData) return data

    return JSON.stringify(data)
  }

  private createHeaders(
      headers: HeadersInit | undefined,
      data: unknown,
      skipAuth?: boolean,
  ): HeadersInit {
    const accessToken = skipAuth ? null : CookieHandler.getAccessToken()
    const result: Record<string, string> = {}

    if (!(data instanceof FormData)) {
      result['Content-Type'] = 'application/json'
    }

    if (accessToken) {
      result.Authorization = `Bearer ${accessToken}`
    }

    return {
      ...result,
      ...(headers as Record<string, string> | undefined),
    }
  }

  private async parseResponse(response: Response) {
    if (response.status === 204) return null

    const contentType = response.headers.get('content-type')
    return contentType?.includes('application/json')
        ? response.json()
        : response.text()
  }

  private getErrorMessage(data: unknown, fallback: string) {
    if (
        data &&
        typeof data === 'object' &&
        'message' in data &&
        typeof data.message === 'string'
    ) {
      return data.message
    }

    return fallback || 'API request failed'
  }
}

export default ApiClient