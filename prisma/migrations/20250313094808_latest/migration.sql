/*
  Warnings:

  - Added the required column `isMale` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "isMale" BOOLEAN NOT NULL;
