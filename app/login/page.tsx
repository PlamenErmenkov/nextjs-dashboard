import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';

export default function LoginPage() {
const randomQuery = `?random=${Date.now()}&nature`;

  return (
    <main className="flex items-center justify-center min-h-screen py-6 md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-4 md:-mt-32 bg-white rounded-lg shadow-lg">
        <Image
          src={`https://picsum.photos/600/300${randomQuery}`}
          width={600}
          height={300}
          alt="Login picture"
          priority={true}
          className="hidden md:flex rounded-t-lg object-cover w-full h-[200px]"
        />
        <div className="p-4">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
