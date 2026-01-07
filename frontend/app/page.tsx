import { Approach } from "@/components/home/Approch"
import Hero from "@/components/home/Hero"
import CTA from "@/components/home/CTA"
import Services from "@/components/home/Services"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import TechnologiesWeUse from "@/components/home/TechnologiesWeUse"
import CompanyStats from "@/components/home/CompanyStats"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <WhyChooseUs />
      <TechnologiesWeUse />
      <CompanyStats />
      <CTA />
    </>
  )
}
