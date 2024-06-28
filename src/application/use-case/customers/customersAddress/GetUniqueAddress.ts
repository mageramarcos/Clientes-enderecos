import { IAddress } from "src/application/entities/IAddress"
import { AddressRepository } from "src/application/repository/AddressRepository"
import { Response, normalizationResponse } from '../../../../shared/utils/response'
import { IUseCase } from '../../../../shared/utils/use_cases'

type GetUniqueAddressRequest = {
    id: string
}
type T = GetUniqueAddressRequest
type GetUniqueAddressResponse = {
    address: IAddress
}
type K = GetUniqueAddressResponse

class GetUniqueAddress implements IUseCase<T, K> {
    constructor(private addressRepository: AddressRepository) { }

    async execute({ id }: T): Promise<Response<K>> {
        try {

            if (!id) {
                return normalizationResponse.notFound('Id')

            }

            const findAddress = await this.addressRepository.findUnique({
                id
            })

            if (!findAddress) {
                return normalizationResponse.notFound('Customer Address')
            }


            return normalizationResponse.ok({ address: findAddress })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }

}

export {
    GetUniqueAddress
}