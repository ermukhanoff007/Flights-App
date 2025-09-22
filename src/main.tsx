import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import "@/firebase"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
    </BrowserRouter>  
  </StrictMode>,
)
