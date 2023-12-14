import { Grid } from '@mui/material'
import './App.css'

import { PlanDetails } from './components/plan-details'
import { PlanList } from './components/plan-list'

function App () {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <PlanDetails />
      </Grid>
      <Grid item xs={12} md={8}>
        <PlanList />
      </Grid>
    </Grid>
  )
}

export default App
