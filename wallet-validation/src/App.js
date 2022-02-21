import LandingPage from './pages/landing-page';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WalletDetailsEntryPage from './pages/wallet-details-entry-page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/wallet-details-entry-page"
            element={<WalletDetailsEntryPage />}
          />
          <Route
            path="*"
            element={
              <main
                style={{
                  margin: '200px auto',
                  fontSize: '25px',
                  textAlign: 'center',
                }}
              >
                <p>
                  "Opps!!! you just hit an error" <br /> It seems the page you
                  are looking for is not available. <br />
                  <Link to="/" style={{ color: '#3877d3' }}>
                    Click here
                  </Link>{' '}
                  to safely return to the home page.
                </p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
