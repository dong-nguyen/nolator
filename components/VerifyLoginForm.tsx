import { FormEvent } from "react";
import Link from "next/link";

export default function VerifyLoginForm({
  errorMessage,
  onSubmit,
}: {
  errorMessage: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Type OTP</span>
        <input type="text" name="otp" required />
      </label>

      <button type="submit">Submit</button>

      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="back">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }

        .back {
          margin-top: 20px;
          text-align: center;
        }

        .back a {
          color: blue;
        }
      `}</style>
    </form>
  );
}
