'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-inut';
import ngaIconH from '../../../../public/logo-h.svg';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const LoginPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    // links zod with react hook form
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    router.push('/dashboard');
  };

  return (
    <>
      <Card className='w-full max-w-xl py-10 px-14'>
        <CardHeader className='flex flex-col justify-center items-center gap-6'>
          <Image src={ngaIconH} alt='NGA healtcare icon' width={200} />
          <CardTitle className='heading-medium font-semibold'>
            Login to your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className='flex flex-col gap-8'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter email address...'
                        type='email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder='Enter password...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Login</Button>
            </form>
          </Form>
        </CardContent>
        <div className='flex gap-2 justify-around items-center max-w-full p-6 pt-0'>
          <Separator />
          <span className='text-secondary-foreground text-2xl font-medium shrink-0 '>
            Or continue with
          </span>
          <Separator />
        </div>
        <CardFooter>
          <Button className='w-full ' asChild variant='secondary'>
            <Link href='/'>
              <FcGoogle />
              Login with Google
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <div className='flex gap-2 justify-center items-center mt-8'>
        <small>Don&lsquo;t have an account?</small>
        <Link href='/sign-up' className='text-xs text-link'>
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
