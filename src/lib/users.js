import bcrypt from "bcryptjs";

const users = new Map();

const seedEmail = "admin@gmail.com";
const seedPassword = "123456";

users.set(seedEmail, {
  id: "1",
  email: seedEmail,
  name: "Admin User",
  passwordHash: bcrypt.hashSync(seedPassword, 10),
  role: "admin",
});

export function findUserByEmail(email) {
  if (!email) {
    return null;
  }

  return users.get(email.toLowerCase()) ?? null;
}

export async function createUser({ email, password, name }) {
  const normalizedEmail = email.toLowerCase();

  if (findUserByEmail(normalizedEmail)) {
    throw new Error("USER_EXISTS");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const id = crypto.randomUUID();

  const user = {
    id,
    email: normalizedEmail,
    name: name || normalizedEmail.split("@")[0],
    passwordHash,
    role: "customer",
  };

  users.set(normalizedEmail, user);

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
}

export async function validateUserCredentials({ email, password }) {
  const user = findUserByEmail(email);

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
}
