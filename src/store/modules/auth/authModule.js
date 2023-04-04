import apiSlice from "@/controller/apiSlice";

export const AuthSlice = apiSlice.injectEndpoints({
  endpoints(builder) {
    return {
      login: builder.mutation({
        query(loginData) {
          return {
            url: "LOGIN.php",
            method: "POST",
            body: JSON.stringify(loginData),
          };
        },
      }),
      register: builder.mutation({
        query(registerData) {
          return {
            url: `register.php`,
            method: "POST",
            body: JSON.stringify(registerData),
          };
      }
    }),  
    resetPass: builder.mutation({
        query(forgotData) {
          return {
            url: `FORGET_Password.php`,
            method: "POST",
            body: JSON.stringify(forgotData),
          };
        },
    }),
    getOTP: builder.mutation({
        query(OTP_code) {
          return {
            url: `GET_OTP.php`,
            method: "POST",
            body: JSON.stringify(OTP_code),
          };
        },
    }),
    updatePass: builder.mutation({
        query(new_password) {
          return {
            url: `UPDATE_password.php`,
            method: "POST",
            body: JSON.stringify(new_password),
          };
        },
    }),
   
    };
  }})
  export const { useLoginMutation, useRegisterMutation, useResetPassMutation,useGetOTPMutation,useUpdatePassMutation } =
  AuthSlice;