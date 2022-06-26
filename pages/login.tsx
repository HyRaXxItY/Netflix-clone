import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signIn, signUp } from '../utils/firebase'

interface Inputs {
    email: string
    password: string
}

const Login = () => {
    const [login, setLogin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        if (login) {
            // await signIn({email, password})
        }
        else {
            // await signUp()
        }
    }

    return (
        <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
            <Head>
                <title> Netflix - Login/SignUp</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Image src={'https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/eceef24d-4920-430f-988b-d2f48f8ad060/IN-en-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg'}
                layout='fill' className='-z-10 !hidden opacity-60 sm:!inline'
                objectFit='cover' />
            <img
                src="https://rb.gy/ulxxee"
                className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                width={150}
                height={150}
            />
            <form onSubmit={handleSubmit(onSubmit)} className='relative mt-24 space-y-8 rounded  bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
                <h1 className='text-4xl font-semibold' >Sign In</h1>
                <div className='space-y-4 '>
                    <label className='inline-block w-full'>
                        <input type="email" placeholder='email' className='input' {...register('email', { required: true })} />
                        {errors.email && <span className='text-2 font-light text-orange-600/90' >This field is required</span>}
                    </label>
                    <label className='inline-block w-full'>
                        <input type="password" placeholder='password' className='input' {...register('password', { required: true })} />
                        {errors.password && <p className='text-2 font-light text-orange-600/90' >password must be contain 6 to 50 character</p>}
                    </label>
                </div>
                <button className='btn w-full rounded bg-[#e50914] py-3 font-semibold' onClick={() => setLogin(true)}>Sign In</button>
                <div className='text-[gray]'>
                    New to Netflix ? {'   '}
                    <button type='submit' className='text-white hover:underline' onClick={() => setLogin(false)}>Sign Up Now</button>
                </div>
            </form>
        </div>
    )
}

export default Login