// import React, { useState } from 'react'
// import { AppBar, Tabs,Tab, Toolbar, Typography,Button,useTheme, useMediaQuery } from '@mui/material';
// import logo from '../Assets/Logo.png';
// import DrawerComp from './DrawerComp';
// import { Link } from 'react-router-dom';

// const PAGES = ["Home", "Services", "Blogs" ];


// const Navbar = () => {
//   // const [value, setvalue] = useState();
//   const theme = useTheme();
//   console.log(theme);
//   const isMatch = useMediaQuery(theme.breakpoints
//     .down('md'));
//     console.log(isMatch);
//   return (
//     <React.Fragment>
//      <AppBar sx={{background: "#fff" }} >
//       <Toolbar>
//         <Typography>
//         <img src={logo} title="WeCare" alt='We-Care' />
//         </Typography>
//         {
//           isMatch ? (
//             <>
//             <Typography>
//             WeCare
//             </Typography>
//             <DrawerComp/>
//             </>
//   ) 
//   <>
//     // <>
//     //  <Tabs>
//     //   {
//     //     PAGES.map((page,index) => (
//     //       <Tab component={Link} to={`/${page}`}key={index} label={page}/> 
//     //     ))
//     //   }
//     //           </Tabs>
//     //           <Button sx={{marginLeft: 'auto'}} variant="contained" href="/login">
//     //             Login{" "}
//     //             </Button>
//     //           <Button sx={{marginLeft:"50px", marginRight:"30px"}} variant="contained" href="/register">
//     //             Register{" "}
//     //             </Button>
//     // </>
//  </>
//         }
       
//       </Toolbar>
//      </AppBar>

              
              
//     </React.Fragment>
//   )
// }

// export default Navbar
