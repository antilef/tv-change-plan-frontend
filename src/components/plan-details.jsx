import { Typography, Card, CardContent } from '@mui/material'
import { useActualPlan } from '../hooks/use-actual-plan'
export function PlanDetails () {
  const { actualPlan } = useActualPlan()
  return (
    <>
      <aside>
        <Card>
          <CardContent>
            <Typography>Detalles de mi plan</Typography>
            <Typography>{actualPlan.name}</Typography>

            <Typography>{actualPlan.fixedChargeCLP}</Typography>
            <Typography variant='body2'>
              {actualPlan.planDescription}
            </Typography>
          </CardContent>
        </Card>
      </aside>
    </>
  )
}
