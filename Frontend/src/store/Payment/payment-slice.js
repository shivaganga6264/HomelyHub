import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    paymentDetails:{
        checkinDate:null,
        checkoutDate:null,
        totalPrice:0,
        propertyName: "",
        guests:1,
        nights:0

    },
    loading:false,
    error:null,
    orderData:null
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers:{
        //stores booking info
        setPaymentDetails: (state,action)=>{
            state.paymentDetails = action.payload
        },
        //starts payment
        getCheckoutRequests:(state)=>{
            state.loading = true;
            state.error = null;

        },
        //payment done
        getCheckoutSuccess:(state,action)=>{
            state.loading= false;
            state.orderData = action.payload
        },
        //verifying payment
        getVerifyRequest:(state)=>{
            state.loading = true;
            state.error = null;
        },
        //verification complete
        getVerifySuccess:(state) =>{
            state.loading= false;
        },
        //stores error
        getError:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        },
        //clears data
        resetPayment:(state)=>{
            state.orderData = null;
            state.error = null;
            state.loading= false
        }

    }
})
export const paymentActions = paymentSlice.actions;
export const {setPaymentDetails} = paymentSlice.actions;

export const selectPaymentDetails =(state) => state.payment.paymentDetails;

export const selectPaymentStatus =(state) =>({
    loading:state.payment.loading,
    error:state.payment.error,
    orderData:state.payment.orderData
})

export default paymentSlice