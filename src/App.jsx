import './App.css'

import { PlanDetails } from './components/plan-details'
import { PlanList } from './components/plan-list'

function App () {
  return (
    <>
      <main className='container'>
        <PlanDetails />
        <PlanList />
      </main>
    </>
  )
}

export default App
