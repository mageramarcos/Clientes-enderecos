import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest, FastifyReply
} from "fastify"


import { createCustomer, deleteCustomer, getUniqueCustomer, listCustomer, updateCustomer } from "src/application/use-case/customers"
import { applyUseCase } from "../middlewares/apply_use_case"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {



    fastify.post('/customers', applyUseCase(createCustomer))

    fastify.get('/customers', applyUseCase(listCustomer))

    fastify.delete('/customers/:id', applyUseCase(deleteCustomer))

    fastify.get('/customers/:id', applyUseCase(getUniqueCustomer))

    fastify.patch('/customers/:id', applyUseCase(updateCustomer, { separate_body: true, param_key: 'id' }))
}