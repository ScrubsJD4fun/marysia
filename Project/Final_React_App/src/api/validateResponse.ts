import type { AxiosResponse } from "axios"

export async function validateResponse(
  value: AxiosResponse<any, any>,
): Promise<Response | PromiseLike<Response>> {
  if (value.statusText !== "OK") {
    throw new Error(await value.data)
  }
  console.log("all good", value.data)

  return value.data
}
