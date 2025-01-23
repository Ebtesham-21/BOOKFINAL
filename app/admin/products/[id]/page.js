'use client';

import AdminLayout from "@/components/AdminLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AdminEditProductPage = ({params}) => {
    const {id} = params;
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        title:'',
        description:'',
        price:'',
        imageUrl: '',
        stock:''
    });
    const router = useRouter();
}