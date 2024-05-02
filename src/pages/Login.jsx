import React, { useEffect } from "react";
import Header from "../components/Header";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../fuatures/user/userSlice";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSelector = useSelector((state) => state.auth);

  let schema = Yup.object().shape({
    email: Yup.string()
      .email("The email must be valid")
      .required("Email must be required"),
    password: Yup.string().required("Password must be required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  useEffect(() => {
    if (userSelector.user !== null && !userSelector.isError) {
      setTimeout(() => {
        navigate("/browse");
      }, 1000);
    }
  }, [userSelector]);

  return (
    <div>
      <Header languaje={false} signIn={false} />

      <div className="absolute">
        <img
          src="https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1-1536x864.jpg"
          alt="banner"
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="absolute z-10 inset-0 bg-black opacity-70"></div>

      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="flex flex-col z-50 w-3/12 p-12 my-36 left-0 right-0  mx-auto rounded-md items-center justify-center absolute bg-black opacity-90"
      >
        <h1 className="text-3xl  text-white mb-5 font-bold">Login</h1>
        <div className="flex flex-col">
          <input
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            type="email"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <div className="text-rojo">
            {formik.touched.email && formik.errors.email ? (
              <div className="flex items-center gap-1">
                <IoIosCloseCircle size="15px" />
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <input
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            type="password"
            name="password"
            placeholder="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <div className="text-rojo">
            {formik.touched.password && formik.errors.password ? (
              <div className="flex items-center gap-1">
                <IoIosCloseCircle size="15px" />
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium"
          >
            Login
          </button>

          <p className="text-white mt-3">
            New to netflix
            <Link
              to="/register"
              className="ml-1 text-blue-900 font-medium cursor-pointer"
            >
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
