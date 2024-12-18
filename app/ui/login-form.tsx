"use client";

import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/ui/button";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";


export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="flex text-myText">
      <div className="flex flex-col flex-1 rounded-lg bg-mySecondary px-6 pb-4 pt-8 z-20">
        <h1
          className={`${lusitana.className} mb-8 text-2xl flex justify-center`}
        >
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <div className="relative">
              <input
                className="bg-myAccent peer block w-full rounded-md border border-gray-900 py-[9px] pl-10 text-sm outline-2 placeholder:text-myText focus:outline-none focus:ring-2 focus:ring-gray-900"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-myText peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className="bg-myAccent peer block w-full rounded-md border border-gray-900 py-[9px] pl-10 text-sm outline-2 placeholder:text-myText focus:outline-none focus:ring-2 focus:ring-gray-900"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-myText peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <Button
          className="mt-4 flex justify-end items-center ml-auto"
          aria-disabled={isPending}
        >
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
