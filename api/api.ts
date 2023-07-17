type Props = {
  name: string
  email: string
  message: string
}

export const sendContactForm = async (data: Props) => 
  fetch('/api/contactAPI', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
}).then((res) => {
  if (!res.ok) throw new Error("Wiadomość nie została wysłana.")
  return res.json()
})