import { useState, useEffect, createContext } from 'react'
import { actualPlan as actualPlanMock } from '../assets/plan-details.json'

export const PlanContext = createContext()

export function PlanProvider ({ children }) {
  const [data, setData] = useState({
    planId: null,
    planName: null,
    rut: null,
    numId: null,
    originFixedCharge: null,
    clientId: null,
    planDescription: null
  })

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      planId: actualPlanMock.id,
      planName: actualPlanMock.name,
      originFixedCharge: actualPlanMock.fixedChargeCLP,
      planDescription: actualPlanMock.planDescription
    }))
  }, [])

  return (
    <PlanContext.Provider value={
        {
          data,
          setData
        }
    }
    >
      {children}
    </PlanContext.Provider>
  )
}
