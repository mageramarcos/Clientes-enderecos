import { drizzleClient } from 'src/db/drizzle'
import { Address } from 'src/db/schema'
import { IAddress } from "src/application/entities/IAddress";
import { CreateParams, CreateResponse, AddressRepository, DeleteParams, FindManyParams, FindManyResponse, FindUniqueParams, FindUniqueResponse, UpdateParams, UpdateResponse } from '../AddressRepository'
import { eq } from 'drizzle-orm'

class DrizzleAddressesRepository implements AddressRepository {

	async findUnique({ id }: FindUniqueParams): Promise<FindUniqueResponse> {
		return await drizzleClient
			.select()
			.from(Address)
			.where(eq(Address.id, id))
			.then(([address]) => address)
	}

	async create({ data }: CreateParams): Promise<CreateResponse> {

		const { street, complement, city, state, country, zipCode, customerId } = data

		return await drizzleClient
			.insert(Address)
			.values({

				street,
				complement,
				city,
				state,
				country,
				zipCode,
				customerId,
			})
			.returning()
			.then(([address]) => address)
	}

	async findMany({ }: FindManyParams): Promise<FindManyResponse> {

		return await drizzleClient.query.Address.findMany()

	}


	async delete({ id }: DeleteParams): Promise<IAddress> {

		return await drizzleClient
			.delete(Address)
			.where(eq(Address.id, id))
			.returning()
			.then(([address]) => address)

	}



	async update({ id, data }: UpdateParams): Promise<UpdateResponse> {
		return await drizzleClient
			.update(Address)
			.set({
				...data
			})
			.where(eq(Address.id, id))
			.returning()
			.then(([address]) => address)
	}
}


export {
	DrizzleAddressesRepository
}