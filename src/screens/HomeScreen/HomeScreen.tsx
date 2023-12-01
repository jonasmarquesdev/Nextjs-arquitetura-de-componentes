import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: 'grey',
        flex: 1,
        alignItems: 'center'
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text>Últimas Atualizações</Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  );
}
