import Image from "next/image";
import { useRef} from 'react';
import {
  Box,
  Typography,
  Button, 
  IconButton,
  Stack,
  Card,
  CardContent,
  Container
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Cards({i, data}) {
  let arr = [0, 0, 0, 0, 0];
// const vendors = [
//   {
//     "id": 1,
//     "name": "AVO Cuisine",
//     "tag": ["Rice", "Chicken", "Shawarma"],
//     "stars": "0",
//     "rating": "5",
//     "img": "https://firebasestorage.googleapis.com/...",
//     "open_time": "08:00:00",
//     "close_time": "21:00:00",
//     "discount": null,
//     "tag_id": [1, 2, 3],
//     "genre": ["Spend Less, Order More!🤩", "Free drinks for you! 🥂"]
//   },
//   {
//     "id": 2,
//     "name": "Chibest Restaurants",
//     "tag": ["Native corner"],
//     "stars": "1",
//     "rating": "1.5",
//     "img": "https://firebasestorage.googleapis.com/...",
//     "open_time": "08:00:00",
//     "close_time": "22:00:00",
//     "discount": null,
//     "tag_id": [36],
//     "genre": ["Say no to Market Stress🙅‍♀️", "Party Jollof in IB", "Free drinks for you! 🥂"]
//   }
// ];

// Utility function
function getRestaurantStatus(open_time, close_time) {
  const now = new Date();

  const [openHour, openMinute] = open_time.split(":").map(Number);
  const [closeHour, closeMinute] = close_time.split(":").map(Number);

  const openTime = new Date();
  openTime.setHours(openHour, openMinute, 0, 0);

  const closeTime = new Date();
  closeTime.setHours(closeHour, closeMinute, 0, 0);

  let label = "";
  let bgColor = "";

  if (now < openTime) {
    label = `Opens at ${openHour % 12 || 12}:${openMinute
      .toString()
      .padStart(2, "0")} ${openHour >= 12 ? "PM" : "AM"}`;
    bgColor = "#FFA900";
  } else if (now >= closeTime) {
    label = "Currently Closed";
    bgColor = "#FF6A5E";
  } else if (closeTime - now <= 3 * 60 * 60 * 1000) {
    label = `Closes at ${closeHour % 12 || 12}:${closeMinute
      .toString()
      .padStart(2, "0")} ${closeHour >= 12 ? "PM" : "AM"}`;
    bgColor = "#00A205";
  } else {
    label = "Open Now";
    bgColor = "#00A205";
  }

  return { label, bgColor };
}


  
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // scroll 80% of visible area
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  function desc(e){
  if(e == 0){
    return "Mouthwatering deals 4 you!"
  }
  if(e === 1){
    return "Enjoy free drinks on your order"
  }
  if(e == 2){
    return "Enjoy free drinks on your order"
  }

  if(e == 3){
    return "Best of the best!"
  }

  if(e == 4){
    return "Home away from home!"
  }

  if(e == 5){
    return "Market runs? No wahala! Shop here!";
  }
  }

  return (
    <Container sx={{ width: {xs: "100%", sm:"94%"}, marginBottom: "4em" }}>
      <Stack direction="row" justifyContent="space-between">
        <Box >
        <Typography variant="h4" sx={{ fontSize: {xs: "120%", sm:"175%"}, fontWeight: 600 }}>
          {data.genre}
        </Typography>
          <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: "0.3em" }}
              >
               { desc(i)}
              </Typography>
        </Box>
        <Box
          sx={{
            width: "max-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Button
            variant="text"
            color="inherent"
            sx={{ color: "black", textTransform: "none" }}
          >
            See all
          </Button>
          <Box sx={{ display: {xs:"none", sm:"flex"}, gap: "15px" }}>
            <IconButton
              onClick={() => handleScroll("left")}
              sx={{ background: "#EEEEEE" }}
            >
              <ArrowBackIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton
              onClick={() => handleScroll("right")}
              sx={{ background: "#EEEEEE" }}
            >
              <ArrowForwardIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Box>
      </Stack>

      <Box
        ref={scrollRef}
        id="scroll"
        sx={{
          width: "100%",
          height: "max-content",
          marginTop: "20px",
          display: "flex",
          // gap: "4em",
          overflowX: "auto",
          scrollBehavior: "smooth",
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {data.vendors.map((e, index) => (
          <Box key={index} sx={{ 
            // width: {lg:' 26.5vw', xs: '34.5vw'}, minWidth: {xs: "48%",  
            // lg: "26.5vw"},
            flex: "0 0 auto", // prevent shrinking
              flexBasis: { xs: '21.5vw', lg: "34.5vw" },
              mr: { xs: "1em", lg: "0.3em" },
             height: "max-content",
              // mr: { xs: "1em", lg: "2em" }, 
              }}>
            <Card
              elevation={0}
              sx={{
                backgroundImage: `url('${e.img}')`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                aspectRatio: 2.66667 / 1,
                height: "122px",
                color: "white",
                width: "100%"
              }}
            >
              <CardContent
                sx={{
                  marginTop: "auto",
                  position: "relative",
                  height: "100%",
                  width: "100%"
                }}
              >
                {e.discount && <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    background: "rgba(0, 0, 0, 0.8)",
                    padding: "0.3em 1.2em",
                    paddingBlock: "6px",
                    position: "absolute",
                    top: "10px",
                    fontSize: "92%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "3em",
                  }}
                >
                  {e.discount}
                </Typography>}
                
{/*  <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    background: "#FFA900",
                    paddingInline: "10px",
                    paddingBlock: "6px",
                    borderRadius: "0.3em",
                    position: "absolute",
                    bottom: "50px",
                    fontSize: "92%",
                  }}
                >
                  Opens at {e.open_time} AM
                </Typography> */}

{(() => {
    const { label, bgColor } = getRestaurantStatus(e.open_time, e.close_time);
    return (
      <Typography
        key={e.id}
        component="span"
        variant="body1"
        sx={{
          background: bgColor,
          paddingInline: "10px",
          paddingBlock: "6px",
          borderRadius: "0.3em",
          position: "absolute",
          bottom: "50px",
          fontSize: "92%",
        }}
      >
        {label}
      </Typography>
    );
  })()}

                    
              </CardContent>
            </Card>
            <Card elevation={0} sx={{ marginTop: "1em" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, color: "black", marginBottom: "0.3em" }}
                noWrap
              >
                {e.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: "0.3em" }}
              >
                {e.tag.join(", ")}
              </Typography>
              <Box sx={{display: "flex", alignItems: "center", gap: "9px", marginBottom: "0.3em"}}> 
                <div style={{display: "flex", gap: "5px"}}> 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_10996_11354)"> <path d="M15.9644 6.14218C15.8788 5.87882 15.6512 5.68688 15.3772 5.64711L10.7305 4.97199L8.65232 0.76097C8.52978 0.512684 8.27689 0.355469 8.00004 0.355469C7.72314 0.355469 7.47025 0.512684 7.34775 0.76097L5.26976 4.97194L0.622883 5.64707C0.348895 5.68688 0.121219 5.87882 0.0356762 6.14214C-0.0498662 6.4055 0.0214676 6.69457 0.219757 6.88782L3.58224 10.1651L2.78816 14.7936C2.74137 15.0665 2.85353 15.3423 3.07752 15.505C3.20423 15.5971 3.35432 15.644 3.50514 15.644C3.62089 15.644 3.73713 15.6164 3.84357 15.5604L7.99999 13.3754L12.1564 15.5604C12.2634 15.6167 12.3807 15.6435 12.4968 15.644C12.8981 15.6434 13.2232 15.318 13.2232 14.9166C13.2232 14.8607 13.2169 14.8063 13.205 14.754L12.4178 10.1651L15.7803 6.88782C15.9786 6.69457 16.0499 6.4055 15.9644 6.14218Z" fill="#3BB987"/> </g> <defs> <clipPath id="clip0_10996_11354"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg> 
                  <span>{e.stars}</span> 
                </div> 
                 <span>{e.rating}+ Ratings</span> 
                </Box>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}  
