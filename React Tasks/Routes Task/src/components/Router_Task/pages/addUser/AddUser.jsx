import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./AddUser.scss";
import ROUTES from "../../routes/routes";

const validationSchema = yup.object({
  firstname: yup
    .string()
    .required("First Name is a required field")
    .trim()
    .max(100),
  lastname: yup.string().required("Last Name is a required field").trim(),
  email: yup
    .string()
    .required("Email is a required field")
    .trim()
    .email()
    .lowercase(),
  password: yup.string().required("Password is a required field"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

export default function AddUser({ addusers }) {
  const navigate = useNavigate();

  const handleSubmit = (values, formik) => {
    addusers({ ...values, id: Date.now().toString().slice(-5), isShow: false });

    formik.resetForm();
    navigate(ROUTES.HOME);
  };

  return (
    <div className="AddUser">
      <div className="main">
        <div className="Formik registrationPage">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={true}
            onSubmit={handleSubmit}
          >
            <Form className="_Formik Form">
              <div>
                <p>
                  First Name<span>*</span>
                </p>
                <Field type="text" name="firstname" className="firstname" />
                <ErrorMessage
                  name="firstname"
                  component="h6"
                  className="error"
                />
              </div>

              <div>
                <p>
                  Last Name<span>*</span>
                </p>
                <Field type="text" name="lastname" className="lastname" />
                <ErrorMessage
                  name="lastname"
                  component="h6"
                  className="error"
                />
              </div>

              <div>
                <p>
                  Email<span>*</span>
                </p>
                <Field type="email" name="email" className="email" />
                <ErrorMessage name="email" component="h6" className="error" />
              </div>

              <div>
                <p>
                  Password<span>*</span>
                </p>
                <Field type="password" name="password" className="password" />
                <ErrorMessage
                  name="password"
                  component="h6"
                  className="error"
                />
              </div>

              <div className="subbut">
                <Field
                  type="submit"
                  value="Add User"
                  name="submit"
                  className="submitbutton"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
