/*
  Warnings:

  - You are about to drop the column `addressComplement` on the `customer_address` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `customer_address` table. All the data in the column will be lost.
  - Added the required column `zip_code` to the `customer_address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer_address" DROP COLUMN "addressComplement",
DROP COLUMN "zipCode",
ADD COLUMN     "address_complement" TEXT,
ADD COLUMN     "zip_code" TEXT NOT NULL;
