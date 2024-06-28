import { AddressRepository } from 'src/application/repository/AddressRepository'
import { Response, normalizationResponse } from '../../../../shared/utils/response'
import { IUseCase } from 'src/shared/utils/use_cases'

type DeleteAddressRequest = {
    id: string
}
type T = DeleteAddressRequest
type DeleteAddressResponse = {
    message: string
}
type K = DeleteAddressResponse

class DeleteAddress implements IUseCase<T, K> {
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

            await this.addressRepository.delete({
                id
            }
            )

            return normalizationResponse.ok({ message: "Successfully Deleted" })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }
}

export {
    DeleteAddress
}
