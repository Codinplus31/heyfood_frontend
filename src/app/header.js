'use client';

import React, { useState, useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import { InputAdornment, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Radio,
  RadioGroup,
  FormControlLabel,
  Container,
  FormControl,
  FormLabel, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import LockOpenIcon from '@mui/icons-material/LockOpen';

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transform: 'none',
  backgroundColor: "white",
//   width: "100%",
  transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1)',
}));

const LogoLink = styled('a')(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '20ch',
  },
}));
import { MyContext } from './page';
export default function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [searchenter, setsearchenter] = useState(false)
const [drawerOpen, setDrawerOpen] = useState(false); // <-- Drawer state
  const [sortKey, setSortKey] = useState("Most Popular");
 const [sortclick, setsortclick] = useState(false);
 const {searchQuery, setSearchQuery, mainsort, setmsort, sortdata, data, setsortdata, filteredVendors, setFilteredVendors} = useContext(MyContext)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  

  useEffect(() => {
    if(data !== null){
    let sorted = [...data?.restaurants]; // Always start with a copy

      if (sortKey === "Most Rated") {
          // Sort by stars (desc)
        sorted = sorted.sort((a, b) => Number(b.stars) - Number(a.stars));
        }
     else if (sortKey === "Highest rated") {
         // Sort by rating (desc)
        sorted = sorted.sort((a, b) => Number(b.rating) - Number(a.rating));
        }
     else if (sortKey === "Newest") {
        // Sort by created_at (newest first) — DESC by date
        sorted = sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
       }
     else if (sortKey === "Most Popular") {
                                              // Sort by stars DESC, then rating DESC as tiebreaker
        sorted = sorted.sort((a, b) => {
        const starDiff = Number(b.stars) - Number(a.stars);
        if (starDiff !== 0) return starDiff;
        return Number(b.rating) - Number(a.rating);
               });
       }
     else if (sortKey === "Nearest") {
       // 📍 Placeholder — implement geolocation sort later
      // For now, leave unsorted or sort by name or ID
        console.log("Nearest sorting not implemented yet");
      }
      setsortdata(sorted);
    }
 }, [sortKey, data]);

const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton sx={{ml: '80%'}}>
        <CloseIcon />
      </IconButton>
      <List>
        
        <ListItem  button>
          <LockOpenIcon />

          <span style={{marginLeft: "1em", fontSize: "1rem", fontWeight: 400}}>Sign in</span>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Add your restaurant" primaryTypographyProps={{
      sx: {
        fontSize: '80%', // smaller font size
        fontWeight: 'bold',  // make it bold
      }
    }}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Become a delivery rider" primaryTypographyProps={{
      sx: {
        fontSize: '80%', // smaller font size
        fontWeight: 'bold',  // make it bold
      }
    }} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Go to Homepage" primaryTypographyProps={{
      sx: {
        fontSize: '80%', // smaller font size
        fontWeight: 'bold',  // make it bold
      }
    }} />
        </ListItem>
      </List>
      <Box>
        <Box sx={{display: "flex", width: "90%"}}>
          <img /> 
          <span>Experience the
Heyfood mobile app</span> 
        </Box>
        <Box sx={{display: "flex", width: "90%"}}>
<Button
              variant="contained"
              disableElevation
              startIcon={<ShoppingCartIcon sx={{display: {xs: "none", sm: "block"}}} color="white" fontSize="small" />}
       

                sx={{
                bgcolor: 'common.black',
                color: 'common.white',
                padding: "8px 24px",
                borderRadius: '5em',
                '&:hover': {
                  bgcolor: 'success.main', // Uses green from theme
                }
              }}
            >
              
              <Typography component={'span'} variant='body2' sx={{display: {xs: "none", sm: "block"}}}>App store</Typography>
            </Button>
            <Button
              variant="contained"
              disableElevation
              startIcon={<ShoppingCartIcon sx={{display: {xs: "none", sm: "block"}}} color="white" fontSize="small" />}
       

                sx={{
                bgcolor: 'common.black',
                color: 'common.white',
                padding: "8px 24px",
                borderRadius: '5em',
                '&:hover': {
                  bgcolor: 'success.main', // Uses green from theme
                }
              }}
            >
              
              <Typography component={'span'} variant='body2' sx={{display: {xs: "none", sm: "block"}}}>Play Store</Typography>
            </Button>

        </Box>
      </Box>
    </Box>
  );

const SearchContent = ()=> (
    <Box
      sx={{ width: "100%", display:searchenter == true ? "block":"none",height: "100%", overflowY:"scroll", position: "absolute", top:{sm:"4%",xs:"18%"}, zIndex: 999, left: "0px", background: "white"}}
      role="presentation"
      
    >
      <Typography variant="h5" sx={{marginLeft:"0.7em", fontWeight: 690}}>
        Categories
      </Typography>
      
        <List sx={{width: "100%"}}>

      {data !== null && data.tags.map((e,i)=> (<ListItem onClick={()=> {

    const results = filterVendorsBySearch(data?.restaurants, e.name);
      setsearchenter(false)
  setSearchQuery(e.name)
   //  alert(JSON.stringify(results))
    setFilteredVendors(results);

        
      }} key={i} sx={{height: "70px", borderBottom: "1px solid #efefef", "&:hover": {
        background: "#e6e6e6"
      }}} button="true">
        <ListItemIcon>
          <img
            src="./fork.svg"
            alt="rider"
            style={{ width: 24, height: 24 }}
          />
        </ListItemIcon>
        <ListItemText
          primary={e.name}
          primaryTypographyProps={{
            sx: {
              fontSize: "80%",
              fontWeight: "bold",
            },
          }}
        />
      </ListItem>))}

    </List>
      
    </Box>
  );
                                              
  


function filterVendorsBySearch(vendors, query) {
    if (!query.trim()) return vendors;

      const lowerQuery = query.toLowerCase().trim();

       return vendors.filter(vendor => {
        const nameMatch = vendor.name.toLowerCase().includes(lowerQuery);
        const tagMatch = vendor.tag.some(tag => 
        tag.toLowerCase().includes(lowerQuery)
         );
          return nameMatch || tagMatch;
        });
        }



    //const [searchQuery, setSearchQuery] = useState("");

    // Filtered vendors (result of search)
                                                                                                                     

/*useEffect(() => {
  if(data !== null){
    const results = filterVendorsBySearch(data?.restaurants, searchQuery);
      setFilteredVendors(results);
}
      }, [searchQuery, data]);*/

const handleSearchSubmit = () => {
  if(data !== null){
    const results = filterVendorsBySearch(data?.restaurants, searchQuery);
      setsearchenter(false)
     // alert(JSON.stringify(results))
    setFilteredVendors(results);
}
};

  return (
    <div id="theAppBarId" style={{width: "100vw", borderBottom: "2px solid rgba(150, 150, 150, 0.1)"}}>
      <Toolbar className="jss279" sx={{ justifyContent:  'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center',  }} className="jss283">
          {/* Menu Icon */}
          <IconButton edge="start" color="" aria-label="menu"
            onClick={toggleDrawer(true)} sx={{ textTransform: 'none', color: 'black',  }}>
            <MenuIcon width="50" height="50"/>
          </IconButton>

          {/* Logo */}
          <LogoLink sx={{display: {lg: "block",xs: 'none', sm: 'none', md: 'block'}}} href="/stores">
            <img src="/logo.svg" alt="logo" width="40" height="40" />
          </LogoLink>

          {/* Set Location Button */}
          <Button
            id="setLocationButton"
            variant="text"
            startIcon={<LocationOnIcon width="50" height="50"/>}
            color="inherit"

            sx={{ display:{
              xs:"flex",
              sm: searchenter === true ? "none" : "flex"

            }, textTransform: 'none', color: 'black', marginLeft: "1rem" }}
          >
            Set Location
          </Button>
        </div>

        {/* Search Bar */}
        <Box
  component="form"
  onSubmit={(e) => {
    e.preventDefault(); // Prevent page reload
    handleSearchSubmit(); // Trigger search
  }}
  onClick={() => setsearchenter(true)}
  className="jss285"
sx={{borderRadius: "12rem", overflow:"hidden", width: searchenter === true ? "60%" : "15%", display: {xs: "none", sm: "block"} }}>

  <InputBase
    id="nonMobileSearchId"
    placeholder="Search restaurants or food"
    type="search"
    onClick={() => setsearchenter(true)}
    fullWidth
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)} // Still update state as they type
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearchSubmit();
      }
    }}
    startAdornment={
      <InputAdornment position="start" sx={{ ml: 1 }}>
        <img src="/tiny-search.svg" alt="search" />
      </InputAdornment>
    }
    
    sx={{
      '& .MuiInputBase-input': {
        padding: '0.5em 1.2em',
        fontSize: '103%',
        borderRadius: '3em',
        letterSpacing: '-0.5px',
        backgroundColor: '#F0F0F0',
      },
      backgroundColor: '#F0F0F0'
    }}
  />
</Box>

        
        
  <Box onClick={()=> setsearchenter(false)} sx={{display: {xs:"none", sm:searchenter == true ? "block": "none"},width: "60px"}}>
 <CloseIcon />
   </Box>
        {/* Close Button (e.g., for mobile) */}
        {/* <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          className="jss290 jss291 jss292"
          size="small"
        >
          <CloseIcon />
        </IconButton> */}

        {/* Sign In & Cart */}
        <Box className="jss289 jss290" sx={{display: {xs:"flex",sm:searchenter == true ? "none": 'flex'}, alignItems: 'center', gap: 4}}>
          <Button variant="text" color="inherit" sx={{color: 'black', fontWeight: 400, display: {xs:"none", sm: "flex"},}}>
            <Typography variant="body2" className="jss378">
              Sign In
            </Typography>
          </Button>

          <Badge badgeContent={0}  invisible={true} overlap="circular">
            <Button
              variant="contained"
              disableElevation
              startIcon={<ShoppingCartIcon sx={{display: {xs: "none", sm: "block"}}} color="white" fontSize="small" />}
       

                sx={{
                bgcolor: 'common.black',
                color: 'common.white',
                padding: "8px 24px",
                borderRadius: '5em',
                '&:hover': {
                  bgcolor: 'success.main', // Uses green from theme
                }
              }}
            >
              <ShoppingCartIcon sx={{display: {xs: "block", sm: "none"}}} color="white" fontSize="small" />
              <Typography component={'span'} variant='body2' sx={{display: {xs: "none", sm: "block"}}}>Cart • 0</Typography>
            </Button>
          </Badge>
        </Box>
      </Toolbar>
      <Toolbar sx={{justifyContent: "center", gap: "2em", display: {xs: "flex", sm: "none"}}} >
       
       {searchenter == true ? 
       <IconButton sx={{width:"10%"}} onClick={()=> setsearchenter(false)}>
        <CloseIcon />
       </IconButton>:""}
  <Box
  component="form"
  onSubmit={(e) => {
    alert("yes")
    e.preventDefault(); // Prevent page reload
    handleSearchSubmit(); // Trigger search
  }}
  onClick={() => setsearchenter(true)}
  sx={{borderRadius: "12rem", overflow:"hidden", width: searchenter === true ? "80%" : "80%", display: {xs: "block", sm: "none"} }}>

  <InputBase
    id="nonMobileSearchId"
    placeholder="Search restaurants or food"
    type="search"
    onClick={() => setsearchenter(true)}
    fullWidth
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)} // Still update state as they type
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearchSubmit();
      }
    }}
    startAdornment={
      <InputAdornment position="start" sx={{ ml: 1 }}>
        <img src="/tiny-search.svg" alt="search" />
      </InputAdornment>
    }
    
    sx={{
      '& .MuiInputBase-input': {
        padding: '0.5em 1.2em',
        fontSize: '103%',
        borderRadius: '3em',
        letterSpacing: '-0.5px',
        backgroundColor: '#F0F0F0',
      },
      backgroundColor: '#F0F0F0'
    }}
  />
</Box>

        <IconButton onClick={()=> {
          if(sortclick === true){
            setsortclick(false);
          } else {
            setsortclick(true)
          }
        }}>
          <img src="/updown.svg" />
        </IconButton>
      </Toolbar>


      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>

      <Container sx={{width: "100%", height: sortclick == true ? "max-content" : "0px", display: {
      xs: sortclick == true ? "block" : "none",
      sm:"none"
    }, overflowY: "hidden", position: "absolute", top:"18%", zIndex: 999, left: "0px", overflow: "hidden", background: "white" }}>

      <Box  sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white", marginTop: "2px"}} >
      <Box sx={{width: "100%",  display: "flex", justifyContent: "space-between", alignItems: "center"}} >
        <Box >
        <img src="filter.svg" alt="sort" />
        <Typography variant="h5" sx={{fontWeight: 800}}>Sort</Typography>
        </Box>
        <IconButton onClick={()=> setsortclick(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      </Box>

      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <RadioGroup
          name="sortKey"
          value={sortKey}
          onChange={(e) => {
          setmsort(true)
          setSortKey(e.target.value)}}
        >
          <FormControlLabel
            value="Most Popular"
            control={<Radio sx={{background: "#efefef"}}/>}
            label="Most Popular"
          />
          <FormControlLabel value="Nearest" control={<Radio />} label="Nearest" />
          <FormControlLabel
            value="Highest rated"
            control={<Radio sx={{background: "#efefef"}}/>}
            label="Highest rated"
          />
          <FormControlLabel value="Newest" control={<Radio />} label="Newest" />
          <FormControlLabel
            value="Most Rated"
            control={<Radio sx={{background: "#efefef"}}/>}
            label="Most Rated"
          />
        </RadioGroup>
      </FormControl>
    </Container >

     <SearchContent />
    </div>
  );
}
