import { PrismaAddressRepository } from "src/application/repository/implementations/PrismaAddressRepository";
import { UseCaseHandler } from "src/shared/utils/use_cases";
import { CreateAddress } from "./CreateAddress";
import { DeleteAddress } from "./DeleteAddress";
import { GetUniqueAddress } from "./GetUniqueAddress";
import { ListAddress } from "./ListAddress";
import { UpdateAddress } from "./UpdateAddress";
import { PrismaCustomerRepository } from "src/application/repository/implementations/PrismaCustomerRepository";
import { DrizzleAddressesRepository } from "src/application/repository/implementations/DrizzleAddressRepository";

const createAddress = () => {
    const customerAddressRepository = new DrizzleAddressesRepository()
    const customerRepository = new PrismaCustomerRepository()
    return new UseCaseHandler(new CreateAddress(customerAddressRepository, customerRepository))
}

const deleteAddress = () => {
    const customerAddressRepository = new DrizzleAddressesRepository()
    return new UseCaseHandler(new DeleteAddress(customerAddressRepository))
}

const getUniqueAddress = () => {
    const customerAddressRepository = new DrizzleAddressesRepository()
    return new UseCaseHandler(new GetUniqueAddress(customerAddressRepository))
}

const listAddress = () => {
    const customerAddressRepository = new DrizzleAddressesRepository()
    return new UseCaseHandler(new ListAddress(customerAddressRepository))
}

const updateAddress = () => {
    const customerAddressRepository = new DrizzleAddressesRepository()
    return new UseCaseHandler(new UpdateAddress(customerAddressRepository))
}



export {
    createAddress,
    deleteAddress,
    getUniqueAddress,
    listAddress,
    updateAddress
}