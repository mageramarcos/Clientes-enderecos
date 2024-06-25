import { ICustomer } from "../../entities/ICustomer"
import { CustomerRepository } from "../../repository/CustomerRepository"
import { Response, normalizationResponse } from '../../../shared/utils/response'
import { IUseCase } from '../../../shared/utils/use_cases'

type UpdateCustomerRequest = {
    id: string
    data: Omit<ICustomer,
        | 'id'
        | 'created_at'
        | 'updated_at'
    >
}
type T = UpdateCustomerRequest
type UpdateCustomerResponse = {
    customer: ICustomer
}
type K = UpdateCustomerResponse

class UpdateCustomer implements IUseCase<T, K> {
    constructor(private customerRepository: CustomerRepository) { }

    async execute({ id, data, }: T): Promise<Response<K>> {
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

            const updateCustomer = await this.customerRepository.update({
                id,
                data
            })

            return normalizationResponse.ok({ customer: updateCustomer })
        } catch (error) {
            return normalizationResponse.serverError(error.message)
        }
    }
}

export {
    UpdateCustomer
}