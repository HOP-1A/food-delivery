/*
  Warnings:

  - You are about to drop the column `orderId` on the `Users` table. All the data in the column will be lost.
  - Added the required column `ordersId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_orderId_fkey";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "orderId",
ADD COLUMN     "ordersId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
