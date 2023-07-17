import React, { useState } from "react"
import {
  useToast
} from "@chakra-ui/react"
import isEmail from 'validator/lib/isEmail'
import ContactForm from "@/components/ContactForm"

import { sendContactForm } from "@/api/api"
import Typography from "@/components/Typography"

const initValues = { name: "", email: "", title: "", message: "" }
const initState = { values: initValues, isLoading: false, }
const initTouched = {name: false, email: false, title: false, message: false }
const initHasError = { name: false, email: false, title: false, message: false }

type Events = {
  target: EventTarget
}

type Props = {
  main: boolean
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
}

const Contact = ({ main, setIsVisible }: Props) => {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState(initTouched)
  const [hasError, setHasError] = useState(initHasError)

  const { values } = state

  const handleChange = ({ target }: Events) => {
    const { name, value } = target as HTMLInputElement

    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value
      }
    }))

    if (touched.email && !value || !isEmail(value)) {
      setHasError((prevState) => ({
        ...prevState,
        [name]: true
      }))
    } else {
      setHasError((prevState) => ({
        ...prevState,
        [name]: false
      }))
    }
  }

  const onBlur = ({ target }: Events) => {
    const { name } = target as HTMLInputElement

    setTouched((prevState) => ({
      ...prevState,
      [name]: true
    }))
  }

  const onSubmit = async () => {
    try {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }))

      await sendContactForm(values)

      toast({
        title: "Wysłano wiadomość.",
        status: "success",
        duration: 2000,
        position: "top",
      })
    } catch (error: any) {
      toast({
        title: "Wiadomość nie została wysłana.",
        status: "error",
        duration: 2000,
        position: "top",
      })

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }))
    } finally {
      setTouched(initTouched)
      setState(initState)
      setHasError(initHasError)
      setIsVisible?.(false)
    }
  }

  return (
    <section className={`w-full ${main ? "md:py-40" : null} xl:min-h-fit`}>
      <div className={`${main ? "w-5/6 max-w-[1200px] h-full mx-auto py-12" : null} md:py-0 md:flex md:items-center`}>
        <div className="md:flex md:justify-around w-full">
          {
            main ? (
              <div className="pb-12 md:pb-0 md:w-1/4 flex flex-col items-center">
                <Typography
                  className="pb-8 font-extrabold text-dark-grey"
                  variant="h1"
                  as="h2"
                >
                  Skontaktuj się z nami
                </Typography>
                <Typography
                  className="mb-2 text-dark-grey"
                  variant="h4"
                  as="p"
                >
                  Aby wysłać wiadomość, wypełnij formularz
                </Typography>
              </div>
            ) : null
          }

          <div className={`${main ? "md:w-1/2" : null} flex flex-col items-end`}>
            <ContactForm
              main={main}
              state={state}
              touched={touched}
              hasError={hasError}
              handleChange={handleChange}
              onBlur={onBlur}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact