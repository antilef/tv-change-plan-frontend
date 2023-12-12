import { useEffect, useState } from 'react'
import { actualPlan as plan } from '../assets/plan-details.json'

export function useActualPlan () {
  const [actualPlan, setActualPlan] = useState('')
  // const url = 'localhost:8080/api/v1/myplan'
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => setActualPlan(json.actualPlan))
  // }, [])
  useEffect(() => {
    setActualPlan(plan)
  }, [])

  return { actualPlan }
}
