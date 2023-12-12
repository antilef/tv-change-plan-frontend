export function Plan ({ plan }) {
  const { id, planName, bannerUrl, fixedChargeCLP } = plan

  const changePlan = (planId) => {
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
    <div className='card'>
      <img src={bannerUrl} alt='Imagen del plan' />
      <p className='offerName'>{planName}</p>
      <p className='offerPrice'> $ {fixedChargeCLP}</p>
      <button onClick={() => changePlan(id)}>Cambiar Plan</button>
    </div>
  )
}
