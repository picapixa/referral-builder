import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SAMPLE_USERS: Pick<
  Prisma.ReferralCreateManyInput,
  "given_name" | "surname" | "email"
>[] = [
  {
    given_name: "John",
    surname: "Johnson",
    email: "jh@email121.com",
  },
  {
    given_name: "Matthew",
    surname: "Lombard",
    email: "mat197501@gmail.com",
  },
  {
    given_name: "Joe",
    surname: "Dickson",
    email: "joe@dickson.com",
  },
  {
    given_name: "Scarlet",
    surname: "Johnson",
    email: "scarlet@johnson.com",
  },
  {
    given_name: "Peter",
    surname: "Rhonda",
    email: "peter101@yahoo.com",
  },
];

async function main() {
  const data: Prisma.ReferralCreateManyInput[] = SAMPLE_USERS.map((user) => ({
    ...user,
    phone: faker.phone.number(),
    address_number: faker.location.buildingNumber(),
    address_street: faker.location.street(),
    address_suburb: faker.location.city(),
    address_state: faker.location.state(),
    address_postcode: faker.location.zipCode(),
    address_country: faker.location.country(),
  }));

  await prisma.referral.createMany({
    data,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
