import Link from 'next/link'

export default function Herosection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
              🤖 AI • IT Solutions • Innovation
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              พลิกธุรกิจด้วย
              <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                AI และเทคโนโลยีอัจฉริยะ
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              พัฒนาเว็บไซต์ แอปพลิเคชัน ระบบสารสนเทศ และโซลูชัน AI
              เพื่อเพิ่มประสิทธิภาพ ลดต้นทุน และขับเคลื่อนธุรกิจของคุณสู่ยุคดิจิทัล
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/services"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-cyan-600"
              >
                สำรวจบริการ
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                ปรึกษาฟรี
              </Link>
            </div>

            {/* Feature List */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <div>⚡ AI Solutions</div>
              <div>🌐 Web Development</div>
              <div>📊 Data Analytics</div>
              <div>☁️ Cloud Technology</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-500/20 blur-3xl"></div>

              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000"
                alt="AI Technology"
                className="relative w-full max-w-lg rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}