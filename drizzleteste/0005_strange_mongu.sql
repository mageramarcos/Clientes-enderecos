ALTER TABLE "address" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "id" SET DEFAULT 'cuid()';--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "customer_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT 'cuid()';