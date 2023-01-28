import Home from '../pages/Home'
import List from '../pages/List'

interface Routes {
  path?: string
  element?: React.ReactNode | null
}[]

const routes = [
  { path: '/', element: <Home /> },
  { path: '/list', element: <List /> },
]

export { routes }
