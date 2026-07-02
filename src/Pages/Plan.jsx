import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function Plan() {
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

        <main className="max-w-xl mx-auto h-dvh bg-white flex flex-col">
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 z-20">
                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-6 h-6" />
                </div>
            </div>

            <section className="flex-1 flex flex-col px-6 min-h-0">
                <h1 className="mt-10 text-2xl font-semibold text-center">

                </h1>

                <div className="text-center mb-6">
                    <p className="text-xl">Select</p>
                    <h2 className="text-2xl font-bold">Desired Plan</h2>
                </div>

                {/* Tabs */}
                {/* <div className="mt-8 mx-auto flex rounded overflow-hidden border border-gray-200">
                    {["Local", "Regional", "Global"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-24 h-8 text-xs ${activeTab === tab
                                ? "bg-(--primary-color) text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div> */}

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
                            to="/information" // or whatever your URL field is
                            className="mt-4 block w-full bg-black py-4 text-center text-lg font-extrabold text-white"
                        >
                            I want this
                        </Link>
                    </div>
                </div>

            </section>

            {/* Bottom Actions */}
            <div className="mt-auto w-full bg-black py-4">
                <div className="mx-auto max-w-75 grid grid-cols-2 gap-3 px-4">
                    <button
                        onClick={() => window.history.back()}
                        className="h-10 rounded-xl border border-white text-white px-4 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>

                    <Link
                        to="/information"
                        className="h-10 rounded-xl bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
                    >
                        Next
                    </Link>
                </div>
            </div>

            {selectedPlan && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
                    onClick={() => setSelectedPlan(null)}
                >
                    <div
                        className="relative w-full max-w-115 rounded-lg bg-white text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-115 rounded-lg bg-white px-6 py-8 text-center">
                            <button
                                onClick={() => setSelectedPlan(null)}
                                className="absolute right-5 top-4 text-black text-xl font-bold"
                            >
                                ×
                            </button>

                            {selectedPlan.oldPrice && (
                                <p className="text-sm text-gray-400 line-through">
                                    {selectedPlan.oldPrice}
                                </p>
                            )}

                            <div className="text-(--primary-color) font-bold">
                                <span className="text-5xl">{selectedPlan.price}</span>
                                <span className="text-sm">/mo</span>
                            </div>

                            {selectedPlan.badge && (
                                <div className="mx-auto mt-3 inline-block rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                                    {selectedPlan.badge}
                                </div>
                            )}

                            <p className="mt-2 text-[10px] text-black">
                                Taxes & fees extra
                            </p>

                            <h2 className="mt-2 text-lg font-bold">
                                {selectedPlan.title}<sup>SM</sup>
                            </h2>

                            <ul className="mt-5 space-y-3 text-left">
                                {selectedPlan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 text-sm"
                                    >
                                        <span className="mt-1 h-2 w-2 rounded-full bg-(--primary-color)" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-2 text-left block text-xs font-bold text-blue-600 underline">
                                Full Plan Details
                            </button>

                            <div className="border-t border-gray-300 mt-4 pt-4 text-left space-y-3 text-sm">
                                <p>↕️ 30GB data</p>
                                <p>🌐 Hotspot add-on available</p>
                                <p>
                                    🌍 Unlimited talk and text in the U.S. and unlimited text from the U.S.
                                    to over 230 countries and territories.
                                </p>
                            </div>

                            <div className="mt-5">
                                <h3 className="font-bold text-xs">Broadband Labels</h3>
                                <p className="text-[10px] text-(--primary-color) underline">
                                    https://www.att.com/broadbandlabels/NEDPPbfacts
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </main>
    );
}