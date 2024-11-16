import Logo from '@/app/ui/logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
const randomQuery = `?random=${Date.now()}`;

  return (
    <main className="flex items-center justify-center min-h-screen py-6 md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-4 md:-mt-32 bg-mySecondary rounded-lg shadow-lg">
        <Image
          src={`https://picsum.photos/600/300${randomQuery}`}
          width={600}
          height={300}
          alt="Login picture"
          priority={true}
          unoptimized={true}
          className="hidden md:flex rounded-t-lg object-cover w-full h-[200px]"
        />
        <div className="p-4">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
