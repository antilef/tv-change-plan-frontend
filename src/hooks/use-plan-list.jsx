import { useEffect, useState } from 'react'
import { plans } from '../assets/plans-mock.json'

export function usePlanList () {
  const [planList, setPlanList] = useState([])
  // const url = 'localhost:8080/api/v1/retrievePlans'
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => setPlanList(json.planList))
  // }, [])
  useEffect(() => {
    setPlanList(plans)
  }, [])

  return { planList }
}
