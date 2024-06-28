import prisma from "../../../shared/client/prisma";
import { IAddress } from "src/application/entities/IAddress";
import { CreateParams, CreateResponse, AddressRepository, DeleteParams, FindManyParams, FindManyResponse, FindUniqueParams, FindUniqueResponse, UpdateParams, UpdateResponse } from "../AddressRepository";

class PrismaAddressRepository implements AddressRepository {
    async create({ data }: CreateParams): Promise<CreateResponse> {

        const { street, complement, city, state, country, zipCode, customerId } = data

        return await prisma.address.create({
            data: {
                street,
                complement,
                city,
                state,
                country,
                zipCode,
                customerId
            }
        })
    }

    async findUnique({ id }: FindUniqueParams): Promise<FindUniqueResponse> {

        return await prisma.address.findUnique({
            where: {
                id
            }
        });
    }

    async delete({ id }: DeleteParams): Promise<IAddress> {
        return await prisma.address.delete({
            where: { id }
        })
    }

    async update({ id, data }: UpdateParams): Promise<UpdateResponse> {
        const { street, complement, city, state, country, zipCode, customerId } = data
        return await prisma.address.update({
            where: { id },
            data: {
                street,
                complement,
                city,
                state,
                country,
                zipCode,
                customerId
            }
        })
    }

    async findMany({ }: FindManyParams): Promise<FindManyResponse> {

        return await prisma.address.findMany({})
    }
}

export {
    PrismaAddressRepository
}