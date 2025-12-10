"use client"

import { AdminPaymentCards } from "@/src/lib/mock-data";
import OverviewCards from "@/src/components/ui/overviewcards";



const AdminPaymentStats = ()=>{
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {AdminPaymentCards.map((card, index) =>
        <OverviewCards
          key={index}
          title={card.title}
          icon={card.icon}
          data={card.data}
          />
      )}
    </div>
  )
}

export default AdminPaymentStats;