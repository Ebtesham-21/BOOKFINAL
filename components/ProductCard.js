import Image from "next/image";

function ProductCard({product}) {
    const {title, price, description, imageUrl} = product;
    return (
        <div className="bg-white shadow rounded-md p-4 flex flex-col">
            {imageUrl && 
            <div className="w-full h-48 relative mb-2">
                <Image
                src={imageUrl}
                fill
                alt={title}
                className="object-cover rounded-md"
                />

            </div>
            }

            <h2 className="text-lg font-bold mb-1">{title}</h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-green-600 font-semibold">${price}</p>
        </div>
    )
}

export default ProductCard;