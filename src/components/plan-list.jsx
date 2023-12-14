import { Plan } from './plan'
import { usePlanList } from '../hooks/use-plan-list'
import { Grid } from '@mui/material'

export function PlanList () {
  const { planList } = usePlanList()

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
        {
        planList.map((plan) =>
          <Grid item xs={2} sm={4} md={4} key={plan.id} justifyContent='center'>
            <Plan plan={plan} />
          </Grid>
        )
      }
      </Grid>
    </>
  )
}
