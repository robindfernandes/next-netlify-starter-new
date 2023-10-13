import { Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    type: 'light', // Specify 'light' or 'dark'
    primary: {
      main: '#06dee3', // Customize primary color
    },
    secondary: {
      main: '#ff6f61', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h6: {
      color: 'black',
    },
    Button: {
      fontFamily: 'Lato, sans-serif',
      h6: {
        color: 'black',
      },
    body1: {
      color: '#000000',
    },
  },
},
});

const Home = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <ThemeProvider theme={theme}>
  <div className="container" style={{ height: '100vh'}}>
    <div
     style={{
      backgroundImage: 'url("/1.png")',
      backgroundSize: '100% 100%', // Cover the entire container
      backgroundRepeat: 'no-repeat',
      }}
    >
      <Container> 
        <Typography variant="h6" style={{ textAlign: 'center', color: 'black' }}>
       <strong>TALENT ACQUISITION EXPERTS</strong>
       </Typography>
        <Typography variant="h4" component="h1" style={{ color: 'black' }}>
        <strong>Welcome to REALM HR SERVICES, your trusted partner in recruitment solutions.</strong>
        </Typography>
        <Typography variant="body1" style={{ color: 'black' }}>
        <strong>At REALM HR Services, we understand that finding the right talent is crucial for the success of any organization. We specialize in providing comprehensive recruitment services tailored to meet the unique needs of businesses across various industries.</strong>
        </Typography>
       {/*
        <Typography variant="body1" style={{ color: 'black' }}>
        <strong>With our deep industry knowledge, extensive networks, and proven methodologies, we strive to connect exceptional talent with exceptional opportunities.</strong>
        </Typography> 
            */}
      </Container>
    </div>
    </div>
</ThemeProvider>
  );
};

export default Home;
