import { PrismaCustomerRepository } from "src/application/repository/implementations/PrismaCustomerRepository"
import { GetUniqueCustomer } from "./GetUniqueCustomer"
import { UseCaseHandler } from "src/shared/utils/use_cases"
import { CreateCustomer } from "./CreateCustomer"
import { DeleteCustomer } from "./DeleteCustomer"
import { ListCustomers } from "./ListCustomers"
import { UpdateCustomer } from "./UpdateCustomer"

const getUniqueCustomer = () => {
    const customerRepository = new PrismaCustomerRepository()
    return new UseCaseHandler(new GetUniqueCustomer(customerRepository))
}

const createCustomer = () => {
    const customerRepository = new PrismaCustomerRepository()
    return new UseCaseHandler(new CreateCustomer(customerRepository))
}

const deleteCustomer = () => {
    const customerRepository = new PrismaCustomerRepository()
    return new UseCaseHandler(new DeleteCustomer(customerRepository))
}

const listCustomer = () => {
    const customerRepository = new PrismaCustomerRepository()
    return new UseCaseHandler(new ListCustomers(customerRepository))
}

const updateCustomer = () => {
    const updateRepository = new PrismaCustomerRepository()
    return new UseCaseHandler(new UpdateCustomer(updateRepository))
}

export {
    getUniqueCustomer,
    createCustomer,
    deleteCustomer,
    listCustomer,
    updateCustomer
}