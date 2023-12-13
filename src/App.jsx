import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/grafana-dashboard" element={<RootLayout />}>
      <Route index element={<Dashboard />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
