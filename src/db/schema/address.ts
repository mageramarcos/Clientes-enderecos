import { pgTable, text, timestamp, boolean, serial, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { Customer } from './customer'
import { createId } from '@paralleldrive/cuid2';



export const Address = pgTable('address', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    street: text('street').notNull(),
    complement: text('complement'),
    city: text('city').notNull(),
    state: text('state').notNull(),
    country: text('country').notNull(),
    zipCode: text('zip_code').notNull(),
    customerId: text('customer_id').references(() => Customer.id, { onDelete: 'cascade', onUpdate: 'cascade' }).unique().notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()).notNull()
})

export const addressRelations = relations(Address, ({ one }) => ({
    customer: one(Customer, {
        fields: [Address.customerId],
        references: [Customer.id]
    })
}))