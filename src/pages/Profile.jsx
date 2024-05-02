import React from "react";
import Header from "../components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { editProfile, uploading } from "../fuatures/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();

  let schema = Yup.object().shape({
    fullname: Yup.string().required("Full name must be required"),
    email: Yup.string()
      .email("The email must be valid")
      .required("Email must be required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const file = document.querySelector('input[type="file"]').files[0];
      if (file) {
        await dispatch(uploading(file)); // Esperar a que la imagen se cargue antes de enviar la acción editProfile
      }

      dispatch(
        editProfile({
          fullName: values.fullname,
          email: values.email,
        })
      );
    },
  });

  return (
    <section>
      <Header />

      <div className="relative z-40 top-32 container">
        <h1 className="text-white text-xl font-semibold">Edit Profile user</h1>

        <div className="w-full flex justify-start items-start mt-3">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col  w-[400px] p-5 rounded-sm"
          >
            <input
              className="outline-none w-full p-2 my-2 rounded-sm bg-gray-800 text-white"
              type="text"
              name="fullname"
              placeholder="FullName"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-rojo">
              {formik.touched.fullname && formik.errors.fullname ? (
                <div className="flex items-center gap-1 ">
                  <IoIosCloseCircle size="15px" />
                  {formik.errors.fullname}
                </div>
              ) : null}
            </div>
            <input
              className="outline-none w-full p-2 my-2 rounded-sm bg-gray-800 text-white"
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-rojo">
              {formik.touched.email && formik.errors.email ? (
                <div className="flex items-center gap-1 ">
                  <IoIosCloseCircle size="15px" />
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(event) => {
                // Manejar el cambio de la imagen aquí
                const file = event.target.files[0];
                dispatch(uploading(file));
              }}
            />

            <button
              type="submit"
              className="text-white font-semibold w-[200px] mt-4 py-1 bg-rojo rounded-sm"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
