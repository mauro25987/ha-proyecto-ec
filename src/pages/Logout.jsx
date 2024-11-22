import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeToken } from "../reducer/authSlice"

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    if (token) {
      dispatch(removeToken(token))
      navigate("/")
    }
  }, [dispatch, navigate, token])

  return <div>Logout {token}</div>
}

export default Logout
