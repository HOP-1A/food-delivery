/*
  Warnings:

  - You are about to drop the column `ordersId` on the `Users` table. All the data in the column will be lost.
  - Added the required column `usersId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_ordersId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "usersId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "ordersId",
ADD COLUMN     "orderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
