import { ICustomer } from "./ICustomer"

interface IAddress {
    id: string
    street: string
    complement: string | null
    city: string
    state: string
    country: string
    zipCode: string
    customerId: string
    customer?: ICustomer[]
    createdAt?: Date
    updatedAt?: Date
}

export {
    IAddress
}