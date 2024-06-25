import { ICustomer } from "../entities/ICustomer"

// Create
type CreateParams = {
    data: Omit<ICustomer,
        | 'id'
        | 'created_at'
        | 'updated_at'
    >
}

type CreateResponse = ICustomer

// Find unique
type FindUniqueParams = {
    where: {
        id: string
    }
    select?: ICustomer
}

type FindUniqueResponse = ICustomer | null

// Delete
type DeleteParams = {
    id: string
}

// Update
type UpdateParams = {
    id: string
    data: Omit<ICustomer,
        | 'id'
        | 'created_at'
        | 'updated_at'
    >
}

type UpdateResponse = ICustomer

// Find many
type FindManyParams = {}

type FindManyResponse = ICustomer[]

interface CustomerRepository {
    create(params: CreateParams): Promise<CreateResponse>
    findUnique(params: FindUniqueParams): Promise<FindUniqueResponse>
    delete(params: DeleteParams): Promise<ICustomer>
    update(params: UpdateParams): Promise<UpdateResponse>
    findMany(params: FindManyParams): Promise<FindManyResponse>
}

export {
    CustomerRepository,
    CreateParams,
    CreateResponse,
    FindUniqueParams,
    FindUniqueResponse,
    DeleteParams,
    UpdateParams,
    UpdateResponse,
    FindManyParams,
    FindManyResponse
}