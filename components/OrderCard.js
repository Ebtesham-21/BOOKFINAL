function OrderCard({order}) {
    return(
        <div className="bg-white shadow rounded-md p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">
                Order ID: { order._id}

            </h2>
            <p className="text-gray-700 mb-1">
                User: {order.user.username}
            </p>
            <ul
            className="mb-2"
            >
                {order.products.map(item => (
                    <li
                    key={item.product._id}
                    >
                        <p className="text-gray-700">
                            Product: {item.product.title}

                        </p>
                        <p className="text-gray-700">
                            Quantity: {item.quantity}

                        </p>

                    </li>
                ))}
            </ul>

            <p className="text-gray-700 mb-1">Total Amount: ${order.totalAmount}</p>
            <p className="text-gray-700 mb-1">Shipping Address: {JSON.stringify(order.shippingAddress)}</p>
            <p className="text-gray-700 mb-1">Order Date: {new Date(order.orderDate)}</p>
            <p className="text-gray-700 mb-1">Status: ${order.status}</p>
        </div>
    )
}

export default OrderCard;