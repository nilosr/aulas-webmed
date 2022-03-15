import { HttpClient, HttpStatusCode } from "../../http/http-client"

export class RemoteAuthentication {
	constructor(
		public readonly url: string,
		public readonly httpClient: HttpClient<RemoteAuthentication.Model>,
	) {}

    async auth (params: Authentication.Params): Promise<Authentication.Model> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'post',
            body: params,
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return httpResponse.body
            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialsError()
                default: throw new UnexpectedError()

        if (response.statusCode !== HttpStatusCode.ok) {
            throw new Error('Remote authentication failed')
        }

        return response.body
    }
}

export namespace RemoteAuthentication {
    export interface Model = string
    
}