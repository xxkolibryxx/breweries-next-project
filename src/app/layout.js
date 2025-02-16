import Navbar from '../components/Navbar/Navbar';
import { Provider } from '../components/ui/provider';

export const metadata = {
  title: 'Breweries API',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <Provider>
          <header>
            <Navbar />
          </header>
          {children}
        </Provider>
      </body>
    </html>
  );
}
