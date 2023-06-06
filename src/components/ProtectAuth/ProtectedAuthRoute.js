import { Navigate } from 'react-router-dom';

function ProtectedAuthRoute(props) {
  const { isLoggedIn, children } = props;
  return isLoggedIn ? <Navigate to={'/movies'} replace /> : children;
}

export default ProtectedAuthRoute;