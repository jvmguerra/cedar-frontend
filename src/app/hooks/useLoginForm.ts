import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useLoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      if(data?.email === 'user1@cedar.com' && data?.password === 'password123') { 
        router.push(`/welcome`);
      }
      else {
        throw new Error('Invalid user')
      }
    } catch(error) {
      setError('email', { type: 'manual', message: 'Email is incorrect' });
      setError('password', { type: 'manual', message: 'Password is incorrect' });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isLoading,
    setError,
    onSubmit
  };
}