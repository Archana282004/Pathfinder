"use client"

import { EducatorPaymentCards } from "@/src/lib/mock-data"
import OverviewCards from "@/src/components/ui/overviewcards"

const PaymentOverview = () =>{
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {EducatorPaymentCards.map((card,index)=>(
        <OverviewCards
        key={index}
        title={card.title}
        icon={card.icon}
        data={card.data}
        />
      ))}
    </div>
  )
}

export default PaymentOverview;