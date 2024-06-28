import { IAddress } from "./IAddress"

interface ICustomer {
    id: string
    name: string
    email: string
    status: boolean
    address?: IAddress[]
    createdAt?: Date
    updatedAt?: Date
}

export {
    ICustomer
}