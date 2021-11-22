import AppHead from "components/AppHead";

export default function BlankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHead />
      <main className="container">{children}</main>
      <style jsx>{`
        .container {
          padding: 50px 20px;
        }
      `}</style>
    </>
  );
}
