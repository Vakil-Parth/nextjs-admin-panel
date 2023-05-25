import '@/styles/globals.css'
import AppLayout from '@/layout/app-layout/app-layout';

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  if (Component.getLayout) {
    return getLayout(<Component {...pageProps} />);
  }

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
