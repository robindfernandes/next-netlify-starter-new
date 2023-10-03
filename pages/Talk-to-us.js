import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
const Home = () => {
    // Define state to manage the visibility of the dropdown menu
    const [isMenuVisible, setMenuVisible] = useState(true);
  
    // Function to toggle the visibility of the dropdown menu
      const toggleMenu = () => {
      setMenuVisible(!isMenuVisible);
  };
  return (
    <div className="container">
          <Head>
            <title>RealmHRServices</title>
             <link rel="icon" href="/logo-realm.png" />
          </Head>
          <div className="centered-content">
          <header>
            <div className="header-container">
            <div className="button-container">
              {isMenuVisible && (
                <>
                <Link href="/who-we-are"><button className="menu-link-button"><strong>Who we are</strong></button>
                </Link>
                <Link href="/clients-testimonials"><button className="menu-link-button"><strong>Clients Testimonials</strong></button>
                  </Link>
                  <Link href="/Talk-to-us"><button className="menu-link-button"><strong>Talk to us</strong></button>
                  </Link>
                </>
                )}
            </div>  
            </div>
          </header>  
            <img
              src="/1.png"
              alt="Image 1"
              className="image"
              style={{ width: '80%', height: '30%' }}
            />
            <p className="description">
            </p>   
            <div className="main-content">
          </div><hi><strong>Welcome to Realm HR SERVICES, your trusted partner in recruitment solutions.</strong></hi>
          <p>
          Email: <a href="mailto:teejay@realmhrservices.com"><strong>teejay@realmhrservices.com</strong></a>
        </p>
        <p>
          Phone: <strong>+91 93727 87542</strong>
        </p>
        <p>
          Website: <a href="https://www.realmhrservices.com"><strong>www.realmhrservices.com</strong></a>
        </p>
        <p>
          Connect with us on LinkedIn: <a href="https://www.linkedin.com/company/realmhrservices"><strong>Follow us on LinkedIn</strong></a>
        </p>
        <Link href="/index"><button className="menu-link-button"><strong>Back to Home</strong></button></Link>
        </div>
      </div>
  );
};
export default Home;