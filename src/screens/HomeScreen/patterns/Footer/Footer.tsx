import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        height: '120px',
        width: '100%',
        paddingVertical: '24px',
        paddingHorizontal: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Text variant="body2">
        Feito com ❤️ por Jonas Marques (JonasMarquesDev)
      </Text>
    </Box>
  );
}
