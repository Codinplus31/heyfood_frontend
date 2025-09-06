import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Container 
} from "@mui/material";

export default function Cards({data, setsort, isnull, issort, type}) {
  let dumb = [0, 0, 0, 0, 0, 0];

  return (
    <Container sx={{ width: {sm:"95%", xs:"100%"}, display: "flex", alignItems: "center", flexDirection: "column"}}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", margin: "0 auto" }}
      >
         <Box sx={{display: "flex", alignItems: "center", gap: "2em"}}>
        <Typography variant="h4" sx={{ fontSize: {xs: "120%", sm:"175%"}, fontWeight: 600 }}>
          {issort ===true && isnull !== null ? data.length + " Store near you":"All Restaurants"}
        </Typography>
          {issort === true ? <Button sx={{textTransform: "none", fontWeight: "600"}} onClick={()=> setsort(false)} variant="text" color="error">Reset</Button>: ""}
        </Box>
        {isnull !== null && issort === false && <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
          See all
        </Button>}
      </Stack>

      {/* ✅ Responsive Grid Layout */}
      <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",              // mobile ≤600px → 1 column
              sm: "repeat(2, 1fr)",   // ≥600px → 2 columns
              md: type == 2 || type === null ? "repeat(2, 1fr)" : "repeat(3, 1fr)",   // ≥900px still 2 columns
              lg: "repeat(3, 1fr)",   // ≥1300px → 3 columns
            },
            gap: "1.5em",
            marginTop: "20px",
            flex: "0 0 auto", // prevent shrinking
            flexBasis: { xs: "48%", md: "29vw", lg: "17.5vw" },
            //mr: { xs: "1em", lg: "2em" },
           //  width: {sm:"95%"}
          }}>
        {isnull !== null && data.map((e, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
            }}
          >
            {/* Banner Card */}
            <Card
              elevation={0}
              sx={{
                backgroundImage: `url('${e.img}')`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                aspectRatio: 2.66667 / 1,
                height: "122px",
                color: "white",
              }}
            >
              <CardContent
                sx={{
                  marginTop: "auto",
                  position: "relative",
                  height: "100%",
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
                <Typography
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
                </Typography>
              </CardContent>
            </Card>

            {/* Info Card */}

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
          </Card>
        ))}
        {isnull ===null && dumb.map((e, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
            }}
          >
            {/* Banner Card */}
            <Card
              elevation={0}
              sx={{
                
                background: "#E6E6E6",
                aspectRatio: 2.66667 / 1,
                height: "122px",
                color: "white",
              }}
            >
              <CardContent
                sx={{
                  marginTop: "auto",
                  position: "relative",
                  height: "100%",
                }}
              >
                   {/* <Typography
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
                            ..
                          </Typography> */}
                {/* <Typography
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
                  Opens at  AM
                </Typography> */}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card elevation={0} sx={{ marginTop: "1em" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500,  color: "transparent", marginBottom: "0.3em", background: "#E6E6E6" }}
                noWrap
              >
                ............. 
              </Typography>
              <Typography
                variant="body2"
                sx={{  color: "transparent", marginBottom: "0.3em",height: "4px", background: "#E6E6E6" }}
              >
                ..........
              </Typography>
              <Box sx={{display: "flex", alignItems: "center", gap: "9px", marginBottom: "0.3em"}}> 
                <div style={{display: "flex", gap: "5px", height: "4px",background: "#E6E6E6",  color: "transparent"}}> 
                  {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_10996_11354)"> <path d="M15.9644 6.14218C15.8788 5.87882 15.6512 5.68688 15.3772 5.64711L10.7305 4.97199L8.65232 0.76097C8.52978 0.512684 8.27689 0.355469 8.00004 0.355469C7.72314 0.355469 7.47025 0.512684 7.34775 0.76097L5.26976 4.97194L0.622883 5.64707C0.348895 5.68688 0.121219 5.87882 0.0356762 6.14214C-0.0498662 6.4055 0.0214676 6.69457 0.219757 6.88782L3.58224 10.1651L2.78816 14.7936C2.74137 15.0665 2.85353 15.3423 3.07752 15.505C3.20423 15.5971 3.35432 15.644 3.50514 15.644C3.62089 15.644 3.73713 15.6164 3.84357 15.5604L7.99999 13.3754L12.1564 15.5604C12.2634 15.6167 12.3807 15.6435 12.4968 15.644C12.8981 15.6434 13.2232 15.318 13.2232 14.9166C13.2232 14.8607 13.2169 14.8063 13.205 14.754L12.4178 10.1651L15.7803 6.88782C15.9786 6.69457 16.0499 6.4055 15.9644 6.14218Z" fill="#3BB987"/> </g> <defs> <clipPath id="clip0_10996_11354"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>  */}
                  <span>...</span> 
                </div> 
                 <span style={{ background: "#E6E6E6", color: "transparent"}}>..+ Ratings</span> 
                </Box>
            </Card>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
