import React, {useEffect} from 'react'
import axios from 'axios'

function LandingPage() {

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response.data))
  }, [])

  return (
    <div>
      <h3>LandingPage 랜딩페이지</h3>
    </div>
  )
}

export default LandingPage