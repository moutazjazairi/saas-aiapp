import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import CTA from "@/components/CTA"
import { Button } from "@/components/ui/button"
import { recentSessions } from "@/constants"
import React from 'react'

const Page = () => {
  return (
    <main>
    <h1 className="text-2xl underline">Popular Companions</h1>
    <section className="home-section">
      <CompanionCard 
        id="123"
        name="Neura the Brainy Explorer"
        topic="Science"
        subject="Science"
        duration={45}
        color="#ffda6e"
      />
      <CompanionCard 
        id="321"
        name="Countsy the Number Wizard"
        topic="Derivatives & Intergals"
        subject="Math"
        duration={35}
        color="#e5d0ff"
      />
      <CompanionCard 
        id="121"
        name="Verba the Vocabulary Builder"
        topic="Language"
        subject="English Literature"
        duration={25}
        color="#BDE7FF"
      />
    </section>

    <section className="home-section">
      <CompanionsList 
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
      />
      <CTA />
    </section>
    </main>
  )
}

export default Page