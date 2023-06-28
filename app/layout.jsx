import "@styles/global.css";
import Nav from "@components/Navbar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt App",
  description: "Best place to latest AI prompt for your guidances",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
