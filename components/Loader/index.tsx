import RingLoader from "react-spinners/RingLoader"

const Loader = () => {
  return (
    <section className="flex justify-center items-center fixed top-0
      left-0 w-full h-full z-50 bg-slate-300/80"
    >
      <RingLoader
        size={180}
        color="#0133FF"
      />
    </section>
  )
}

export default Loader