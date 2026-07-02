import { useState } from "react";
import { ArrowLeft, Check, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LanguageSelector from "../components/LanguageSelector";

import "swiper/css";
import "swiper/css/pagination";

export default function Recharge() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [activeTab, setActiveTab] = useState("Local");
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
    const [activeDuration, setActiveDuration] = useState(3);

    const plans = {
        Local: [
            {
                title: "Unlimited Plus",
                durations: [
                    {
                        price: "$20",
                        months: "1 month",
                        tag: "All-Star",
                        effective: "effective cost $0*",
                        rzto: "Free 240 RZTOs",
                        points: [
                            "*80 RZTOs upon activation",
                            "*80 RZTOs after 4 months",
                            "*80 RZTOs after 8 months",
                            "*Redeem $240 value on all Rizztentials categories",
                        ],
                        data: "5 GB data at high speed / 5G**",
                    },
                    {
                        price: "$45",
                        months: "3 months",
                        tag: "All-Star",
                        effective: "effective cost $15/mo*",
                        rzto: "Free 240 RZTOs",
                        points: [
                            "*80 RZTOs upon activation",
                            "*80 RZTOs after 4 months",
                            "*80 RZTOs after 8 months",
                        ],
                        data: "15 GB data at high speed / 5G**",
                    },
                    {
                        price: "$100",
                        months: "6 months",
                        tag: "Best Value",
                        effective: "effective cost $16.66/mo*",
                        rzto: "Free 240 RZTOs",
                        points: [
                            "*80 RZTOs upon activation",
                            "*80 RZTOs after 4 months",
                            "*80 RZTOs after 8 months",
                        ],
                        data: "30 GB data at high speed / 5G**",
                    },
                    {
                        price: "$180",
                        months: "12 months",
                        tag: "All-Star",
                        effective: "effective cost $15/mo*",
                        rzto: "Free 240 RZTOs",
                        points: [
                            "*80 RZTOs upon activation",
                            "*80 RZTOs after 4 months",
                            "*80 RZTOs after 8 months",
                            "*Redeem $240 value on all Rizztentials categories",
                        ],
                        data: "5 GB data at high speed / 5G**",
                    },
                ],
            },
        ],
    };

    const plan = plans[activeTab][selectedPlanIndex];
    const current = plan.durations[activeDuration];

    return (
        <main className="max-w-xl mx-auto h-dvh bg-white flex flex-col overflow-hidden">
            <header className="flex items-center bg-black justify-between px-4 py-3 border-b border-gray-100 shadow-md shadow-gray-200">
                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="text-white w-6 h-6" />
                </div>
            </header>

            <section className="flex-1 min-h-0 flex flex-col px-4 pt-8 pb-24 overflow-hidden bg-blue-500">
                <h1 className="text-2xl font-semibold text-center shrink-0 mb-8">
                    Select Desired Plan
                </h1>

                {/* Scrollable Plans */}
                <div className="mx-auto w-full max-w-90 border border-black bg-white font-sans">
                    {/* Price Tabs */}
                    <div className="grid grid-cols-4">
                        {plan.durations.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveDuration(index)}
                                className={`border-r border-black px-2 py-5 text-center last:border-r-0 ${activeDuration === index
                                    ? "bg-[#00a651] text-yellow-300"
                                    : "bg-[#bfbfbf] text-white"
                                    }`}
                            >
                                <div className="text-2xl font-extrabold">{item.price}</div>
                                <div className="mt-1 text-xs font-semibold">{item.months}</div>
                            </button>
                        ))}
                    </div>

                    {/* Green Badge Bar */}
                    <div className="flex items-center gap-2 bg-[#00a651] px-10 py-3 text-xs font-bold text-white">
                        <span className="bg-yellow-300 px-3 py-1 text-black">
                            {current.tag}
                        </span>
                        <span>{current.effective}</span>
                    </div>

                    {/* Includes */}
                    <div className="px-5 py-6">
                        <h3 className="text-lg">
                            Includes{" "}
                            <span className="font-extrabold">{current.rzto}</span>
                        </h3>

                        <ul className="mt-2 space-y-1 text-sm font-medium">
                            {current.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-gray-300" />

                    {/* Data */}
                    <div className="px-5 py-6">
                        <h4 className="text-lg font-extrabold">{current.data}</h4>

                        <Link
                            to="/add-information" // or whatever your URL field is
                            className="mt-4 block w-full bg-black py-4 text-center text-lg font-extrabold text-white"
                        >
                            I want this
                        </Link>
                    </div>
                </div>

                <div className="fixed bottom-0 left-1/2 z-60 w-full max-w-xl -translate-x-1/2 bg-black py-4">
                    <div className="mx-auto grid max-w-75 grid-cols-2 gap-3 px-4">
                        <button
                            onClick={() => window.history.back()}
                            className="h-10 rounded-xl border border-white text-white px-4 text-xs font-semibold flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        <Link
                            to="/add-information"
                            className="h-10 rounded-xl bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </section>

            {selectedPlan && (
                <div
                    onClick={() => setSelectedPlan(null)}
                    className="fixed inset-0 z-70 flex items-end justify-center bg-black/50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-xl rounded-t-3xl bg-white p-6"
                    >
                        <h2 className="text-xl font-bold text-red-500">
                            {selectedPlan.title}
                        </h2>

                        <p className="mt-3 text-3xl font-extrabold">
                            {selectedPlan.price}
                            <span className="text-base font-bold">/mo</span>
                        </p>

                        <button
                            onClick={() => setSelectedPlan(null)}
                            className="mt-6 h-11 w-full rounded-full bg-black text-white text-sm font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}