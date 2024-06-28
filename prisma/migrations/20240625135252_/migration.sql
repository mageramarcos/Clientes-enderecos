/*
  Warnings:

  - Added the required column `address` to the `customer_address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `customer_address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `customer_address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `customer_address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `customer_address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer_address" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "addressComplement" TEXT,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL;
