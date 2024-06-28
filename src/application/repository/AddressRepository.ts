import { IAddress } from "../entities/IAddress"

// Create
type CreateParams = {
    data: Omit<IAddress,
        | 'id'
        | 'customer'
        | 'created_at'
        | 'updated_at'

    >
}

type CreateResponse = IAddress

// Find unique
type FindUniqueParams = {
    id: string
    select?: IAddress

}

type FindUniqueResponse = IAddress | null

// Delete
type DeleteParams = {
    id: string
}

// Update
type UpdateParams = {
    id: string
    data: Omit<IAddress,
        | 'id'
        | 'customer'
        | 'created_at'
        | 'updated_at'
    >
}

type UpdateResponse = IAddress

// Find many
type FindManyParams = {}

type FindManyResponse = IAddress[]

interface AddressRepository {
    create(params: CreateParams): Promise<CreateResponse>
    findUnique(params: FindUniqueParams): Promise<FindUniqueResponse>
    delete(params: DeleteParams): Promise<IAddress>
    update(params: UpdateParams): Promise<UpdateResponse>
    findMany(params: FindManyParams): Promise<FindManyResponse>
}

export {
    AddressRepository,
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