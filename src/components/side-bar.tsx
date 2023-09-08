import Link from 'next/link'
import React from 'react'

const SideBar = () => {
    return (
        <div className='w-[180px] pt-4 md:inline max-w-[250px] hidden'>
            <div className='pt-4 flex-col'>
                <Link href="/description"><button className='mx-2 transition duration-300 hover:bg-black/30 hover:text-white/90 bg-black/70 text-white my-1 w-36 p-2 border-2 '>Мои цели</button></Link>
                <Link href="/new-goal-dialog"><button className='mx-2 transition duration-300 hover:bg-black/30 hover:text-white/90 bg-black/70 text-white my-1 w-36 p-2 border-2 '>Создать цель</button></Link>
                <Link href="/description"><button className='mx-2 transition duration-300 hover:bg-black/30 hover:text-white/90 bg-black/70 text-white my-1 w-36 p-2 border-2 '>Чекпоинты</button></Link>
                <Link href="/description"><button className='mx-2 transition duration-300 hover:bg-black/30 hover:text-white/90 bg-black/70 text-white my-1 w-36 p-2 border-2 '>Советы</button></Link>
            </div>
        </div>
    )
}

export default SideBar