export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-20">
      <div className="max-w-3xl">
        
        <h1 className="text-5xl md:text-6xl leading-tight mb-6">
          Josselyn Simbaña Calapiña
        </h1>

        <p className="text-sm uppercase tracking-widest text-[#C9C3FF] mb-4">
          Frontend-Focused Full Stack Developer
        </p>

        <p className="text-lg text-[#B9B6D3] mb-8 leading-relaxed">
          I design and build elegant web applications that balance aesthetics, structure and performance.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#9B8CFF] text-black rounded-full hover:opacity-90 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-[#9B8CFF] rounded-full hover:bg-[#9B8CFF] hover:text-black transition">
            Contact
          </button>
        </div>

      </div>
    </section>
  )
}