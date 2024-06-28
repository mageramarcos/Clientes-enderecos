import { IAddress } from 'src/application/entities/IAddress'
import { AddressRepository } from 'src/application/repository/AddressRepository'
import { IUseCase } from '../../../../shared/utils/use_cases'
import { Response, normalizationResponse } from '../../../../shared/utils/response'

type ListAddressRequest = {}
type T = ListAddressRequest
type ListAddressResponse = {
    address: IAddress[]
}
type K = ListAddressResponse

class ListAddress implements IUseCase<T, K> {
    constructor(private addressRepository: AddressRepository) { }

    async execute({ }: T): Promise<Response<K>> {
        try {

            const listAddress = await this.addressRepository.findMany({})

            return normalizationResponse.ok({ address: listAddress })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }
}

export {
    ListAddress
}