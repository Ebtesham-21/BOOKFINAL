import Link from "next/link";

function Header() {
    return (
        <header className="bg-gray-100 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-2xl font-bold"> 99 Books </h1>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <Link href='/login'>
                        <li>
                            Login
                        </li>
                        </Link>
                        <Link href='/register'>
                        <li>
                            Register
                        </li>
                        </Link>
                        <Link href='/admin'>
                        <li>
                            Admin
                        </li>
                        </Link>
                    </ul>
                    
                </nav>

            </div>
        </header>
    )
}

export default Header