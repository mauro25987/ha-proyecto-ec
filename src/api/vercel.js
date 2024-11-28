import axios from "axios"

const config = {
  urlVercel: "https://ha-videoclub-api-g2.vercel.app",
}

const urlVercel = "https://ha-videoclub-api-g2.vercel.app"

const fetchProfile = async (token, userId) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: urlVercel,
      url: `/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      const { address, email, firstname, lastname, orders, phone } = response.data
      return { data: { address, email, firstname, lastname, orders, phone }, error: null }
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        return { error: "Error: No tiene autorizacion, por favor inicie sesión", data: null }
      } else {
        return { error: "Error: Algo salio Mal", data: null }
      }
    } else {
      return { error: "Error: Problema de conexion", data: null }
    }
  }
}

const updateProfile = async (token, userId, user) => {
  try {
    const response = await axios({
      method: "PATCH",
      baseURL: urlVercel,
      url: `/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: user,
    })
    if (response.status === 200) {
      return { data: "Usuario actualizado correctamente", error: null }
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Error al actualizar el perfil. Intente nuevamente"
    return { error: errorMessage, data: null }
  }
}

export { fetchProfile, updateProfile }
export default config
