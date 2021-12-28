import Link from "next/link";
import useUser from "lib/useUser";
import { useRouter } from "next/router";
import fetchJson from "lib/fetchJson";
import { MouseEvent } from "react";

export default function Header() {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  const handleLogout = async (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    mutateUser(await fetchJson("/api/logout", { method: "POST" }), false);
    router.push("/login");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {!user?.isLoggedIn ? (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <div onClick={handleLogout}>
                  Logout
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }

        li {
          margin-right: 1rem;
          display: flex;
        }

        li:first-child {
          margin-left: auto;
        }

        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        a img {
          margin-right: 1em;
        }

        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  );
}
