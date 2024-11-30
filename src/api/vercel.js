import axios from "axios"

const config = {
  urlVercel: "https://ha-videoclub-api-g2.vercel.app",
}

const urlVercel = "https://ha-videoclub-api-g2.vercel.app"

const registerUser = async user => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: urlVercel,
      url: "/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    })
    if (response.status === 200) {
      if (response.data.error) {
        return { data: null, error: "El mail ya esta registrado" }
      }
      return { data: "Usuario registrado correctamente", error: null }
    }
  } catch (error) {
    if (error.response) {
      return { error: "Error: algo salio mal", data: null }
    }
  }
}

const loginUser = async user => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: urlVercel,
      url: "/tokens",
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    })
    if (response.status === 200) {
      if (response.data.error) {
        return { data: null, error: "Credenciales invalidas" }
      }
      const { token, userId } = response.data
      return { data: { token, userId }, error: null }
    }
  } catch (error) {
    if (error.response) {
      return { error: "Error: algo salio mal", data: null }
    }
  }
}

const deleteUser = async (token, userId) => {
  try {
    const response = await axios({
      method: "DELETE",
      baseURL: urlVercel,
      url: `/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      return { data: "Usuario borrado correctamente", error: null }
    }
  } catch (error) {
    if (error.response) {
      return { error: "Error: algo salio mal", data: null }
    }
  }
}

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

const fetchPrice = async () => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: urlVercel,
      url: "/prices",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.status === 200) {
      return { data: response.data.pricing[1], error: null }
    }
  } catch (error) {
    if (error.response) {
      return { error: "Error: algo salio mal", data: null }
    }
  }
}

const sendOrder = async (token, data) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: urlVercel,
      url: "/orders",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
    if (response.status === 200) {
      return { data: "Orden procesada correctamente", error: null }
    }
  } catch (error) {
    if (error.response) {
      return { error: "Error: algo salio mal", data: null }
    }
  }
}

export { deleteUser, fetchPrice, fetchProfile, loginUser, registerUser, sendOrder, updateProfile }
export default config
