import { Plan } from './plan'
import { usePlanList } from '../hooks/use-plan-list'

export function PlanList () {
  const { planList } = usePlanList()

  return (
    <>
      <section className='plans'>
        {
        planList.map((plan) =>
          <div key={plan.id}>
            <Plan plan={plan} />
          </div>
        )
        }
      </section>
    </>
  )
}
