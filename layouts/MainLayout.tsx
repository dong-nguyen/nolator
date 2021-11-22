import AppHead from "components/AppHead";
import Header from "components/Header";

export default function BlankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHead />
      <Header />
      <main>{children}</main>
    </>
  );
}
