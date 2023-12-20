import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange(event) {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      })
    },
  };
}

export default function NewsletterScreen() {
  const form = useForm({
    initialValues: {
      emailNewsletter: ""
    }
  });

  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();

          // Validar
          if(!form.values.emailNewsletter.includes("@")) {
            alert("Você precisa informar um email valido!");
            return;
          }
          alert("Você foi cadastrado com sucesso! Cheque seu email para garantir");

          // Enviar para o servidor o email
          fetch("/api/newsletter/optin", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(form.values),
          })
          .then(async (respostaDoServer) => {
            console.log(await respostaDoServer.json());
          })
        }}
      >
        <Box
          styleSheet={{
            alignItems: 'center',
            width: '100%',
            maxWidth: '550px',
            padding: '16px',
          }}
        >
          <Image 
            src="https://github.com/jonasmarquesdev.png" 
            alt="" 
            styleSheet={{
              borderRadius: '100%',
              width: '100px',
              marginTop: '16px',
              marginBottom: '16px',
            }}
          />
          <Text variant="heading3">
            Newsletter do JonasMarquesDev
          </Text>
            <NewsletterTextField
              placeholder="Informe seu email"
              name="emailNewsletter"
              value={form.values.emailNewsletter}
              onChange={form.handleChange}
            />
            <Button fullWidth styleSheet={{ marginTop: '16px' }}>
              Cadastrar
            </Button>
        </Box>
      </form>
    </Box>
  );
}

interface NewsletterTextFieldProps {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function NewsletterTextField(props: NewsletterTextFieldProps) {
  return (
    <Box
      styleSheet={{
        maxWidth: '300px',
        width: '100%',
      }}
    >
      <BaseComponent 
        as="input"
        {...props}
        styleSheet={{
          border: "1px solid rgb(195,195,195)",
          borderRadius: '4px',
          padding: '8px',
          width: '100%',
        }}
      />
    </Box>
  );
}
