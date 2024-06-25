import { ICustomer } from '../../entities/ICustomer'
import { CustomerRepository } from '../../repository/CustomerRepository'
import { IUseCase } from '../../../shared/utils/use_cases'
import { Response, normalizationResponse } from '../../../shared/utils/response'

type CreateCustomerRequest = {
    name: string
    email: string
}
type T = CreateCustomerRequest
type CreateCustomerResponse = {
    customer: ICustomer
}
type K = CreateCustomerResponse

class CreateCustomer implements IUseCase<T, K> {
    constructor(private customerRepository: CustomerRepository) { }

    async execute({ name, email }: T): Promise<Response<K>> {
        try {

            if (!name || !email) {
                return normalizationResponse.notFound('Customer settings')
            }

            const createCustomer = await this.customerRepository.create({
                data: {
                    name,
                    email,
                    status: true
                }
            })

            return normalizationResponse.ok({ customer: createCustomer })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }
}

export {
    CreateCustomer
}