import Layout from './layout'
import { routes } from './routes/routes'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(route => (
            <Route
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
