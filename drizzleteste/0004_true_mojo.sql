ALTER TABLE "address" ALTER COLUMN "id" SET DEFAULT 'uuid_generate_v4()';--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "customer_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT 'uuid_generate_v4()';