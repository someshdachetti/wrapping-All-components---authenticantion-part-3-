import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const validToken = Cookies.get('jwt_token')
  if (validToken === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}
export default ProtectedRoute
