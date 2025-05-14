import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getProCatBrandSuccess, stockSuccess, getPurcBrandProSuccess, getSalesBrandProSuccess } from "../features/stockSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const {axiosWithToken} = useAxios()

  //! 2- useAxios Hook'u oluşturup axiosWithToken ile değiştirdim.
//   const { token } = useSelector((state) => state.auth);

//   const getFirms = async () => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axios(`${BASE_URL}firms`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });
//       dispatch(firmSuccess(data));
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };
//! 1- En eski yapı
// const getFirms = async () => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axiosWithToken.get("firms")
//       dispatch(firmSuccess(data));
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };
//! 3- Güncel yapı, Data çekme
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`)
      dispatch(stockSuccess({data, url}));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

//! Data silme, Delete
  const deleteStockData = async (url, id) =>{
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail());
    }
  }

//! Data ekleme, Create
  const createStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(url, info)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail());
    }
  }

//! Data güncelleme, Update
  const updateStockData = async (url, info) => {
    dispatch(fetchStart())
    try {
      const {data}=await axiosWithToken.put(`${url}/${info._id}`,info)
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail())
    }
  }

//! PROMISE ALL YAPILARI
//* eş zamanlı istek atma. aynı anda istek atılıyor aynı anda responselar gelmeye başlıyor. Zaman noktasında da avantajlı. En uzun hangi istek sürdüyse veriler ondan sonra valid olur. Birbirine bağımlı isteklerde en büyük avantajı hata durumu. İsteklerden biri bile hatalı olursa hepsi iptal olur.
//? Products, Categories, Brands
  const getProCatBrand=async()=>{
    dispatch(fetchStart())
    try {
      // const [a, b, c] = [2, 4, 6] //? Array Destructure

      const [products, categories, brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands")
      ])
      dispatch(getProCatBrandSuccess([products?.data?.data, categories?.data?.data, brands?.data?.data]))
    } catch (error) {
      dispatch(fetchFail())
    }
  }

//? Purchases, Brand, Products
  const getPurcBrandPro=async()=>{
    dispatch(fetchStart())
    try {
      const [purchases, brands, products] = await Promise.all([
        axiosWithToken("purchases"),
        axiosWithToken("brands"),
        axiosWithToken("products")
      ])
      dispatch(getPurcBrandProSuccess([purchases?.data?.data, brands?.data?.data, products?.data?.data]))
    } catch (error) {
      dispatch(fetchFail())
    }
  }

//? Brands, Sales, Products
const getSalesBrandPro=async()=>{
  dispatch(fetchStart())
  try {
    const [sales, brands, products] = await Promise.all([
      axiosWithToken("sales"),
      axiosWithToken("brands"),
      axiosWithToken("products")
    ])
    dispatch(getSalesBrandProSuccess([sales?.data?.data, brands?.data?.data, products?.data?.data]))
  } catch (error) {
    dispatch(fetchFail())
  }
}
  
  return { getStockData, deleteStockData, createStockData, updateStockData, getProCatBrand, getPurcBrandPro, getSalesBrandPro };
};

export default useStockCall;
