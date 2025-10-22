import "./CertoLandingPage.css";
import { Star } from "lucide-react";

export default function CertoLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center gap-2">
          <img src="/logo.svg.png" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            iPhone
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Android
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Help
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Company
          </a>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Start
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-yellow-50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `/Ellipse 2.png`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.83zM27.03 0L15.515 11.515 16.93 12.93 30.857 0H27.03zM33.657 0L19.172 14.485 20.586 15.9l15.9-15.9h-2.83zM40.284 0L22.8 17.485 24.215 18.9l18.9-18.9h-2.83zM46.97 0L26.458 20.485 27.87 21.9l21.93-21.9h-2.83z' fill='%23fbbf24' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 pt-30 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your mobile privacy is our mission
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Think your phone has been hacked? Our trusted apps teach you how
              to stay secure, detect and remove threats from your iPhone and
              Android devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500">
                Get Certo for iPhone →
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400">
                Get Certo for Android
              </button>
            </div>
          </div>
          <div className="relative left-40">
            <img
              src="/home-header-2.png.png"
              className="border-t-[20px] border-t-blue-600 border-s-[20px] border-s-blue-600"
            />
            <img
              src="/android-dashboard-certo-2.png.png "
              className="absolute top-4 left-4 "
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-yellow-400 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Loved by thousands of iPhone and Android users alike
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "Certo helped me find spyware on my phone. Easy to use
                  interface and clear instructions made it simple to remove the
                  threat. Highly recommend for anyone concerned about their
                  privacy."
                </p>
                <p className="font-semibold text-gray-900">Jennifer Black</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured In */}
        <div className="max-w-7xl mx-auto px-8 mt-12 flex items-center justify-center flex-row gap-12">
          <p className="text-gray-900 font-semibold mb-6">Featured in:</p>
          <div className="flex flex-wrap items-center gap-8 opacity-70">
            <span className="text-2xl font-bold">
              <img src="/figure (0).png" />
            </span>
            <span className="text-2xl font-bold">
              <img src="/figure (1).png" />
            </span>
            <span className="text-2xl font-bold">
              <img src="/figure (2).png" />
            </span>
            <span className="text-2xl font-bold">
              <img src="/figure (3).png" />
            </span>
            <span className="text-2xl font-bold">
              <img src="/figure (4).png" />
            </span>
            <span className="text-2xl font-bold">
              <img src="/figure (5).png" />
            </span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              At Certo, mobile security is not an afterthought, it's what we do.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With years of involvement in mobile security and success defending
              our phones, we've built products that help millions of people
              protect their devices and find peace of mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500">
                Get Certo for iPhone →
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400">
                Get Certo for Android
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/AdobeStock_350132639-scaled-2.jpeg.png"
              alt="Person using phone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-8 ">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Get your freedom back, stop mobile spyware today
          </h2>
          <div className="grid md:grid-cols-3 mt-16 shadow-lg rounded-[150px]">
            <div className="bg-white rounded-2xl p-8 text-center flex justify-center items-center flex-col gap-4">
              <img src="/img-1.png" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Spyware detection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our advanced engine scans for surveillance apps or signs of
                jailbreak that could let someone spy on you.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center flex justify-center items-center flex-col gap-4">
              <img src="/img-2.png" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Managed detection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If we detect possible spyware, Certo's experts review your
                device to provide an accurate security diagnosis.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center flex justify-center items-center flex-col gap-4">
              <img src="/img-3.png" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Find tracking apps
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Check which apps can access your photos and location data to
                ensure your privacy is protected.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center flex justify-center items-center flex-col gap-4">
              <img src="/img-4.png" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                OS security scan
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Analyze your operating system to find signs of tampering that
                may indicate spyware or malware.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center flex justify-center items-center flex-col gap-4">
              <img src="/img-5.png" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Network monitoring
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use alongside Certo apps while allowing detection of more subtle
                threats than just basic scans.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center flex justify-center items-center flex-col gap-4">
              <img src="/img-6.png" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Security settings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use native tools to take back the security of your digital life
                in a matter of minutes.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12 mb-10">
            <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500">
              Get Certo for iPhone →
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400">
              Get Certo for Android
            </button>
          </div>
        </div>
      </section>

      {/* Story & Help Center Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-400 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Read our story
            </h3>
            <p className="text-gray-800 mb-8">
              Find out how Success got the Certo started and what motivates us
              today.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
              Learn more
            </button>
          </div>

          <div className="bg-gray-100 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Help Center
            </h3>
            <p className="text-gray-600 mb-8">
              Get answers to your questions and learn more about mobile
              security.
            </p>
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400">
              Visit Help Center →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Is someone spying on your phone?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">Find out for FREE</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500">
              Get Certo for iPhone →
            </button>
            <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-blue-700">
              Get Certo for Android
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Latest insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                badge: "Security",
                title: "Signs Your Ex Is Spying On You",
                excerpt:
                  "Concerned about digital stalking by an ex-partner? Here are the key signs to watch out for and steps you can take to secure your devices.",
                image:
                  "httpsassets.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop",
              },
              {
                badge: "Privacy",
                title: "How to Remove a Hacker from Your Phone",
                excerpt:
                  "Removing a hacker from your phone can be complex but it's important to act quickly. Here's what you need to do to regain control.",
                image:
                  "httpsassets.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
              },
              {
                badge: "Security",
                title: "Is Your Cell Phone Under Surveillance?",
                excerpt:
                  "It's totally natural to worry if someone has put your phone under surveillance. Here are the tell-tale signs to look out for.",
                image:
                  "httpsassets.unsplash.com/photo-1618044619888-009e412ff12a?w=400&h=300&fit=crop",
              },
            ].map((article, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-4 left-4 px-4 py-1 bg-white rounded-full text-sm font-semibold">
                    {article.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500">
              View all insights →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Certo</h3>
              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                >
                  <span className="text-sm">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                >
                  <span className="text-sm">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                >
                  <span className="text-sm">in</span>
                </a>
              </div>
              <div className="text-gray-400 text-sm space-y-2">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>© Certo Software Limited 2025</p>
                <p>Registered in England & Wales</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    iPhone
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    AntiSpy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mobile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Business
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6 text-gray-900">
              <h4 className="font-bold text-lg mb-4">
                Sign up to our newsletter
              </h4>
              <p className="text-sm mb-4">
                Receive the latest mobile security news, exclusive discounts &
                offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <button className="px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-xs leading-relaxed">
              DISCLAIMER: Certo Software Limited is a company registered in
              England & Wales. We are not affiliated with any mobile device
              manufacturer or operating system. Our products are designed to
              help protect your device and privacy. Results may vary based on
              device configuration and individual circumstances.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
