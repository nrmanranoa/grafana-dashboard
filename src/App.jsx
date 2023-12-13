import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile, { tasksLoader }  from './pages/Profile'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/grafana-dashboard" element={<RootLayout />}>
      <Route index element={<Dashboard />}/>
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} loader={tasksLoader}  />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
