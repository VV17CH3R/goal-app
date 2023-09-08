"use client"

import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='sticky top-0 w-full flex items-center justify-center  text-white bg-black/50'>
            <Dialog>
                <DialogTrigger>
                        <RxHamburgerMenu onClick={() => { }} className='cursor-pointer text-white hover:text-white/70' size={45} />
                </DialogTrigger>
                <DialogContent className="text-center p-6">

                        <div className='pt-4 flex flex-col'>
                            <Link href="/description"><button className='mx-2 transition duration-300 hover:bg-black/30 hover:text-white/90 bg-black/70 text-white my-1 w-[60%] p-2 border-2 '>Мои цели</button></Link>
                            <Link href="/new-goal-dialog"><button className='mx-2 transition duration-300 hover:bg-black/30 hover:text-white/90 bg-black/70 text-white my-1 w-[60%] p-2 border-2 '>Создать цель</button></Link>
                            <Link href="/description"><button className='mx-2 transition duration-300 hover:bg-black/30 hover:text-white/90 bg-black/70 text-white my-1 w-[60%] p-2 border-2 '>Чекпоинты</button></Link>
                            <Link href="/description"><button className='mx-2 transition duration-300 hover:bg-black/30 hover:text-white/90 bg-black/70 text-white my-1 w-[60%] p-2 border-2 '>Советы</button></Link>
                        </div>
                </DialogContent>
            </Dialog>

            <div className='text-xl ml-[45%] text-center cursor-pointer hover:text-white/70'>
                <span className='text-4xl'>Goal App</span><br />
                WitcherProd
            </div>
        </div>
    )
}

export default NavBar