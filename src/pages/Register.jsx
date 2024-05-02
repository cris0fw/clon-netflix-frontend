import React, { useEffect } from "react";
import Header from "../components/Header";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register, resetState } from "../fuatures/user/userSlice";
import { useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSelector = useSelector((state) => state.auth);

  const { isSuccess } = userSelector;

  let schema = Yup.object().shape({
    name: Yup.string().required("The name is required"),
    email: Yup.string()
      .email("The email must be valid")
      .required("Email must be required"),
    password: Yup.string().required("Password must be required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(
        register({
          fullName: values.name,
          email: values.email,
          password: values.password,
        })
      );
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/login");
      }, 300);
    }
    return () => {
      dispatch(resetState());
    };
  }, [isSuccess]);

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
        <h1 className="text-3xl  text-white mb-5 font-bold">Signup</h1>
        <div className="flex flex-col">
          <input
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            type="text"
            name="name"
            placeholder="full name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <div className="text-rojo">
            {formik.touched.name && formik.errors.name ? (
              <div className="flex items-center gap-1">
                <IoIosCloseCircle size="15px" />
                {formik.errors.name}
              </div>
            ) : null}
          </div>

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
            Signup
          </button>

          <p className="text-white mt-3">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 text-blue-900 font-medium cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
