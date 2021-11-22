import LoginForm from "components/LoginForm";
import BlankLayout from "layouts/BlankLayout";
import { ReactElement, useState } from "react";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  return (
    <>
      <div className="login">
        <LoginForm
          errorMessage={errorMsg}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault();
          }}
        />
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
