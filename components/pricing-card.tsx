import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  link: string
  popular?: boolean
}

export function PricingCard({ title, price, features, link, popular = false }: PricingCardProps) {
  return (
    <Card
      className={`bg-black/40 border ${popular ? "border-purple-500/50" : "border-purple-500/20"} backdrop-blur-sm`}
    >
      <CardHeader className="relative">
        {popular && (
          <div className="absolute -top-3 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">Popular</div>
        )}
        <CardTitle className="text-xl text-purple-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-white mb-6">${price}</div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Check className="h-5 w-5 text-purple-400 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
