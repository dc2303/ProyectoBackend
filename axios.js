import axios from "axios";

const listadodeProductos = async () => {
    try { 
        const {data} = await axios.get ("https://proyectobackend-production-744a.up.railway.app//api/ver")
        return data
    } catch (error) {
        console.log({data: error.response.data, status: error.response.status})
    }
}

const saveProduct = async (guardarProducto) => {
    try { 
        const {data} = await axios.post ("https://proyectobackend-production-744a.up.railway.app/s/api/crear",{
            guardarProducto
        });
        return data
    } catch (error) {
        console.log({data: error.response.data, status: error.response.status})
    }
}