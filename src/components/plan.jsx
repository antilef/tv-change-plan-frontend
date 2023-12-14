import { Card, CardContent, Typography, Button, CardMedia, CardActions } from '@mui/material'
import { ChangePlanModal } from './change-plan-modal'
import { useState } from 'react'

export function Plan ({ plan }) {
  const { id, planName, bannerUrl, fixedChargeCLP } = plan
  const [open, setOpen] = useState(false)

  // const handleClickOpen = () => {

  // }

  const handleClose = () => {
    setOpen(false)
  }
  const changePlan = (planId) => {
    setOpen(true)
    const data = {
      // planId,
      // planRequested: '1',
      // rut: '198624802',
      // numId: '1234',
      // originFixedCharge: ' 12000',
      // clientId: '12341423'

    }
    // fetch('localhost:8080/api/v1/trytochangePlan')
    //   .then(res => res.json)
    //   .then(json => console.log('Cambio gatilado ' + JSON.stringify(json)))
    console.log('Cambio gatilado ' + JSON.stringify(data))
  }
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={bannerUrl}
        title='Imagen de plan'
        style={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography className='offerName'>{planName}</Typography>
        <Typography className='offerPrice'> $ {fixedChargeCLP}</Typography>

      </CardContent>
      <CardActions>
        <Button onClick={() => changePlan(id)}>Cambiar Plan</Button>
        <ChangePlanModal open={open} handleClose={handleClose} />
      </CardActions>

    </Card>
  )
}
