import { useEffect, useState, useContext } from 'react'
import { plans } from '../assets/plans-mock.json'
import { PlanContext } from '../contexts/planContext'
import { API_URL } from '../utils/constants'

export function usePlanList () {
  const [planList, setPlanList] = useState([])
  /// const { data } = useContext(PlanContext)
  const url = `${API_URL}/retrievePlans`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setPlanList(json.planList))
      .catch(err => {
        console.error('Retrieve plans has failed reason :', err.message)
      })
  }, [])
  useEffect(() => {
    setPlanList(plans)
  }, [])

  return { planList }
}
