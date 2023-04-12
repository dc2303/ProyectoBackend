import axios from "axios"

const ListadeProductos = async () =>{
    try {
        const {data} = await axios.get("https://proyectobackend-production-744a.up.railway.app/api/ver")
        return data
    } catch (error) {
        console.log({data: error.response.data,status: error.response.status})
    }
}
const saveProduct = async (productoGuardar) =>{
    try {
        const {data} = await axios.post("https://proyectobackend-production-744a.up.railway.app/api/crear",{
            productoGuardar
        });
        return data
    } catch (error) {
        console.log({data: error.response.data,status: error.response.status})
    }
}
