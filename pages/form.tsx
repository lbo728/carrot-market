import { useForm } from "react-hook-form";

// Less code (c)
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

interface LoginForm {
  username: string;
  password: string;
  eamil: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {};
  console.log("im valid bby");
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: true,
        })}
        type="text"
        placeholder="Username"
        minLength={5}
      />
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: ftur })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
