import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest, FastifyReply
} from "fastify"


import { createCustomer, deleteCustomer, getUniqueCustomer, listCustomer, updateCustomer } from "src/application/use-case/customers"
import { applyUseCase } from "../middlewares/apply_use_case"
import { createAddress, deleteAddress, getUniqueAddress, listAddress, updateAddress } from "src/application/use-case/customers/customersAddress"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {


    // Customers

    fastify.post('/customers', applyUseCase(createCustomer))

    fastify.get('/customers', applyUseCase(listCustomer))

    fastify.delete('/customers/:id', applyUseCase(deleteCustomer))

    fastify.get('/customers/:id', applyUseCase(getUniqueCustomer))

    fastify.patch('/customers/:id', applyUseCase(updateCustomer, { separate_body: true, param_key: 'id' }))


    // Customers Address


    fastify.post('/customers/address', applyUseCase(createAddress))

    fastify.delete('/customers/address/:id', applyUseCase(deleteAddress))

    fastify.get('/customers/address/:id', applyUseCase(getUniqueAddress))

    fastify.get('/customers/address', applyUseCase(listAddress))

    fastify.patch('/customers/address/:id', applyUseCase(updateAddress, { separate_body: true, param_key: 'id' }))

}