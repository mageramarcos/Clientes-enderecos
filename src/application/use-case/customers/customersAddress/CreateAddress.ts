import { IAddress } from 'src/application/entities/IAddress'
import { AddressRepository } from 'src/application/repository/AddressRepository'
import { IUseCase } from '../../../../shared/utils/use_cases'
import { Response, normalizationResponse } from '../../../../shared/utils/response'
import { CustomerRepository } from 'src/application/repository/CustomerRepository'

type CreateAddressRequest = {
    street: string
    complement: string | null
    city: string
    state: string
    country: string
    zipCode: string
    customerId: string

}
type T = CreateAddressRequest
type CreateAddressResponse = {
    address: IAddress
}
type K = CreateAddressResponse

class CreateAddress implements IUseCase<T, K> {
    constructor(
        private addressRepository: AddressRepository,
        private customerRepository: CustomerRepository
    ) { }

    async execute({

        street,
        complement,
        city,
        state,
        country,
        zipCode,
        customerId

    }: T): Promise<Response<K>> {
        try {

            if (
                !street ||
                !city ||
                !state ||
                !zipCode ||
                !country ||
                !customerId
            ) {
                return normalizationResponse.notFound('Address settings')
            }


            const findCustomer = await this.customerRepository.findUnique({ id: customerId })

            if (!findCustomer) {
                return normalizationResponse.notFound('Customer');
            }

            const createAddress = await this.addressRepository.create({
                data: {
                    street,
                    complement,
                    city,
                    state,
                    zipCode,
                    country,
                    customerId
                }
            })

            return normalizationResponse.ok({ address: createAddress })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }
}

export {
    CreateAddress
}