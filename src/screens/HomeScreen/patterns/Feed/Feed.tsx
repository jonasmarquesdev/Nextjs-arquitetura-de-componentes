import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import React from "react";

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Button>
        Newsletter
      </Button>
      <Button.Base href="http://github.com/jonasmarquesdev">
        <Image 
          styleSheet={{
            width: '128px',
            height: '128px',
            borderRadius: '100%'
          }}
          src="https://github.com/jonasmarquesdev.png" 
          alt="Imagem de perfil" 
        />
      </Button.Base>
      <Link href="http://youtube.com">
        <Icon name="youtube" />
      </Link>
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>Feed Header</Text>
    </Box>
  );
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
}
