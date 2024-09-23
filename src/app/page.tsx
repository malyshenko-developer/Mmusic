import HOME_STYLES from "@/styles/home/home.style";
import { Box, Button, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container component='main' maxWidth={false} sx={HOME_STYLES}>
      <Typography variant='h1'>
        Hello, Next!
      </Typography>
      <Typography variant='body1'>
        Текст...
      </Typography>
      <Button variant='text'>
        Тыкни на меня...
      </Button>
    </Container>
  );
}

export default Home;