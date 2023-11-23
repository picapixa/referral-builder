-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateTable
CREATE TABLE "referrals" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "given_name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address_number" TEXT NOT NULL,
    "address_street" TEXT NOT NULL,
    "address_suburb" TEXT NOT NULL,
    "address_state" TEXT NOT NULL,
    "address_postcode" TEXT NOT NULL,
    "address_country" TEXT NOT NULL,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "referrals_email_key" ON "referrals"("email");
