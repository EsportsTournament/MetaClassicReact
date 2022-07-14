export interface User {
    id: number,
    email: string,
    verified_email: boolean,
    name: string,
    given_name: string,
    picture: string,
    locale: string,
    iat: number
}