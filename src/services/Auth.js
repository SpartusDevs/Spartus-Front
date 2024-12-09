import { $api } from "./api.js";


export const loginUser = async(data) =>{
const {email, password } = data;
if(email && password){
try {
    const result = await $api.post('/users/login',data);
    return result.data;
} catch (error) {
    console.error('Error al loguear usuario '+error)
}
 }else {
    console.error('Hay algun error en el paso de la información del Login.')
 }
}