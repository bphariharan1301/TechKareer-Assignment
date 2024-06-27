import * as React from 'react';
import '../navBar/NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const spacing = 8; 
  
    return (
      <AppBar position="static" className='header'>
        <Container maxWidth="xl" className='container'>
          <div className='logo_container'>
          <svg width="45" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg"  className='logoName'>
<path d="M2.68 0.38V15H0.12V0.38H2.68ZM0.56 15V12.64H8.78V15H0.56ZM9.74641 10.04C9.74641 9.01333 9.97307 8.11333 10.4264 7.34C10.8797 6.55333 11.5064 5.94 12.3064 5.5C13.1064 5.06 14.0131 4.84 15.0264 4.84C16.0531 4.84 16.9597 5.06 17.7464 5.5C18.5464 5.94 19.1731 6.55333 19.6264 7.34C20.0797 8.11333 20.3064 9.01333 20.3064 10.04C20.3064 11.0667 20.0797 11.9733 19.6264 12.76C19.1731 13.5333 18.5464 14.14 17.7464 14.58C16.9597 15.02 16.0531 15.24 15.0264 15.24C14.0131 15.24 13.1064 15.02 12.3064 14.58C11.5064 14.14 10.8797 13.5333 10.4264 12.76C9.97307 11.9733 9.74641 11.0667 9.74641 10.04ZM12.1864 10.04C12.1864 10.64 12.3064 11.1667 12.5464 11.62C12.7997 12.0733 13.1331 12.4267 13.5464 12.68C13.9731 12.9333 14.4664 13.06 15.0264 13.06C15.5864 13.06 16.0797 12.9333 16.5064 12.68C16.9331 12.4267 17.2664 12.0733 17.5064 11.62C17.7464 11.1667 17.8664 10.64 17.8664 10.04C17.8664 9.42667 17.7464 8.9 17.5064 8.46C17.2664 8.00667 16.9331 7.65333 16.5064 7.4C16.0797 7.14667 15.5864 7.02 15.0264 7.02C14.4664 7.02 13.9731 7.14667 13.5464 7.4C13.1331 7.65333 12.7997 8.00667 12.5464 8.46C12.3064 8.9 12.1864 9.42667 12.1864 10.04ZM21.6805 9.84C21.6805 8.88 21.8738 8.02667 22.2605 7.28C22.6605 6.52 23.2138 5.92 23.9205 5.48C24.6271 5.04 25.4471 4.82 26.3805 4.82C27.2205 4.82 27.9405 5.00667 28.5405 5.38C29.1405 5.74 29.5605 6.24667 29.8005 6.9L29.5405 7.12L29.7405 5.12H32.0005V14.5C32.0005 15.5933 31.7871 16.54 31.3605 17.34C30.9471 18.1533 30.3538 18.7733 29.5805 19.2C28.8205 19.64 27.9005 19.86 26.8205 19.86C25.4071 19.86 24.2471 19.48 23.3405 18.72C22.4338 17.96 21.9005 16.92 21.7405 15.6H24.1805C24.2605 16.24 24.5271 16.74 24.9805 17.1C25.4471 17.46 26.0605 17.64 26.8205 17.64C27.6605 17.64 28.3271 17.3933 28.8205 16.9C29.3271 16.42 29.5805 15.7667 29.5805 14.94V12.48L29.8605 12.74C29.6205 13.3667 29.1805 13.8667 28.5405 14.24C27.9005 14.6133 27.1605 14.8 26.3205 14.8C25.3871 14.8 24.5738 14.5867 23.8805 14.16C23.1871 13.7333 22.6471 13.1467 22.2605 12.4C21.8738 11.6533 21.6805 10.8 21.6805 9.84ZM24.1405 9.78C24.1405 10.34 24.2471 10.84 24.4605 11.28C24.6871 11.7067 25.0005 12.0467 25.4005 12.3C25.8005 12.5533 26.2671 12.68 26.8005 12.68C27.3605 12.68 27.8405 12.56 28.2405 12.32C28.6538 12.0667 28.9671 11.7267 29.1805 11.3C29.4071 10.86 29.5205 10.3533 29.5205 9.78C29.5205 9.20667 29.4138 8.71333 29.2005 8.3C28.9871 7.87333 28.6738 7.54 28.2605 7.3C27.8605 7.06 27.3738 6.94 26.8005 6.94C26.2538 6.94 25.7805 7.06667 25.3805 7.32C24.9805 7.56 24.6738 7.89333 24.4605 8.32C24.2471 8.74667 24.1405 9.23333 24.1405 9.78ZM33.9456 10.04C33.9456 9.01333 34.1723 8.11333 34.6256 7.34C35.079 6.55333 35.7056 5.94 36.5056 5.5C37.3056 5.06 38.2123 4.84 39.2256 4.84C40.2523 4.84 41.159 5.06 41.9456 5.5C42.7456 5.94 43.3723 6.55333 43.8256 7.34C44.279 8.11333 44.5056 9.01333 44.5056 10.04C44.5056 11.0667 44.279 11.9733 43.8256 12.76C43.3723 13.5333 42.7456 14.14 41.9456 14.58C41.159 15.02 40.2523 15.24 39.2256 15.24C38.2123 15.24 37.3056 15.02 36.5056 14.58C35.7056 14.14 35.079 13.5333 34.6256 12.76C34.1723 11.9733 33.9456 11.0667 33.9456 10.04ZM36.3856 10.04C36.3856 10.64 36.5056 11.1667 36.7456 11.62C36.999 12.0733 37.3323 12.4267 37.7456 12.68C38.1723 12.9333 38.6656 13.06 39.2256 13.06C39.7856 13.06 40.279 12.9333 40.7056 12.68C41.1323 12.4267 41.4656 12.0733 41.7056 11.62C41.9456 11.1667 42.0656 10.64 42.0656 10.04C42.0656 9.42667 41.9456 8.9 41.7056 8.46C41.4656 8.00667 41.1323 7.65333 40.7056 7.4C40.279 7.14667 39.7856 7.02 39.2256 7.02C38.6656 7.02 38.1723 7.14667 37.7456 7.4C37.3323 7.65333 36.999 8.00667 36.7456 8.46C36.5056 8.9 36.3856 9.42667 36.3856 10.04Z" fill="#DC4A2D"/>
</svg>
          </div>
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: '70px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '600px',
              margin: 'auto',
              marginTop: '10px !important'
            }}
          >
            <Toolbar disableGutters className='navBar' sx={{ width: '100%' }}>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Button
                  className="no-hover"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '2px solid #FCB4A5',
                    backgroundColor: '#DC4A2D',
                    color: 'white',
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    mx: 1,
                  }}
                >
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21.5V7.5C8 6.57003 8 6.10504 8.10222 5.72354C8.37962 4.68827 9.18827 3.87962 10.2235 3.60222C10.605 3.5 11.07 3.5 12 3.5C12.93 3.5 13.395 3.5 13.7765 3.60222C14.8117 3.87962 15.6204 4.68827 15.8978 5.72354C16 6.10504 16 6.57003 16 7.5V21.5M5.2 21.5H18.8C19.9201 21.5 20.4802 21.5 20.908 21.282C21.2843 21.0903 21.5903 20.7843 21.782 20.408C22 19.9802 22 19.4201 22 18.3V10.7C22 9.57989 22 9.01984 21.782 8.59202C21.5903 8.21569 21.2843 7.90973 20.908 7.71799C20.4802 7.5 19.9201 7.5 18.8 7.5H5.2C4.07989 7.5 3.51984 7.5 3.09202 7.71799C2.71569 7.90973 2.40973 8.21569 2.21799 8.59202C2 9.01984 2 9.57989 2 10.7V18.3C2 19.4201 2 19.9802 2.21799 20.408C2.40973 20.7843 2.71569 21.0903 3.09202 21.282C3.51984 21.5 4.0799 21.5 5.2 21.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  Jobs
                </Button>
                <Button
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'gray',
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    mx: 1,
                  }}
                >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V13.7C21 15.3802 21 16.2202 20.673 16.862C20.3854 17.4265 19.9265 17.8854 19.362 18.173C18.7202 18.5 17.8802 18.5 16.2 18.5H9.68375C9.0597 18.5 8.74767 18.5 8.44921 18.5613C8.18443 18.6156 7.9282 18.7055 7.68749 18.8285C7.41617 18.9671 7.17252 19.162 6.68521 19.5518L4.29976 21.4602C3.88367 21.7931 3.67563 21.9595 3.50054 21.9597C3.34827 21.9599 3.20422 21.8906 3.10923 21.7716C3 21.6348 3 21.3684 3 20.8355V8.3Z" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  Messages
                </Button>
                <Button
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'gray',
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    mx: 1,
                  }}
                >
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5295 8.85186C12.9571 9.25995 12.2566 9.5 11.5 9.5C9.567 9.5 8 7.933 8 6C8 4.067 9.567 2.5 11.5 2.5C12.753 2.5 13.8522 3.15842 14.4705 4.14814M6 20.5872H8.61029C8.95063 20.5872 9.28888 20.6277 9.61881 20.7086L12.3769 21.3789C12.9753 21.5247 13.5988 21.5388 14.2035 21.4214L17.253 20.8281C18.0585 20.6712 18.7996 20.2854 19.3803 19.7205L21.5379 17.6217C22.154 17.0234 22.154 16.0524 21.5379 15.4531C20.9832 14.9134 20.1047 14.8527 19.4771 15.3103L16.9626 17.1449C16.6025 17.4081 16.1643 17.5498 15.7137 17.5498H13.2855L14.8311 17.5498C15.7022 17.5498 16.4079 16.8633 16.4079 16.0159V15.7091C16.4079 15.0055 15.9156 14.392 15.2141 14.2219L12.8286 13.6417C12.4404 13.5476 12.0428 13.5 11.6431 13.5C10.6783 13.5 8.93189 14.2988 8.93189 14.2988L6 15.5249M20 7C20 8.933 18.433 10.5 16.5 10.5C14.567 10.5 13 8.933 13 7C13 5.067 14.567 3.5 16.5 3.5C18.433 3.5 20 5.067 20 7ZM2 15.1L2 20.9C2 21.4601 2 21.7401 2.10899 21.954C2.20487 22.1422 2.35785 22.2951 2.54601 22.391C2.75992 22.5 3.03995 22.5 3.6 22.5H4.4C4.96005 22.5 5.24008 22.5 5.45399 22.391C5.64215 22.2951 5.79513 22.1422 5.89101 21.954C6 21.7401 6 21.4601 6 20.9V15.1C6 14.5399 6 14.2599 5.89101 14.046C5.79513 13.8578 5.64215 13.7049 5.45399 13.609C5.24008 13.5 4.96005 13.5 4.4 13.5L3.6 13.5C3.03995 13.5 2.75992 13.5 2.54601 13.609C2.35785 13.7049 2.20487 13.8578 2.10899 14.046C2 14.2599 2 14.5399 2 15.1Z" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  Payments
                </Button>
              </Box>
            </Toolbar>
 
          </Box>
   
          <Box className='notification'>
            <div className='bell'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6666 28H13.3333M23.9999 10.6667C23.9999 8.54496 23.1571 6.51012 21.6568 5.00983C20.1565 3.50954 18.1217 2.66669 15.9999 2.66669C13.8782 2.66669 11.8434 3.50954 10.3431 5.00983C8.8428 6.51012 7.99994 8.54496 7.99994 10.6667C7.99994 14.7869 6.96057 17.608 5.7995 19.4739C4.82011 21.0479 4.33042 21.8348 4.34838 22.0544C4.36826 22.2975 4.41976 22.3902 4.61564 22.5355C4.79256 22.6667 5.59006 22.6667 7.18508 22.6667H24.8148C26.4098 22.6667 27.2073 22.6667 27.3842 22.5355C27.5801 22.3902 27.6316 22.2975 27.6515 22.0544C27.6695 21.8348 27.1798 21.0479 26.2004 19.4739C25.0393 17.608 23.9999 14.7869 23.9999 10.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
         
<div>
<svg width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style={{marginRight: 0 + 'em'}}>
    <circle cx="512" cy="512" r="512" style={{fill:'#0052cc'}} />
    <path d="M413.7 462.6c-4.6-6-13.2-7.2-19.3-2.6-1.8 1.3-3.2 3.1-4.1 5.1L272 701.9c-3.5 7 .7 15.5 6.3 19 2 1 4.1 1.5 6.3 1.5h164.9c5.4.1 10.4-2.9 12.7-7.8 35.5-73.6 14-185.3-48.5-252zm86.9-215.4c-60 92.4-67 209.5-18.2 308.3l79.5 159c2.4 4.8 7.3 7.8 12.7 7.8h164.9c7.8 0 14.2-6.3 14.2-14.2 0-2.2-.5-4.4-1.5-6.3 0 0-221.8-443.7-227.4-454.8-3.2-6.6-11.2-9.4-17.9-6.2-2.8 1.5-5 3.7-6.3 6.4z" style={{fill:'#fff'}} />
  </svg>
</div>
<div className='down_arrow'>
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</div>
  
</Box>

        </Container>
      </AppBar>
    );
}
