import { pgTable, text, timestamp, boolean, serial, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { Address } from './address'
import { createId } from '@paralleldrive/cuid2';



export const Customer = pgTable('customers', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    name: text('name').notNull(),
    email: text('email').notNull(),
    status: boolean('status').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()).notNull()
})

export const customerRelations = relations(Customer, ({ many }) => ({
    address: many(Address)
}))
