'use client'
import AdminLayout from "@/components/AdminLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AdminPage() {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            router.push('/login')
        }
    }, []);

    return (
        <AdminLayout>
            <h1>Welcome to the admin panel</h1>
        </AdminLayout>
    )
}

export default AdminPage;