import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-light-cream flex flex-row place-content-evenly items-center w-100% py-10 py-7.25">
            <h1 className="font-Montserrat text-3xl font-medium mr-12.5 text-navy-blue"><a href="./index.js">BurnRate</a></h1>
        </nav>
    )
}