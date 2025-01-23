'use client';
import AdminLayout from "@/components/AdminLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function AdminProductsPage() {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title:'',
        description: '',
        price: '',
        imageUrl: '',
        stock: ''
    });


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, []);


    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/products', formData);
            setFormData({title: '', description: '', price: '', imageUrl: '', stock: ''})
            setIsModalOpen(false)
            const response = await axios.get('/api/products');
            setProducts(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({title: '', description: '', price: '', imageUrl: '', stock: ''});
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Products</h1>
                    <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add New Product</button>

            </div>
            <div
            className="overflow-x-auto"
            >
                <table className="min-w-full bg-white shadow-md rounded">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4">Title</th>
                            <th className="py-2 px-4">Price</th>
                            <th className="py-2 px-4">Stock</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
        
                    </thead>
                    <tbody>
                        {products.map((product) => (

                            <tr key={product._id}>
                                <td className="py-2 px-4">{product.title}</td>
                                <td className="py-2 px-4">${product.price}</td>
                                <td className="py-2 px-4">{product.stock}</td>
                                <td className="py-2 px-4">
                                    <Link href={`/admin/products/${product._id}`} className="text-blue-500 hover:text-blue-600 mr-2">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

            {isModalOpen && (
                <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
                >
                    <div className="bg-white p-8 rounded">
                        <h2 className="text-2xl font-semibold mb-4">
                            Add New Product
                        </h2>
                        <form onSubmit={handleAddProduct} className="space-y-4" >
                            <div>
                                <label htmlFor="title" className="block mb-1 font-medium">Title</label>
                                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-1 font-medium"> Description </label>
                                <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required/>
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-1 font-medium ">Price</label>
                                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" required/>

                            </div>
                            <div>
                            <label htmlFor='imageUrl' className="block mb-1 font-medium">Image URL</label>
                          <input type='text' id='imageUrl' name='imageUrl' value={formData.imageUrl} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>
                           <div>
                           <label htmlFor='stock' className="block mb-1 font-medium">Stock</label>
                            <input type='number' id='stock' name='stock' value={formData.stock} onChange={handleChange} className="w-full p-2 border rounded" required/>
                         </div>
                           <div className='flex justify-end space-x-2'>
                                 <button type='button' onClick={closeModal} className='bg-gray-300 px-4 py-2 rounded hover:bg-gray-400'>Cancel</button>
                              <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Product</button>
                           </div>

                        </form>
                    </div>

                </div>
            )}
        </AdminLayout>
    )
}

export default AdminProductsPage;