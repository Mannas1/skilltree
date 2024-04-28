"use client"

import { MountainIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'


const Navbar = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Features
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
                    Pricing
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    About
                </Link>
                {
                    status === 'unauthenticated' && (
                        <Button onClick={() => router.push('/api/auth/signin')}>
                            Login
                        </Button>
                    )
                }
                {
                    status === 'authenticated' && (
                        <Button onClick={() => {signOut()}}>
                            Logout
                        </Button>
                    )
                }

            </nav>
        </header>
    )
}

export default Navbar