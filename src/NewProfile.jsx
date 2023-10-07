import "./NewProfile.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppContext } from "./App.jsx";
import * as yup from "yup";
import { useContext, useEffect } from "react";

export const NewProfile = () => {
  const { username, setUsername, setCurrentLink } = useContext(AppContext);

  useEffect(() => {
    setCurrentLink(4);
  });

  const schema = yup.object().shape({
    username: yup.string().required("username is required!"),
    email: yup.string().email().required("email is required!"),
    age: yup
      .number()
      .typeError("age must be a number")
      .positive()
      .integer()
      .min(18)
      .max(99)
      .required(),
    password: yup.string().min(8).max(16).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords don't match")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setUsername(data.username);
  };

  return (
    <>
      <div className="profile">
        <h1>PROFILE</h1>
        <p className="title">
          Hi this is your profile and your username is: {username}
        </p>
      </div>
      <h2 className="sign"> REGISTER</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="newProfileForm">
        <input
          type="text"
          placeholder="Username..."
          {...register("username")}
        />

        <input type="text" placeholder="Email..." {...register("email")} />

        <input type="number" placeholder="Age..." {...register("age")} />

        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />

        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />

        <input className="btn-submit" type="submit" />

        <div className="errors-list">
          <p className="errors - 1 ">{errors.username?.message}</p>
          <p className="errors">{errors.email?.message}</p>
          <p className="errors">{errors.age?.message}</p>
          <p className="errors">{errors.password?.message}</p>
          <p className="errors">{errors.confirmPassword?.message}</p>
        </div>
      </form>
    </>
  );
};
