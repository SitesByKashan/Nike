"use client";
import React, { useState } from "react";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

export default function CheckOut() {
    const { cart } = useCart();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        pan: "",
        address: "",
    });
    const [orderId, setOrderId] = useState<string | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleFormSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    
    //     // Check if all form fields are filled
    //     if (
    //         !formData.firstName ||
    //         !formData.lastName ||
    //         !formData.email ||
    //         !formData.phone ||
    //         !formData.pan ||
    //         !formData.address
    //     ) {
    //         toast.error("Please fill in all the required fields.");
    //         return;
    //     }
    
    //     // Check if cart is empty
    //     if (cart.length === 0) {
    //         toast.error("Your cart is empty. Please add items to your cart.");
    //         return;
    //     }
    
    //     // Generate a random order ID
    //     const generatedOrderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
    //     setOrderId(generatedOrderId);
    //     setShowDialog(true);
    
    //     // Save order details in sessionStorage
    //     sessionStorage.setItem(
    //         "orderDetails",
    //         JSON.stringify({ formData, cart, orderId: generatedOrderId })
    //     );
    
    //     // Prepare email content with fallback values
    //     const emailContent = {
    //         firstName: formData.firstName || "N/A",
    //         lastName: formData.lastName || "N/A",
    //         email: formData.email || "N/A",
    //         phone: formData.phone || "N/A",
    //         pan: formData.pan || "N/A",
    //         address: formData.address || "N/A",
    //         orderId: generatedOrderId || "N/A",
    //         cart: cart.map(item => `${item.name} (Qty: ${item.quantity})`).join(", ") || "No items in cart",
    //     };
        
    
    //     // Log emailContent for debugging
    //     console.log("Email Content:", emailContent);
    
    
    //     // Send email using EmailJS
    //     emailjs
    //         .send(
    //             process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
    //             process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
    //             emailContent,
    //             process.env.NEXT_PUBLIC_YOUR_USER_ID!
    //         )
    //         .then((response) => {
    //             console.log("Email sent successfully:", response);
    //             toast.success("Order confirmation sent to your email!");
    //         })
    //         .catch((error) => {
    //             console.error("Email send error:", error);
    //             toast.error("Failed to send confirmation email.");
    //         });
    // };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // Check if all form fields are filled
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.phone ||
            !formData.pan ||
            !formData.address
        ) {
            toast.error("Please fill in all the required fields.");
            return;
        }
    
        // Check if cart is empty
        if (cart.length === 0) {
            toast.error("Your cart is empty. Please add items to your cart.");
            return;
        }
    
        // Generate a random order ID
        const generatedOrderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
        setOrderId(generatedOrderId);
        setShowDialog(true);
    
        // Calculate total amount
        const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    
        // Prepare the order details
        const orderDetails = {
            orderId: generatedOrderId,
            customer: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                pan: formData.pan,
                address: formData.address,
            },
            items: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
            })),
            totalAmount: totalAmount,
        };
    
        try {
            // Migrate to Sanity
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderDetails), // Send the full order details
            });
    
            const data = await response.json();
            toast.success("Order successfully saved in Sanity!");
        } catch (error) {
            console.error("Sanity migration error:", error);
            toast.error("Failed to save order in Sanity.");
        }
    
        // Save order details in sessionStorage
        sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    
        // Prepare email content with fallback values
        const emailContent = {
            firstName: formData.firstName || "N/A",
            lastName: formData.lastName || "N/A",
            email: formData.email || "N/A",
            phone: formData.phone || "N/A",
            pan: formData.pan || "N/A",
            address: formData.address || "N/A",
            orderId: generatedOrderId || "N/A",
            cart: cart.map(item => `${item.name} (Qty: ${item.quantity})`).join(", ") || "No items in cart",
        };
    
        // Send email using EmailJS
        emailjs
            .send(
                process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
                process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
                emailContent,
                process.env.NEXT_PUBLIC_YOUR_USER_ID!
            )
            .then((response) => {
                console.log("Email sent successfully:", response);
                toast.success("Order confirmation sent to your email!");
            })
            .catch((error) => {
                console.error("Email send error:", error);
                toast.error("Failed to send confirmation email.");
            });
    };
    
    

    const handleTrackOrder = () => {
        // Redirect to order tracking page with the generated order ID
        router.push(`/Order-Tracking/${orderId}`);
    };

    return (
        <div className="min-h-screen bg-[#FFFFFF] p-6">
            <div className="flex flex-col lg:flex-row justify-center max-w-7xl mx-auto gap-8">
                {/* Left Section: Form */}
                <div className="bg-white w-full lg:w-[440px] p-6">
                    <h1 className="text-[21px] font-medium mb-4">How would you like to get your order?</h1>
                    <p className="text-[#757575] mb-6">
                        Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More
                    </p>

                    <div className="mb-6">
                        <button className="w-full p-4 border border-gray-300 rounded-lg flex items-center justify-start">
                            <img
                                src="/assets/Delivery.png"
                                alt="Delivery"
                                className="w-[24px] h-[24px] rounded-md border mr-4"
                            />
                            <span className="font-medium">Deliver it</span>
                        </button>
                    </div>

                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <span className="text-[21px] font-medium text-[#111111]">Enter your name and address:</span>
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="p-4 border rounded-md w-full"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="p-4 border rounded-md w-full"
                            />
                        </div>

                        {/* Address Fields */}
                        <input
                            type="text"
                            placeholder="Address Line 1"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="p-4 border rounded-md w-full"
                        />
                        <input
                            type="text"
                            placeholder="Address Line 2"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="p-4 border rounded-md w-full"
                        />

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-lg font-medium mb-4">What&apos;s your contact information?</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="p-4 border rounded-md w-full mb-4"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="p-4 border rounded-md w-full"
                            />
                        </div>

                        {/* PAN */}
                        <div>
                            <h2 className="text-lg font-medium mb-4">What&apos;s your PAN?</h2>
                            <input
                                type="text"
                                placeholder="PAN"
                                name="pan"
                                value={formData.pan}
                                onChange={handleInputChange}
                                className="p-4 border rounded-md w-full"
                            />
                        </div>

                        {/* Continue Button */}
                        <button className="w-full p-4 bg-[#111111] text-white rounded-3xl">
                            Continue
                        </button>
                    </form>
                </div>

                {/* Right Section: Order Summary */}
                <div className="bg-white w-full lg:w-[320px] h-auto lg:h-[721px] p-6">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    <ul className="space-y-6">
                        {cart.map((item) => (
                            <li key={item.id} className="flex items-center">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-[128px] h-[128px] rounded-md border mr-4"
                                />
                                <div>
                                    <p className="font-normal text-[13px]">{item.name}</p>
                                    <p className="text-gray-500">Qty: {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <hr className="my-6" />

                    {/* Summary */}
                    <div className="text-lg font-medium flex justify-between">
                        <span>Subtotal:</span>
                        <span>₹{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                    </div>
                    <div className="text-lg font-medium flex justify-between">
                        <span>Delivery:</span>
                        <span>Free</span>
                    </div>
                    <div className="text-xl font-bold flex justify-between mt-4">
                        <span>Total:</span>
                        <span>₹{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* Dialog Box */}
            {showDialog && orderId && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md w-[400px]">
                        <h2 className="text-lg font-medium mb-4">Your Order ID: {orderId}</h2>
                        <p className="mb-4">We have received your order! A confirmation email has been sent to {formData.email}.</p>
                        <button
                            onClick={handleTrackOrder}
                            className="w-full p-4 bg-[#111111] text-white rounded-3xl"
                        >
                            Track Order
                        </button>
                    </div>
                </div>
            )}

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
}
