import LoginForm from "components/LoginForm";
import BlankLayout from "layouts/BlankLayout";
import { ReactElement, useState } from "react";
import fetchJson, { FetchError } from "lib/fetchJson";
import { useRouter } from "next/router";
import useUser from "lib/useUser";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  useUser({ redirectTo: "/profile", redirectIfFound: true });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      phone: event.currentTarget.phone.value,
    };

    try {
      await fetchJson("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/verify-login");
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  return (
    <>
      <div className="login">
        <LoginForm errorMessage={errorMsg} onSubmit={handleSubmit} />
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
