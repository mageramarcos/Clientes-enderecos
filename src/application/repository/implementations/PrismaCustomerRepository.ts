import prisma from "../../../shared/client/prisma";
import { ICustomer } from "../../entities/ICustomer";
import { CreateParams, CreateResponse, CustomerRepository, DeleteParams, FindManyParams, FindManyResponse, FindUniqueParams, FindUniqueResponse, UpdateParams, UpdateResponse } from "../CustomerRepository";

class PrismaCustomerRepository implements CustomerRepository {
    async create({ data }: CreateParams): Promise<CreateResponse> {

        const { name, email } = data

        return await prisma.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })
    }

    async findUnique({ id }: FindUniqueParams): Promise<FindUniqueResponse> {

        return await prisma.customer.findUnique({
            where: {
                id
            },
            include: {
                address: true
            }
        });
    }

    async delete({ id }: DeleteParams): Promise<ICustomer> {
        return await prisma.customer.delete({
            where: { id }
        })
    }

    async update({ id, data }: UpdateParams): Promise<UpdateResponse> {
        const { email, name } = data
        return await prisma.customer.update({
            where: { id },
            data: { email, name }
        })
    }

    async findMany({ }: FindManyParams): Promise<FindManyResponse> {

        return await prisma.customer.findMany({})
    }
}

export {
    PrismaCustomerRepository
}