(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_fb1641._.js", {

"[project]/src/components/TrackOrder.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TrackOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
function TrackOrder() {
    _s();
    const [orderId, setOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [orderDetails, setOrderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSearch = async ()=>{
        setError("");
        setOrderDetails(null);
        try {
            const response = await fetch(`/api/logistics?orderId=${orderId}`);
            if (response.ok) {
                const data = await response.json();
                setOrderDetails(data);
            } else {
                const err = await response.json();
                setError(err.error || "Something went wrong");
            }
        } catch (err) {
            setError("Failed to fetch order details. Please try again later.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Track Your Order"
            }, void 0, false, {
                fileName: "[project]/src/components/TrackOrder.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Enter Order ID",
                value: orderId,
                onChange: (e)=>setOrderId(e.target.value),
                style: {
                    marginRight: "10px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TrackOrder.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSearch,
                children: "Track"
            }, void 0, false, {
                fileName: "[project]/src/components/TrackOrder.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "red"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/TrackOrder.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, this),
            orderDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Order Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrackOrder.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Order ID:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackOrder.tsx",
                                lineNumber: 42,
                                columnNumber: 14
                            }, this),
                            " ",
                            orderDetails.orderId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrackOrder.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackOrder.tsx",
                                lineNumber: 43,
                                columnNumber: 14
                            }, this),
                            " ",
                            orderDetails.status
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrackOrder.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Customer Name:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackOrder.tsx",
                                lineNumber: 44,
                                columnNumber: 14
                            }, this),
                            " ",
                            orderDetails.customerName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrackOrder.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Delivery Date:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackOrder.tsx",
                                lineNumber: 45,
                                columnNumber: 14
                            }, this),
                            " ",
                            orderDetails.deliveryDate || "N/A"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrackOrder.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TrackOrder.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TrackOrder.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(TrackOrder, "StL9KkXhq/SaRqfaMj/Xc1YVNxw=");
_c = TrackOrder;
var _c;
__turbopack_refresh__.register(_c, "TrackOrder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// // "use client";
// // import { title } from "process";
// // import { useState } from "react";
// // export default function LogisticsApp() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
// //   const [activePage, setActivePage] = useState("home"); // Active page state
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
// //   const [orders, setOrders] = useState([]); // Orders state
// //  // Handle order submission
// //  const handleOrderSubmit = (event) => {
// //   event.preventDefault();
// //   const formData = new FormData(event.target);
// //   const newOrder = {
// //     id: Date.now(),
// //     pickup: formData.get("pickup"),
// //     destination: formData.get("destination"),
// //     weight: formData.get("weight"),
// //     status: "Pending",
// //   };
// //   setOrders([...orders, newOrder]); // Add new order
// //   event.target.reset(); // Reset form fields
// //   alert("Order placed successfully!");
// // };
// //   // Render dynamic content based on the active page
// //   const renderPageContent = () => {
// //     switch (activePage) {
// //       case "home":
// //         return (
// //           <div className="p-6">
// //             <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
// //               <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
// //                 <h1 className="text-5xl font-bold text-white text-center">
// //                   Welcome to TRL Logistics
// //                 </h1>
// //                 <p className="text-lg text-gray-200 mt-4 text-center">
// //                   Trust, Reliability, and Excellence Delivered.
// //                 </p>
// //                   <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600">
// //                     Get a Quote
// //                   </button>
// //               </div>
// //             </div>
// //             <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
// //                   {[
// //                     { label: "Shipments Delivered", count: 12000 },
// //                     { label: "Happy Clients", count: 3000 },
// //                     { label: "Countries Served", count: 50 },
// //                   ].map((stat, index) => (
// //                     <div key={index} className="text-center bg-gray-100 p-6 rounded-lg shadow">
// //                       <h2 className="text-4xl font-bold text-blue-600">
// //                         {stat.count.toLocaleString()}
// //                       </h2>
// //                       <p className="text-lg">{stat.label}</p>
// //                     </div>
// //                 ))}
// //               </div>
// //           </div>
// //         );
// //       case "about":
// //         return (
// //           <div className="p-6">
// //             <h1 className="text-4xl font-bold text-blue-600">About TRL Logistics</h1>
// //             <p className="mt-4 text-lg">
// //               At TRL Logistics, we are committed to delivering trust and reliability in every shipment.
// //             </p>
// //             {/* Timeline */}
// //             <div className="mt-10">
// //               <h2 className="text-3xl font-bold">Our Journey</h2>
// //               <div className="mt-6 space-y-6">
// //                 {[
// //                   { year: 2010, description: "Founded with a mission to simplify logistics." },
// //                   { year: 2015, description: "Expanded operations to 20+ countries." },
// //                   { year: 2020, description: "Achieved 10,000 successful shipments." },
// //                 ].map((event, index) => (
// //                   <div key={index} className="flex space-x-4 items-center">
// //                     <div className="bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold rounded-full">
// //                       {event.year}
// //                     </div>
// //                     <p className="text-lg">{event.description}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         );
// //       case "services":
// //         return (
// //           <div className="p-6">
// //           <h1 className="text-4xl font-bold text-blue-600">Our Services</h1>
// //           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {[
// //               {
// //                 title: "Freight Transportation",
// //                 description: "Efficient and reliable freight solutions for your needs.",
// //                 icon: "🚚",
// //               },
// //               {
// //                 title: "Warehousing Solutions",
// //                 description: "Secure and flexible storage options.",
// //                 icon: "📦",
// //               },
// //               {
// //                 title: "Customs Brokerage",
// //                 description: "Hassle-free customs clearance for smooth operations.",
// //                 icon: "🛃",
// //               },
// //               {
// //                 title: "Supply Chain Solutions",
// //                 description: "Streamlined and efficient supply chain management for your business.",
// //                 icon: "🔗",
// //               },
// //               {
// //                 title: "Last Mile Delivery",
// //                 description: "Efficient and reliable last mile delivery for seamless customer experiences.",
// //                 icon: "📍",
// //               },
// //             ].map((service, index) => (
// //               <div
// //                 key={index}
// //                 className="p-6 border rounded-lg shadow hover:shadow-lg transition"
// //               >
// //                 <div className="text-4xl">{service.icon}</div>
// //                 <h2 className="mt-4 text-xl font-bold">{service.title}</h2>
// //                 <p className="mt-2 text-gray-700">{service.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //           </div>
// //         );
// //       case "contact":
// //         return (
// //           <div>
// //             <h1 className="text-2xl font-bold">Contact Us</h1>
// //             <form className="flex flex-col space-y-4">
// //               <input
// //                 type="text"
// //                 placeholder="Your Name"
// //                 className="border p-2 rounded"
// //               />
// //               <input
// //                 type="email"
// //                 placeholder="Your Email"
// //                 className="border p-2 rounded"
// //               />
// //               <textarea
// //                 placeholder="Your Message"
// //                 className="border p-2 rounded"
// //               />
// //               <button className="bg-green-500 text-white px-4 py-2 rounded">
// //                 Submit
// //               </button>
// //             </form>
// //           </div>
// //         );
// //         case "orders":
// //           return (
// //             <div className="p-6">
// //               <h1 className="text-4xl font-bold text-blue-600">Manage Orders</h1>
// //               {/* Order Form */}
// //               <form className="mt-6 space-y-4" onSubmit={handleOrderSubmit}>
// //                 <div>
// //                   <label className="block text-lg font-medium">Pickup Location:</label>
// //                   <input
// //                     type="text"
// //                     name="pickup"
// //                     placeholder="Enter pickup location"
// //                     required
// //                     className="border p-2 rounded w-full"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-lg font-medium">Destination:</label>
// //                   <input
// //                     type="text"
// //                     name="destination"
// //                     placeholder="Enter destination"
// //                     required
// //                     className="border p-2 rounded w-full"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-lg font-medium">Package Weight (kg):</label>
// //                   <input
// //                     type="number"
// //                     name="weight"
// //                     placeholder="Enter weight"
// //                     required
// //                     className="border p-2 rounded w-full"
// //                   />
// //                 </div>
// //                 <button
// //                   type="submit"
// //                   className="bg-green-500 text-white px-4 py-2 rounded"
// //                 >
// //                   Place Order
// //                 </button>
// //               </form>
// //               {/* Order List */}
// //               <div className="mt-10">
// //                 <h2 className="text-2xl font-bold">Order List</h2>
// //                 {orders.length > 0 ? (
// //                   <table className="w-full mt-4 border-collapse border border-gray-300">
// //                     <thead>
// //                       <tr className="bg-gray-100">
// //                         <th className="border p-2">Order ID</th>
// //                         <th className="border p-2">Pickup</th>
// //                         <th className="border p-2">Destination</th>
// //                         <th className="border p-2">Weight</th>
// //                         <th className="border p-2">Status</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {orders.map((order) => (
// //                         <tr key={order.id} className="text-center">
// //                           <td className="border p-2">{order.id}</td>
// //                           <td className="border p-2">{order.pickup}</td>
// //                           <td className="border p-2">{order.destination}</td>
// //                           <td className="border p-2">{order.weight} kg</td>
// //                           <td className="border p-2">{order.status}</td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 ) : (
// //                   <p className="mt-4 text-gray-600">No orders placed yet.</p>
// //                 )}
// //               </div>
// //             </div>
// //           );
// //       default:
// //         return <p>Page not found</p>;
// //     }
// //   };
// //   return (
// //     <div className="h-screen">
// //       {!isLoggedIn ? (
// //         // Login Form
// //         <div className="flex justify-center items-center h-full">
// //           <div className="border p-6 rounded shadow-lg">
// //             <h2 className="text-2xl font-bold mb-4">Login</h2>
// //             <input type="text" placeholder="Username" className="border p-2 rounded w-full mb-4"/>
// //             <input type="password" placeholder="Password" className="border p-2 rounded w-full mb-4"/>
// //             <button onClick={() => setIsLoggedIn(true)} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
// //               Login
// //             </button>
// //           </div>
// //         </div>
// //       ) : (
// //         // Main Content after Login
// //         <div className="flex h-full">
// //           {/* Sidebar */}
// //           {isSidebarOpen && (
// //             <nav className="bg-gray-800 text-white p-4 transition-transform duration-300" style={{ width: "240px" }}>
// //               <button onClick={() => setIsSidebarOpen(false)} className="bg-red-500 text-white px-2 py-1 mb-4 rounded">
// //                <img src="/Images/MenuIcon.jpeg" alt="menu bar" height={10} width={30}></img>
// //               </button>
// //               <h2 className="text-lg font-bold mb-4">TRL Logistics</h2>
// //               <ul className="space-y-4">
// //                 <li>
// //                   <button onClick={() => setActivePage("home")} className={`hover:underline ${ activePage === "home" ? "font-bold" : ""}`}>
// //                     Home
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button onClick={() => setActivePage("about")} className={`hover:underline ${activePage === "about" ? "font-bold" : ""}`}>
// //                     About Us
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button onClick={() => setActivePage("services")}className={`hover:underline ${activePage === "services" ? "font-bold" : ""}`}>
// //                     Services
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button onClick={() => setActivePage("contact")}className={`hover:underline ${activePage === "contact" ? "font-bold" : ""}`}>
// //                     Contact Us
// //                   </button>
// //                 </li>
// //                 <li>
// //                   <button onClick={() => setActivePage("orders")}>Orders</button>
// //                 </li>
// //               </ul>
// //             </nav>
// //           )}
// //           {/* Main Content Area */}
// //           <div className={`flex-1 p-6 transition-all duration-300 ${ isSidebarOpen ? "ml-[240px]" : "ml-0"}`}>
// //             {!isSidebarOpen && (
// //               <button onClick={() => setIsSidebarOpen(true)} className="bg-blue-500 text-white px-2 py-1 rounded">
// //               <img src="/Images/MenuIcon.jpeg" alt="menu bar" height={10} width={30}></img>
// //               </button>
// //             )}
// //             {renderPageContent()}
// // <footer className="bg-gray-800 text-gray-200 p-6">
// //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
// //     {/* Column 1: Company Info */}
// //     <div>
// //       <h2 className="text-xl font-bold text-white">TRL Logistics</h2>
// //       <p className="mt-2 text-sm">
// //         Trust Reliable Logistics - delivering excellence in freight transportation, warehousing, and supply chain solutions.
// //       </p>
// //     </div>
// //     {/* Column 2: Quick Links */}
// //     <div>
// //       <h3 className="text-lg font-semibold text-white">Quick Links</h3>
// //       <ul className="mt-2 space-y-2">
// //         <li><a href="/home" className="hover:underline">Home</a></li>
// //         <li><a href="/services" className="hover:underline">Services</a></li>
// //         <li><a href="/about" className="hover:underline">About Us</a></li>
// //         <li><a href="/contact" className="hover:underline">Contact Us</a></li>
// //       </ul>
// //     </div>
// //     {/* Column 3: Contact Information */}
// //     <div>
// //       <h3 className="text-lg font-semibold text-white">Contact Us</h3>
// //       <ul className="mt-2 space-y-2">
// //         <li><span className="font-bold">Phone:</span> +91 12345 67890</li>
// //         <li><span className="font-bold">Email:</span> support@trllogistics.com</li>
// //         <li><span className="font-bold">Address:</span> Bengaluru, India</li>
// //       </ul>
// //     </div>
// //   </div>
// //   {/* Footer Bottom */}
// //   <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
// //     &copy; {new Date().getFullYear()} TRL Logistics. All Rights Reserved. Designed with passion by Shreyas M.
// //   </div>
// // </footer>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// export default function LogisticsApp() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
//   const [activePage, setActivePage] = useState("home"); // Active page state
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
//   const [orders, setOrders] = useState<{ id: number; pickup: string; destination: string; weight: number; status: string }[]>([]); // Orders state
//   const [isOrderFormOpen, setIsOrderFormOpen] = useState(false); // Order form modal toggle
//   const [orderId, setOrderId] = useState(""); // Order ID state
//   const [orderStatus, setOrderStatus] = useState(""); // Order status state
//   // Handle order submission
//   const handleOrderSubmit = (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const orders = {
//       "12345": "In Transit - Expected Delivery: Dec 25, 2024",
//       "67890": "Delivered - Delivered on Dec 20, 2024",
//       "11223": "Awaiting Pickup - Pickup scheduled for Dec 22, 2024",
//     };
//     //Handle Order Tracking
//     const handleTrackOrder = () => {
//       if (orderId in orders) {
//         setOrderStatus(orders[orderId]);
//       }else {
//         setOrderStatus("Order not found");
//       }
//     };
//     const newOrder = {
//       id: Date.now(),
//       pickup: formData.get("pickup"),
//       destination: formData.get("destination"),
//       weight: formData.get("weight"),
//       status: "Pending",
//     };
//     setOrders([...orders, newOrder]); // Add new order
//     (event.target as HTMLFormElement).reset(); // Reset form fields
//     setIsOrderFormOpen(false); // Close form modal
//     alert("Order placed successfully!");
//   };
//   // Render dynamic content based on the active page
//   const renderPageContent = () => {
//     switch (activePage) {
//       case "home":
//         return (
//           <div className="p-6">
//             <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
//                 <h1 className="text-5xl font-bold text-white text-center">
//                   Welcome to TRL Logistics
//                 </h1>
//                 <p className="text-lg text-gray-200 mt-4 text-center">
//                   Trust, Reliability, and Excellence Delivered.
//                 </p>
//                   <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600">
//                     Get a Quote
//                   </button>
//               </div>
//             </div>
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {[
//                     { label: "Shipments Delivered", count: 12000 },
//                     { label: "Happy Clients", count: 3000 },
//                     { label: "Countries Served", count: 50 },
//                   ].map((stat, index) => (
//                     <div key={index} className="text-center bg-gray-100 p-6 rounded-lg shadow">
//                       <h2 className="text-4xl font-bold text-blue-600">
//                         {stat.count.toLocaleString()}
//                       </h2>
//                       <p className="text-lg">{stat.label}</p>
//                     </div>
//                 ))}
//               </div>
//           </div>
//         );
//       case "about":
//         return (
//           <div className="p-6">
//             <h1 className="text-4xl font-bold text-blue-600">About TRL Logistics</h1>
//             <p className="mt-4 text-lg">
//               At TRL Logistics, we are committed to delivering trust and reliability in every shipment.
//             </p>
//             {/* Timeline */}
//             <div className="mt-10">
//               <h2 className="text-3xl font-bold">Our Journey</h2>
//               <div className="mt-6 space-y-6">
//                 {[
//                   { year: 2010, description: "Founded with a mission to simplify logistics." },
//                   { year: 2015, description: "Expanded operations to 20+ countries." },
//                   { year: 2020, description: "Achieved 10,000 successful shipments." },
//                 ].map((event, index) => (
//                   <div key={index} className="flex space-x-4 items-center">
//                     <div className="bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold rounded-full">
//                       {event.year}
//                     </div>
//                     <p className="text-lg">{event.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       case "services":
//         return (
//           <div className="p-6">
//           <h1 className="text-4xl font-bold text-blue-600">Our Services</h1>
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Freight Transportation",
//                 description: "Efficient and reliable freight solutions for your needs.",
//                 icon: "🚚",
//               },
//               {
//                 title: "Warehousing Solutions",
//                 description: "Secure and flexible storage options.",
//                 icon: "📦",
//               },
//               {
//                 title: "Customs Brokerage",
//                 description: "Hassle-free customs clearance for smooth operations.",
//                 icon: "🛃",
//               },
//               {
//                 title: "Supply Chain Solutions",
//                 description: "Streamlined and efficient supply chain management for your business.",
//                 icon: "🔗",
//               },
//               {
//                 title: "Last Mile Delivery",
//                 description: "Efficient and reliable last mile delivery for seamless customer experiences.",
//                 icon: "📍",
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="p-6 border rounded-lg shadow hover:shadow-lg transition"
//               >
//                 <div className="text-4xl">{service.icon}</div>
//                 <h2 className="mt-4 text-xl font-bold">{service.title}</h2>
//                 <p className="mt-2 text-gray-700">{service.description}</p>
//               </div>
//             ))}
//             {/* Place Order Button */}
//             <button
//               onClick={() => setIsOrderFormOpen(true)}
//               className="mt-6 bg-green-500 text-white px-4 py-2 rounded"
//             >
//               Place an Order
//             </button>
//             {/* Order Form Modal */}
//             {isOrderFormOpen && (
//               <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="bg-white p-6 rounded shadow-lg w-96">
//                   <h2 className="text-2xl font-bold mb-4">Place an Order</h2>
//                   <form onSubmit={handleOrderSubmit}>
//                     <div>
//                       <label className="block text-lg font-medium">Pickup Location:</label>
//                       <input
//                         type="text"
//                         name="pickup"
//                         placeholder="Enter pickup location"
//                         required
//                         className="border p-2 rounded w-full mb-4"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-lg font-medium">Destination:</label>
//                       <input
//                         type="text"
//                         name="destination"
//                         placeholder="Enter destination"
//                         required
//                         className="border p-2 rounded w-full mb-4"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-lg font-medium">Package Weight (kg):</label>
//                       <input
//                         type="number"
//                         name="weight"
//                         placeholder="Enter weight"
//                         required
//                         className="border p-2 rounded w-full mb-4"
//                       />
//                     </div>
//                     <div className="flex justify-between">
//                       <button
//                         type="button"
//                         onClick={() => setIsOrderFormOpen(false)}
//                         className="bg-gray-500 text-white px-4 py-2 rounded"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="bg-green-500 text-white px-4 py-2 rounded"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//             {/* Order List */}
//             <div className="mt-10">
//               <h2 className="text-2xl font-bold">Order List</h2>
//               {orders.length > 0 ? (
//                 <table className="w-full mt-4 border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="border p-2">Order ID</th>
//                       <th className="border p-2">Pickup</th>
//                       <th className="border p-2">Destination</th>
//                       <th className="border p-2">Weight</th>
//                       <th className="border p-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {orders.map((order) => (
//                       <tr key={order.id} className="text-center">
//                         <td className="border p-2">{order.id}</td>
//                         <td className="border p-2">{order.pickup}</td>
//                         <td className="border p-2">{order.destination}</td>
//                         <td className="border p-2">{order.weight} kg</td>
//                         <td className="border p-2">{order.status}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               ) : (
//                 <p className="mt-4 text-gray-600">No orders placed yet.</p>
//               )}
//             </div>
//           </div>
//           </div>
//         );
//         case "contact":
//           return (
//             <div>
//               <h1 className="text-2xl font-bold">Contact Us</h1>
//               <form className="flex flex-col space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="border p-2 rounded"
//                 />
//                 <textarea
//                   placeholder="Your Message"
//                   className="border p-2 rounded"
//                 />
//                 <button className="bg-green-500 text-white px-4 py-2 rounded">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           );
//           case "orders":
//             return (
//               <div className="p-6">
//                 <h1 className="text-4xl font-bold text-blue-600">Manage Orders</h1>
//                 {/* Order Form */}
//                 <form className="mt-6 space-y-4" onSubmit={handleOrderSubmit}>
//                   <div>
//                     <label className="block text-lg font-medium">Pickup Location:</label>
//                     <input
//                       type="text"
//                       name="pickup"
//                       placeholder="Enter pickup location"
//                       required
//                       className="border p-2 rounded w-full"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium">Destination:</label>
//                     <input
//                       type="text"
//                       name="destination"
//                       placeholder="Enter destination"
//                       required
//                       className="border p-2 rounded w-full"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium">Package Weight (kg):</label>
//                     <input
//                       type="number"
//                       name="weight"
//                       placeholder="Enter weight"
//                       required
//                       className="border p-2 rounded w-full"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="bg-green-500 text-white px-4 py-2 rounded"
//                   >
//                     Place Order
//                   </button>
//                 </form>
//                 {/* Order List */}
//                 <div className="mt-10">
//                   <h2 className="text-2xl font-bold">Order List</h2>
//                   {orders.length > 0 ? (
//                     <table className="w-full mt-4 border-collapse border border-gray-300">
//                       <thead>
//                         <tr className="bg-gray-100">
//                           <th className="border p-2">Order ID</th>
//                           <th className="border p-2">Pickup</th>
//                           <th className="border p-2">Destination</th>
//                           <th className="border p-2">Weight</th>
//                           <th className="border p-2">Status</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {orders.map((order) => (
//                           <tr key={order.id} className="text-center">
//                             <td className="border p-2">{order.id}</td>
//                             <td className="border p-2">{order.pickup}</td>
//                             <td className="border p-2">{order.destination}</td>
//                             <td className="border p-2">{order.weight} kg</td>
//                             <td className="border p-2">{order.status}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   ) : (
//                     <p className="mt-4 text-gray-600">No orders placed yet.</p>
//                   )}
//                 </div>
//               </div>
//             );
//       default:
//         return <p>Page not found</p>;
//     }
//   };
//   return (
//     <div className="h-screen">
//       {!isLoggedIn ? (
//         <div className="flex justify-center items-center h-full">
//           <div className="border p-6 rounded shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <input
//               type="text"
//               placeholder="Username"
//               className="border p-2 rounded w-full mb-4"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={() => setIsLoggedIn(true)}
//               className="bg-blue-500 text-white px-4 py-2 rounded w-full"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="flex h-full">
//           {isSidebarOpen && (
//             <nav className="bg-gray-800 text-white p-4 transition-transform duration-300" style={{ width: "240px" }}>
//               <button onClick={() => setIsSidebarOpen(false)} className="bg-red-500 text-white px-2 py-1 mb-4 rounded">
//                <img src="/Images/MenuIcon.jpeg" alt="menu bar" height={10} width={30}></img>
//               </button>
//               <h2 className="text-lg font-bold mb-4">TRL Logistics</h2>
//               <ul className="space-y-4">
//                 <li>
//                   <button onClick={() => setActivePage("home")} className={`hover:underline ${ activePage === "home" ? "font-bold" : ""}`}>
//                     Home
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => setActivePage("about")} className={`hover:underline ${activePage === "about" ? "font-bold" : ""}`}>
//                     About Us
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => setActivePage("services")}className={`hover:underline ${activePage === "services" ? "font-bold" : ""}`}>
//                     Services
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => setActivePage("contact")}className={`hover:underline ${activePage === "contact" ? "font-bold" : ""}`}>
//                     Contact Us
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => setActivePage("orders")}className={`hover:underline ${activePage === "orders" ? "font-bold" : ""}`}>
//                     Orders 
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           )}
//           {/* Main Content Area */}
//           <div className={`flex-1 p-6 transition-all duration-300 ${ isSidebarOpen ? "ml-[240px]" : "ml-0"}`}>
//             {!isSidebarOpen && (
//               <button onClick={() => setIsSidebarOpen(true)} className="bg-blue-500 text-white px-2 py-1 rounded">
//               <img src="/Images/MenuIcon.jpeg" alt="menu bar" height={10} width={30}></img>
//               </button>
//             )}
//             {renderPageContent()}
// <footer className="bg-gray-800 text-gray-200 p-6">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//     {/* Column 1: Company Info */}
//     <div>
//       <h2 className="text-xl font-bold text-white">TRL Logistics</h2>
//       <p className="mt-2 text-sm">
//         Trust Reliable Logistics - delivering excellence in freight transportation, warehousing, and supply chain solutions.
//       </p>
//     </div>
//     {/* Column 2: Quick Links */}
//     <div>
//       <h3 className="text-lg font-semibold text-white">Quick Links</h3>
//       <ul className="mt-2 space-y-2">
//         <li><a href="/home" className="hover:underline">Home</a></li>
//         <li><a href="/services" className="hover:underline">Services</a></li>
//         <li><a href="/about" className="hover:underline">About Us</a></li>
//         <li><a href="/contact" className="hover:underline">Contact Us</a></li>
//       </ul>
//     </div>
//     {/* Column 3: Contact Information */}
//     <div>
//       <h3 className="text-lg font-semibold text-white">Contact Us</h3>
//       <ul className="mt-2 space-y-2">
//         <li><span className="font-bold">Phone:</span> +91 12345 67890</li>
//         <li><span className="font-bold">Email:</span> support@trllogistics.com</li>
//         <li><span className="font-bold">Address:</span> Bengaluru, India</li>
//       </ul>
//     </div>
//   </div>
//   {/* Footer Bottom */}
//   <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
//     &copy; {new Date().getFullYear()} TRL Logistics. All Rights Reserved. Designed with passion by Shreyas M.
//   </div>
// </footer>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
__turbopack_esm__({
    "default": (()=>LogisticsApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrackOrder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/TrackOrder.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function LogisticsApp() {
    _s();
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Login state
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home"); // Active page state
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Sidebar toggle state
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Orders state
    const [isOrderFormOpen, setIsOrderFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Order form modal toggle
    const handleOrderSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const newOrder = {
            id: Date.now(),
            pickup: formData.get("pickup"),
            destination: formData.get("destination"),
            weight: Number(formData.get("weight")),
            status: "Pending"
        };
        setOrders((prevOrders)=>[
                ...prevOrders,
                newOrder
            ]); // Add new order
        event.target.reset(); // Reset form fields
        setIsOrderFormOpen(false); // Close form modal
        alert("Order placed successfully!");
    };
    // Render dynamic content based on the active page
    const renderPageContent = ()=>{
        switch(activePage){
            case "home":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-[100vh] bg-cover bg-center",
                            style: {
                                backgroundImage: "url('/Images/BG.png')"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl font-bold text-white text-center",
                                        children: "Welcome to TRL Logistics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 875,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-200 mt-4 text-center",
                                        children: "Trust, Reliability, and Excellence Delivered."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 878,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "mt-6 bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600 hover:underline",
                                        onClick: ()=>setActivePage("contact"),
                                        children: " Get a Quote"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 881,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 874,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 873,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                {
                                    label: "Shipments Delivered",
                                    count: 12000
                                },
                                {
                                    label: "Happy Clients",
                                    count: 3000
                                },
                                {
                                    label: "Countries Served",
                                    count: 50
                                }
                            ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center bg-gray-100 p-6 rounded-lg shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-blue-600",
                                            children: stat.count.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 892,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 895,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 891,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 885,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 872,
                    columnNumber: 11
                }, this);
            case "about":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-blue-600",
                            children: "About TRL Logistics"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 904,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg",
                            children: "At TRL Logistics, we are committed to delivering trust and reliability in every shipment."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 905,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold",
                                    children: "Our Journey"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 911,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-6",
                                    children: [
                                        {
                                            year: 2010,
                                            description: "Founded with a mission to simplify logistics."
                                        },
                                        {
                                            year: 2015,
                                            description: "Expanded operations to 20+ countries."
                                        },
                                        {
                                            year: 2020,
                                            description: "Achieved 10,000 successful shipments."
                                        }
                                    ].map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-4 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold rounded-full",
                                                    children: event.year
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg",
                                                    children: event.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 918,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 912,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 910,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 903,
                    columnNumber: 11
                }, this);
            case "services":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-blue-600",
                            children: "Our Services"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 932,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                {
                                    title: "Freight Transportation",
                                    description: "Efficient and reliable freight solutions for your needs.",
                                    icon: "🚚"
                                },
                                {
                                    title: "Warehousing Solutions",
                                    description: "Secure and flexible storage options.",
                                    icon: "📦"
                                },
                                {
                                    title: "Customs Brokerage",
                                    description: "Hassle-free customs clearance for smooth operations.",
                                    icon: "🛃"
                                },
                                {
                                    title: "Supply Chain Solutions",
                                    description: "Streamlined and efficient supply chain management for your business.",
                                    icon: "🔗"
                                },
                                {
                                    title: "Last Mile Delivery",
                                    description: "Efficient and reliable last mile delivery for seamless customer experiences.",
                                    icon: "📍"
                                }
                            ].map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border rounded-lg shadow hover:shadow-lg transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl",
                                            children: service.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 966,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-4 text-xl font-bold",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 967,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-gray-700",
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 968,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 962,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 933,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOrderFormOpen(true),
                            className: "mt-6 bg-green-500 text-white px-4 py-2 rounded",
                            children: "Place an Order"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 974,
                            columnNumber: 13
                        }, this),
                        isOrderFormOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded shadow-lg w-96",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-4",
                                        children: "Place an Order"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 986,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleOrderSubmit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-lg font-medium",
                                                        children: "Pickup Location:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 989,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "pickup",
                                                        placeholder: "Enter pickup location",
                                                        required: true,
                                                        className: "border p-2 rounded w-full mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 990,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 988,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-lg font-medium",
                                                        children: "Destination:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 999,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "destination",
                                                        placeholder: "Enter destination",
                                                        required: true,
                                                        className: "border p-2 rounded w-full mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1000,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-lg font-medium",
                                                        children: "Package Weight (kg):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1009,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        name: "weight",
                                                        placeholder: "Enter weight",
                                                        required: true,
                                                        className: "border p-2 rounded w-full mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1010,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsOrderFormOpen(false),
                                                        className: "bg-gray-500 text-white px-4 py-2 rounded",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1019,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "bg-green-500 text-white px-4 py-2 rounded",
                                                        children: "Submit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1018,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 987,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 985,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 984,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: "Order List"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1041,
                                    columnNumber: 15
                                }, this),
                                orders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full mt-4 border-collapse border border-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Order ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Pickup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Destination"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Weight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1049,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1050,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: order.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1056,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: order.pickup
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1057,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: order.destination
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1058,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: [
                                                                order.weight,
                                                                " kg"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1059,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: order.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1060,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, order.id, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1053,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-gray-600",
                                    children: "No orders placed yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1066,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1040,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 931,
                    columnNumber: 11
                }, this);
            case "contact":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold",
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1075,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex flex-col space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Your Name",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1077,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Your Email",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1082,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Your Message",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1087,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-green-500 text-white px-4 py-2 rounded",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1091,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1076,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1074,
                    columnNumber: 13
                }, this);
            case "orders":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-blue-600",
                            children: "Manage Orders"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1100,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "mt-6 space-y-4",
                            onSubmit: handleOrderSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-lg font-medium",
                                            children: "Pickup Location:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1105,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "pickup",
                                            placeholder: "Enter pickup location",
                                            required: true,
                                            className: "border p-2 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1106,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1104,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-lg font-medium",
                                            children: "Destination:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1115,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "destination",
                                            placeholder: "Enter destination",
                                            required: true,
                                            className: "border p-2 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-lg font-medium",
                                            children: "Package Weight (kg):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1125,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "weight",
                                            placeholder: "Enter weight",
                                            required: true,
                                            className: "border p-2 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1126,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1124,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "bg-green-500 text-white px-4 py-2 rounded",
                                    children: "Place Order"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1134,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1103,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: "Order List"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1144,
                                    columnNumber: 19
                                }, this),
                                orders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full mt-4 border-collapse border border-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Order ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1149,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Pickup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1150,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Destination"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1151,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Weight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1152,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border p-2",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1153,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1148,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: order.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1160,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: order.pickup
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1161,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: order.destination
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1162,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: [
                                                                order.weight,
                                                                " kg"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1163,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border p-2",
                                                            children: order.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1164,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, order.id, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1157,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1146,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-gray-600",
                                    children: "No orders placed yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1170,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrackOrder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1172,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1143,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1099,
                    columnNumber: 15
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Page not found"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1178,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen",
        children: !isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border p-6 rounded shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1187,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Username",
                        className: "border p-2 rounded w-full mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1188,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Password",
                        className: "border p-2 rounded w-full mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1189,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsLoggedIn(true),
                        className: "bg-blue-500 text-white px-4 py-2 rounded w-full",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1190,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1186,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1185,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full",
            children: [
                isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "bg-gray-800 text-white p-4 transition-transform duration-300",
                    style: {
                        width: "240px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsSidebarOpen(false),
                            className: "bg-red-500 text-white px-2 py-1 mb-4 rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/Images/MenuIcon.jpeg",
                                alt: "menu bar",
                                height: 10,
                                width: 30
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1201,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1200,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold mb-4",
                            children: "TRL Logistics"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1203,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActivePage("home"),
                                        className: `hover:underline ${activePage === "home" ? "font-bold" : ""}`,
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1206,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActivePage("about"),
                                        className: `hover:underline ${activePage === "about" ? "font-bold" : ""}`,
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1211,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1210,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActivePage("services"),
                                        className: `hover:underline ${activePage === "services" ? "font-bold" : ""}`,
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1216,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActivePage("contact"),
                                        className: `hover:underline ${activePage === "contact" ? "font-bold" : ""}`,
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1221,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1220,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActivePage("orders"),
                                        className: `hover:underline ${activePage === "orders" ? "font-bold" : ""}`,
                                        children: "Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1226,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1225,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1204,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1199,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-[240px]" : "ml-0"}`,
                    children: [
                        !isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsSidebarOpen(true),
                            className: "bg-blue-500 text-white px-2 py-1 rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/Images/MenuIcon.jpeg",
                                alt: "menu bar",
                                height: 10,
                                width: 30
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1238,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1237,
                            columnNumber: 15
                        }, this),
                        renderPageContent(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "bg-gray-800 text-gray-200 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold text-white",
                                                    children: "TRL Logistics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm",
                                                    children: "Trust Reliable Logistics - delivering excellence in freight transportation, warehousing, and supply chain solutions."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1247,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white",
                                                    children: "Quick Links"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1254,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-2 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "/home",
                                                                className: "hover:underline",
                                                                children: "Home"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1256,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1256,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "/services",
                                                                className: "hover:underline",
                                                                children: "Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1257,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1257,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "/about",
                                                                className: "hover:underline",
                                                                children: "About Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1258,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1258,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActivePage("contact"),
                                                            className: `hover:underline ${activePage === "contact" ? "font-bold" : ""}`,
                                                            children: " Contact Us "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1259,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1255,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white",
                                                    children: "Contact Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1265,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-2 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Phone:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1267,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " +91 12345 67890"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1267,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Email:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1268,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " support@trllogistics.com"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1268,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Address:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1269,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " Bengaluru, India"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1269,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1266,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1264,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1243,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 border-t border-gray-700 pt-4 text-center text-sm",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " TRL Logistics. All Rights Reserved. Designed with passion by Shreyas M."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1242,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1235,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1197,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1183,
        columnNumber: 5
    }, this);
}
_s(LogisticsApp, "JfbPR84Z9ZONsamXIJn5RDIlJ5Y=");
_c = LogisticsApp;
var _c;
__turbopack_refresh__.register(_c, "LogisticsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_fb1641._.js.map