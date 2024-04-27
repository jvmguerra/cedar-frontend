import React from 'react';
import Image from "next/image";
import { Controller } from 'react-hook-form';
import { Button } from "@/app/components/Button/Button";
import { Input } from "@/app/components/Input/Input";
import useLoginForm from "@/app/hooks/useLoginForm";

export default function Home() {
  const { control, handleSubmit, onSubmit, errors, isLoading } = useLoginForm();

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <form className="flex flex-col items-center min-w-80" onSubmit={handleSubmit(onSubmit)}>
        <Image
          src="/full-logo.svg"
          alt="Cedar Logo"
          width={126}
          height={32}
        />
        <p className="text-cedar-blue text-2xl font-bold leading-7 font-arial mt-7 mb-6">Sign in to your account</p>
        <Controller
          name="email"
          control={control}
          rules={{ required: 'Email is required', pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: 'Email invalid'}}}
          render={({ field }) => (
            <Input
              label="Email address"
              id="email"
              type="text"
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field }) => (
            <Input
            label="Password"
            id="password"
            type="password"
            value={field.value}
            onChange={field.onChange}
            errorMessage={errors.password?.message}/>
          )}
        />
        <Button text={isLoading ? 'Signing in...' : 'Sign in'} type="submit" disabled={isLoading}/>
      </form>
    </main>
  );
}
