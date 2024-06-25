import { ICustomer } from "../../entities/ICustomer"
import { CustomerRepository } from "../../repository/CustomerRepository"
import { Response, normalizationResponse } from '../../../shared/utils/response'
import { IUseCase } from '../../../shared/utils/use_cases'

type GetUniqueCustomerRequest = {
    id: string
}
type T = GetUniqueCustomerRequest
type GetUniqueCustomerResponse = {
    customer: ICustomer
}
type K = GetUniqueCustomerResponse

class GetUniqueCustomer implements IUseCase<T, K> {
    constructor(private customerRepository: CustomerRepository) { }

    async execute({ id }: T): Promise<Response<K>> {
        try {

            if (!id) {
                return normalizationResponse.notFound('Id')

            }

            const findCustomer = await this.customerRepository.findUnique({
                where: {
                    id
                }
            })

            if (!findCustomer) {
                return normalizationResponse.notFound('Customer')
            }


            return normalizationResponse.ok({ customer: findCustomer })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }

}

export {
    GetUniqueCustomer
}