/*
  Warnings:

  - Added the required column `orderAddress` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderAddress` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "orderAddress" TEXT NOT NULL;
