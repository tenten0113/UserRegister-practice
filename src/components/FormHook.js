import React from 'react';
import { useForm } from "react-hook-form";
// import style from "./components/css/styled.css";

function FormHook(){
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form__label">user name</label>
        <input
          name="userName"
          type="name"
          ref={register({
            required: true,
            pattern:{
              value: /[A-Za-z]{3}/,
              message: 'error message',
            },
            minLength: 4
          })}
        />
        {errors.userName && "Your input is required"}
        <label className="form__label">password</label>
        <input
          name="password"
          type="password"
          ref={register({ required: true,
            minLength: 4,
            pattern: {
              value: /[A-Za-z]{3}/,
              message: 'error message',
            }
           })}
        />
        <input type="submit" name="保存"/>
      </form>
          {/* <p>{pattern.message}</p> */}
      </div>
    )
  }

  export default FormHook
