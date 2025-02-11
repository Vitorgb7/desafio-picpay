import { PrismaClient, UserType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'João Silva',
        email: 'joao@email.com',
        cpf: '12345678900',
        password: 'hashed_password',
        type: UserType.COMMON, 
      },
      {
        name: 'Loja Exemplo',
        email: 'loja@email.com',
        cpf: '09876543211',
        password: 'hashed_password',
        type: UserType.MERCHANT,
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
