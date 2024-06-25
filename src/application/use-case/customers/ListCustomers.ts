import { ICustomer } from '../../entities/ICustomer'
import { CustomerRepository } from '../../repository/CustomerRepository'
import { IUseCase } from '../../../shared/utils/use_cases'
import { Response, normalizationResponse } from '../../../shared/utils/response'

type ListCustomersRequest = {}
type T = ListCustomersRequest
type ListCustomersResponse = {
    customer: ICustomer[]
}
type K = ListCustomersResponse

class ListCustomers implements IUseCase<T, K> {
    constructor(private customerRepository: CustomerRepository) { }

    async execute({ }: T): Promise<Response<K>> {
        try {

            const listCustomers = await this.customerRepository.findMany({})

            return normalizationResponse.ok({ customer: listCustomers })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }
}

export {
    ListCustomers
}