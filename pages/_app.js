// import App from 'next/app'
import "styles/style.css";
import "styles/bootstrap.css";
import "styles/responsive.css";

function MyApp({ Component, pageProps }) {
  return (
    <section className="light_theme">
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
