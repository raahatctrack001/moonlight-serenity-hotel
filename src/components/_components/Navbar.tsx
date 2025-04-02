"use client"
import {useAuth, UserButton } from '@clerk/nextjs'
import React from 'react'

import { useRouter } from 'next/navigation';
import GlobalLoader from './GlobalLoader';
import Searchbar from './Searchbar';
import { Theme } from './Theme';
import { Navoptions } from './Navoptions';
import { Button } from '../ui/button';

export default function Navbar(){
    const { isLoaded, userId } = useAuth();
    const router = useRouter();

    if(!isLoaded)
        return <GlobalLoader isLoading={isLoaded} />
    
    return <div className='w-full flex justify-between items-center px-5 py-1'>
        <h3 onClick={()=>router.push("/")}> Moonlight Serenity Hotel </h3>
        <Searchbar />
        <div className='flex justify-between items-center gap-3'>
            <Theme />
            <Navoptions />
            {userId ? <UserButton /> : <Button onClick={()=>router.push("/sign-in")}> SignIn </Button>}
        </div>
    </div>
}