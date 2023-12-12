import { useActualPlan } from '../hooks/use-actual-plan'
export function PlanDetails () {
  const { actualPlan } = useActualPlan()
  return (
    <>
      <aside className='actual-plan-details'>
        <h4>Detalles de mi plan</h4>
        <span className='plan-name'>
          {actualPlan.name}
        </span>
        <div>
          $ {actualPlan.fixedChargeCLP}
        </div>
        <div>
          {actualPlan.planDescription}
        </div>
      </aside>
    </>
  )
}
