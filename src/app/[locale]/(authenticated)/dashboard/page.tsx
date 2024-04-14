import { SignInButton, SignOutButton } from '@clerk/nextjs';

export default async function Dashboard() {
  return (
    <div>
      <SignInButton />
      <SignOutButton />
    </div>
  );
}
