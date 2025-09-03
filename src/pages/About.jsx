import { useState, useEffect, useRef } from "react";
import { ChevronDown, Eye, Zap, CheckCircle, Lightbulb, Shield, Users, Twitter, Linkedin, Pin } from "lucide-react";
import img from "./image.png";

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { elementRef, isIntersecting, hasIntersected };
}

export default function About() {
  const { elementRef: heroRef } = useIntersectionObserver();
  const { elementRef: aboutRef, hasIntersected: aboutIntersected } = useIntersectionObserver();
  const { elementRef: visionRef, hasIntersected: visionIntersected } = useIntersectionObserver();
  const { elementRef: missionRef, hasIntersected: missionIntersected } = useIntersectionObserver();
  const { elementRef: ctaRef, hasIntersected: ctaIntersected } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >

       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8">
        {/* Left: Text Content */}
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 whitespace-nowrap">
            We Shape Digital Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Kryzen Software Solutions provides the solutions you need to innovate &amp; accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition duration-150"
          >
            Connect Now
            <span className="ml-2 font-normal text-xl">&rarr;</span>
          </a>
        </div>
        {/* Right: Illustration/Image */}
        <div className="flex justify-center w-full md:w-auto shrink-0">
          <img
            src={img}
            alt="Digital Solutions illustration"
            className="w-184 max-w-full h-94 object-contain"
          />
        </div>
      </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-800 delay-100 ${
              aboutIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-testid="about-title">
                Dynamic & Forward-Thinking <span className="text-primary">Technology Partner</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p data-testid="about-paragraph-1">
                  Kryzen Software Solutions is a dynamic and forward-thinking technology partner based in Ahmedabad, dedicated to empowering businesses with transformative digital solutions. In our two years of operation, we have rapidly established a reputation for excellence by delivering robust, scalable, and innovative software, web, and mobile applications.
                </p>
                <p data-testid="about-paragraph-2">
                  Our core philosophy is built on turning complex challenges into simple, elegant solutions that drive growth, efficiency, and market leadership for our clients.
                </p>
                <p data-testid="about-paragraph-3">
                  We are a team of passionate strategists, creative designers, and expert developers who are committed to crafting exceptional digital experiences. By blending cutting-edge technology with a client-centric approach, we serve a diverse clientele ranging from ambitious startups to established enterprises, helping them navigate the complexities of the digital landscape and achieve tangible results.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-800 delay-200 ${
              aboutIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional office environment with modern technology"
                  className="rounded-xl shadow-2xl w-full"
                  data-testid="about-office-image"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-xl opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" ref={visionRef} className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`lg:order-2 transition-all duration-800 delay-100 ${
              visionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Technology innovation and digital transformation abstract concept"
                  className="rounded-xl shadow-2xl w-full"
                  data-testid="vision-innovation-image"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl"></div>
              </div>
            </div>

            <div className={`lg:order-1 transition-all duration-800 delay-200 ${
              visionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="vision-title">
                  Our Vision
                </h2>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                <p className="text-lg text-card-foreground leading-relaxed" data-testid="vision-statement">
                  To be a globally recognized leader in digital innovation, renowned for creating intelligent and impactful technology solutions that not only solve business problems but also inspire progress and create lasting value for our clients and the community.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border" data-testid="vision-stat-global">
                  <div className="text-2xl font-bold text-primary">Global</div>
                  <div className="text-sm text-muted-foreground">Recognition</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border" data-testid="vision-stat-intelligent">
                  <div className="text-2xl font-bold text-primary">Intelligent</div>
                  <div className="text-sm text-muted-foreground">Solutions</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border" data-testid="vision-stat-lasting">
                  <div className="text-2xl font-bold text-primary">Lasting</div>
                  <div className="text-sm text-muted-foreground">Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" ref={missionRef} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-800 ${
            missionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          }`}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="mission-title">
                Our Mission
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="mission-description">
              Our mission is to leverage our deep industry expertise and a passion for technology to design, develop, and deploy bespoke solutions that perfectly align with our clients' goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`transition-all duration-800 delay-100 ${
              missionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional business partnership handshake"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
                data-testid="mission-partnership-image"
              />
            </div>

            <div className={`transition-all duration-800 delay-200 ${
              missionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern software development team working together"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
                data-testid="mission-team-image"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`transition-all duration-800 delay-300 ${
              missionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border h-full" data-testid="mission-card-understanding">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Understanding Needs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding the unique needs and challenges of each client.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-800 delay-400 ${
              missionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border h-full" data-testid="mission-card-innovation">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovating with the latest tools and methodologies to deliver future-ready products.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-800 delay-500 ${
              missionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border h-full" data-testid="mission-card-quality">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Quality Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ensuring the highest standards of quality, security, and performance.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-800 delay-600 ${
              missionIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}>
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border h-full" data-testid="mission-card-partnerships">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Long-term Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building long-term partnerships based on transparency, trust, and mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-800 ${
            ctaIntersected ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6" data-testid="cta-title">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-black-100 mb-8 leading-relaxed" data-testid="cta-description">
              Let's discuss how Kryzen Software Solutions can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{transform: 'transLateX(7rem)'}}>
              <a
                href="#contact"
                className="bg-blue-100 text-primary px-8  py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                data-testid="button-get-started"
              >
                Get Started Today
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                data-testid="button-view-portfolio"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
