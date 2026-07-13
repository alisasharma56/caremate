type ApiService = 'PORTAL' | 'AUTH'

type QueryParams = Record<
  string,
  string | number | boolean | null | undefined
>

type RequestOptions = Omit<RequestInit, 'body' | 'method'> & {
  params?: QueryParams
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
      headers: this.createHeaders(options.headers, data),
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
  ): Promise<TResult> {
    const response = await fetch(this.createUrl(options.params), options)
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

  private createHeaders(headers: HeadersInit | undefined, data: unknown) {
    if (data instanceof FormData) return headers

    return {
      'Content-Type': 'application/json',
      ...headers,
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
