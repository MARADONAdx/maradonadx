import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const discordLink = "https://discord.gg/Mr3aJbWA"

  const plans = [
    {
      title: "BASIC WEBSITE",
      price: "15",
      features: ["High Performance", "Free Domain"],
      popular: false,
    },
    {
      title: "VIP WEBSITE",
      price: "25",
      features: ["Auto Update", "High Security", "High Quality"],
      popular: true,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Choose Your Plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-black/40 border ${plan.popular ? "border-purple-500/50" : "border-purple-500/20"} backdrop-blur-sm rounded-lg p-8 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <h3 className="text-xl text-purple-400 mb-4">{plan.title}</h3>
              <div className="text-4xl font-bold text-white mb-6">${plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-purple-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={discordLink} className="w-full" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                  DM TO BUY
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          ))}

          {/* New card for SECURE UR WEB offers */}
          <div className="bg-black/40 border border-purple-500/20 backdrop-blur-sm rounded-lg p-8 relative">
            <h3 className="text-xl text-purple-400 mb-4">SECURE UR WEB</h3>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                15$/3m Update Your Website Security
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                Add New Security Methodes
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                Fix Buges
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                Daily Update
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                V.I.P Services
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                Other ......
              </li>
            </ul>
            <Link href={discordLink} className="w-full" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                DM TO BUY
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>

          {/* Existing card for FF CHEAT offers */}
          <div className="bg-black/40 border border-purple-500/20 backdrop-blur-sm rounded-lg p-8 relative">
            <h3 className="text-xl text-purple-400 mb-4">FF CHEAT OFFERS</h3>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                FF CHEAT PANEL PREMIUM <br />
                <span className="text-white text-xl font-bold">15$/m</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                ANDROID PANEL <br />
                <span className="text-white text-xl font-bold">15$/m</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-400 mr-2" />
                IOS XIT <br />
                <span className="text-white text-xl font-bold">20$/m</span>
              </li>
            </ul>
            <Link href={discordLink} className="w-full" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                DM TO BUY
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
