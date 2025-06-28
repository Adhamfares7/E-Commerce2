import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

export default function Login() {
 async function handelLogin(values) {
    console.log(values);
  // let res = await  axios.post('https://fakestoreapi.com/users', values)
  // console.log(res);         
  }



  let myValidation = yup.object().shape({

    email: yup.string().email("not valid email").required("email is required"),
    password: yup
      .string()
      .min(6, "min length is 6")
      .required("password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema : myValidation ,
    onSubmit: handelLogin,
  });

  return (
    <div className=" h-full my-28 px-10 md:p-28 py-28">
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-md mx-auto text-center"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          {formik.errors.email && formik.touched.email ?(
            <div className="w-full bg-red-600 rounded-2xl py-2 my-2 text-white">
                <span>{formik.errors.email}</span>
            </div>
          ) : null}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
                    {formik.errors.password && formik.touched.password ?(
            <div className="w-full bg-red-600 rounded-2xl py-2 my-2 text-white">
                <span>{formik.errors.password}</span>
            </div>
          ) : null}
        </div>


        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800  focus:ring-4 focus:outline-none focus:ring-red-300 transition-all cursor-pointer font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center"
          >
          Submit
        </button>
      </form>
    </div>
  );
}
