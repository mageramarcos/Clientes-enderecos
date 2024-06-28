import { IAddress } from "src/application/entities/IAddress"
import { AddressRepository } from "src/application/repository/AddressRepository"
import { Response, normalizationResponse } from '../../../../shared/utils/response'
import { IUseCase } from '../../../../shared/utils/use_cases'

type UpdateAddressRequest = {
    id: string
    data: Omit<IAddress,
        | 'id'
        | 'created_at'
        | 'updated_at'
    >
}
type T = UpdateAddressRequest
type UpdateAddressResponse = {
    address: IAddress
}
type K = UpdateAddressResponse

class UpdateAddress implements IUseCase<T, K> {
    constructor(private addressRepository: AddressRepository) { }

    async execute({ id, data, }: T): Promise<Response<K>> {
        try {
            if (!id) {
                return normalizationResponse.notFound('Id')
            }

            const findCustomer = await this.addressRepository.findUnique({
                id
            })

            if (!findCustomer) {
                return normalizationResponse.notFound('Customer Address')
            }

            const updateAddress = await this.addressRepository.update({
                id,
                data
            })

            return normalizationResponse.ok({ address: updateAddress })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }
}

export {
    UpdateAddress
}