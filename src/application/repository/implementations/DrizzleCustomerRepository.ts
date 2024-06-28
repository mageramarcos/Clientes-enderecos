import { drizzleClient } from 'src/db/drizzle'
import { Customer } from 'src/db/schema'
import { ICustomer } from "../../entities/ICustomer";
import { CreateParams, CreateResponse, CustomerRepository, DeleteParams, FindManyParams, FindManyResponse, FindUniqueParams, FindUniqueResponse, UpdateParams, UpdateResponse } from "../CustomerRepository";
import { eq } from 'drizzle-orm'

class DrizzleCustomerRepository implements CustomerRepository {

    async findUnique({ id }: FindUniqueParams): Promise<FindUniqueResponse> {
        return await drizzleClient
            .select()
            .from(Customer)
            .where(eq(Customer.id, id))
            .then(([customers]) => customers)
    }

    async create({ data }: CreateParams): Promise<CreateResponse> {

        const { name, email } = data

        return await drizzleClient
            .insert(Customer)
            .values({

                name,
                email,
                status: true
            })
            .returning()
            .then(([customers]) => customers)
    }

    async findMany({ }: FindManyParams): Promise<FindManyResponse> {

        return await drizzleClient
            .select()
            .from(Customer)


    }


    async delete({ id }: DeleteParams): Promise<ICustomer> {

        return await drizzleClient
            .delete(Customer)
            .where(eq(Customer.id, id))
            .returning()
            .then(([customers]) => customers)

    }



    async update({ id, data }: UpdateParams): Promise<UpdateResponse> {
        return await drizzleClient
            .update(Customer)
            .set({
                ...data
            })
            .where(eq(Customer.id, id))
            .returning()
            .then(([customers]) => customers)
    }
}


export {
    DrizzleCustomerRepository
}