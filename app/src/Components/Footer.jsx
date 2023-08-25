import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      style={{ position: "fixed" }}
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main" ? "white" : "black",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        bottom:0
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Hightec Mobile
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="black" variant="subtitle1">
              &copy; Copywrite  {`${new Date().getFullYear()} |  hightec mobile | Marketplace | Social Inter-reactions`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;