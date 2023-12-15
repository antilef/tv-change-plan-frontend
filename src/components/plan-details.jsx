import { Typography, Card, CardContent } from '@mui/material'
import { useContext } from 'react'
import { PlanContext } from '../contexts/planContext'

export function PlanDetails () {
  const { data } = useContext(PlanContext)
  return (
    <>
      <aside>
        <Card>
          <CardContent>
            <Typography>Detalles de mi plan</Typography>
            <Typography>{data.planName}</Typography>

            <Typography>{data.fixedChargeCLP}</Typography>
            <Typography variant='body2'>
              {data.planDescription}
            </Typography>
          </CardContent>
        </Card>
      </aside>
    </>
  )
}
