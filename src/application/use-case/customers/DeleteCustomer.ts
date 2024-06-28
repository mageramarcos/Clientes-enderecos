import { CustomerRepository } from '../../repository/CustomerRepository'
import { IUseCase } from '../../../shared/utils/use_cases'
import { Response, normalizationResponse } from '../../../shared/utils/response'

type DeleteCustomerRequest = {
    id: string
}
type T = DeleteCustomerRequest
type DeleteCustomerResponse = {
    message: string
}
type K = DeleteCustomerResponse

class DeleteCustomer implements IUseCase<T, K> {
    constructor(private customerRepository: CustomerRepository) { }

    async execute({ id }: T): Promise<Response<K>> {
        try {

            if (!id) {
                return normalizationResponse.notFound('Id')
            }

            const findCustomer = await this.customerRepository.findUnique({

                id
            })

            if (!findCustomer) {
                return normalizationResponse.notFound('Customer')
            }

            await this.customerRepository.delete({
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
    DeleteCustomer
}
