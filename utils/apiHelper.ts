type QueryParams = {
  [key: string]: string
}

async function apiHelper<T>(
  url: string,
  queryParams: QueryParams = {}
): Promise<T> {
  const endpoint = new URL(url)

  // Add query params
  Object.keys(queryParams).forEach((key) =>
    endpoint.searchParams.append(key, queryParams[key])
  )
  const response = await fetch(endpoint.toString())
  const body = await response.json()
  return body
}

export default apiHelper
