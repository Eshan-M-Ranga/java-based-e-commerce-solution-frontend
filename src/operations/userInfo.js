import axios from "axios";
import { API_BASE_URL, getHeaders } from "../constant";

export const fetchUserDetails = async ()=>{
    const url = API_BASE_URL + '/api/user/profile';
    try{
        const response = await axios(url,{
            method:"GET",
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}

export const addAddress = async (data)=>{
    const url = API_BASE_URL + '/api/address';
    try{
        const response = await axios(url,{
            method:"POST",
            data:data,
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}

export const deleteAddress = async (id)=>{
    const url = API_BASE_URL + `/api/address/${id}`;
    try{
        const response = await axios(url,{
            method:"DELETE",
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}

export const fetchOrder = async ()=>{
    const url = API_BASE_URL + `/api/order/user`;
    try{
        const response = await axios(url,{
            method:"GET",
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}

export const cancelOrder = async (id)=>{
    const url = API_BASE_URL + `/api/order/cancel/${id}`;
    try{
        const response = await axios(url,{
            method:"POST",
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}