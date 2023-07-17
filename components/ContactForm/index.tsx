import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react"

type Props = {
  state: {
    values: {
      name: string,
      email: string,
      title: string,
      message: string
    },
    isLoading: boolean
  },
  touched: {
    name: boolean,
    email: boolean,
    title: boolean,
    message: boolean
  },
  hasError: {
    name: boolean,
    email: boolean,
    title: boolean,
    message: boolean
  },
  handleChange: any,
  onBlur: any,
  onSubmit: () => {}
  main?: boolean
}

const ContactForm = ({
  state,
  touched,
  hasError,
  handleChange,
  onBlur,
  onSubmit,
  main
}: Props) => {
  const { values, isLoading } = state

  return (
    <>
        <div className={`w-[350px] ${main ? "w-full md:flex md:justify-between" : null} gap-x-5`}>
          <FormControl
            className="mb-4"
            isRequired
            isInvalid={touched.name && !values.name}
          >
            <FormLabel
              className="mb-1.5 text-dark-grey"
            >
              Imię i nazwisko
            </FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.600"
              focusBorderColor="#0133FF"
              autoComplete="username"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
          </FormControl>

          <FormControl
            className="mb-4"
            isRequired
            isInvalid={touched.email && !values.email || hasError.email}
          >
            <FormLabel
              className="mb-1.5 text-dark-grey"
            >
              Adres e-mail
            </FormLabel>
            <Input
              type="email"
              name="email"
              autoComplete="email"
              errorBorderColor="red.600"
              focusBorderColor="#0133FF"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {
              (touched.email && !values.email) ? (
                <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
              ) : (null)
            }
            {
              (hasError.email) ? (
                <FormErrorMessage>Nieprawidłowy adres email</FormErrorMessage>
              ) : (null)
            }
          </FormControl>
        </div>

        <FormControl
            className="mb-4"
          >
            <FormLabel
              className="text-dark-grey"
            >
              Tytuł wiadomości
            </FormLabel>
            <Input
              type="text"
              name="title"
              autoComplete="title"
              errorBorderColor="red.600"
              onChange={handleChange}
              value={values.title}
              onBlur={onBlur}
            />
          </FormControl>

          <FormControl
          className="mb-8"
          isRequired
          isInvalid={touched.message && !values.message}
        >
          <FormLabel
            className="text-dark-grey"
          >
            Wiadomość
          </FormLabel>
          <Textarea
            name="message"
            minLength={10}
            maxLength={40}
            autoComplete="message"
            errorBorderColor="red.600"
            focusBorderColor="#0133FF"
            rows={6}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
        </FormControl>

        <Button
          className="w-full sm:w-[250px] h-[45px] transition duration-500
            active:cursor-pointer"
          variant="primary"
          isLoading={isLoading}
          loadingText={'Wysyłanie'}
          isDisabled={!values.name || !values.email || !values.message}
          onClick={onSubmit}
        >
          Wyślij
        </Button>
      </>
  )
}

export default ContactForm