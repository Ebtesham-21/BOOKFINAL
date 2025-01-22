import React from "react";
import Link from "next/link";

const AdminLayout = ({ children}) => {
    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-gray-100 p-4">
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <Link href='/admin/products' className="block p-2 rounded hover:bg-gray-200">
                                Products
                            </Link>

                        </li>
                        <li>
                            <Link href='/admin/orders' className="block p-2 rounded hover:bg-gray-200">
                                Orders
                            </Link>

                        </li>
                    </ul>
                    
                </nav>

            </aside>
            <main className="flex-1 p-4 overflow-y-auto">
                {children}

            </main>

        </div>
    )
}

export default AdminLayout;