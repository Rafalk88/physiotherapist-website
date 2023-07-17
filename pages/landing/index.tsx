import Hero from "./Hero"

const Landing = () => {
  return (
    <section>
      <div
        className="w-full"
      >
        <section className="mx-auto w-5/6 max-w-[1200px] flex flex-col
          justify-between items-center xl:mb-20"
        >
          <Hero />
        </section>
      </div>
    </section>
  )
}

export default Landing