import { StrictMode } from 'react'
import { render } from 'react-dom'
import '@/ui/global.css'

import App from '@/app'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
