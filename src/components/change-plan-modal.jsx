import { Dialog, Grid, Slide, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import { forwardRef } from 'react'
const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

export function ChangePlanModal ({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>Te quieres cambiar de plan?</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          <Grid container>
            <Grid item />
            Aqui van los detalles del plan actual
            <Grid item />
            Aqui van los detalles del plan nuevo
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
        <Button onClick={handleClose} variant='contained'>Cambiar</Button>
      </DialogActions>
    </Dialog>
  )
}
