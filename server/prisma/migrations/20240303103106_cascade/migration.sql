-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_user_id_fkey";

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
