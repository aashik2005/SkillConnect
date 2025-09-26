import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, ArrowRight, Lightbulb, RefreshCw } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import LoginModal from './LoginModal';

const aboutItems = [
  {
    title: 'How it works',
    text: 'List a skill you can teach, list a skill you want to learn. Match with a peer and exchange lessons — no money, just time and knowledge.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Community first',
    text: 'Build a profile, add what you teach and what you want to learn. Rate and review partners to keep the community safe and helpful.',
    img: 'https://i.pinimg.com/736x/0c/ee/23/0cee2384659265d98be0c6c74f20b247.jpg',
  },
  {
    title: 'Flexible learning',
    text: 'Search by topic, availability, or experience level. Schedule sessions that work for you and get reminders.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
];

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="relative min-h-screen overflow-auto bg-foreground/5">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-20 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-white">KnowledgeX</span>
        </div>
        <div className="space-x-4 flex items-center">
          <a href="#about" className="text-sm font-medium text-white/80 hover:text-white">About</a>
          <Button onClick={() => setShowLogin(true)} variant="ghost">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Exchange
            <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent"> Knowledge</span>
            <br />Not Money
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
            Learn what you want by teaching what you know. Connect with learners and experts in a knowledge-exchange platform.
          </p>

          <div className="mt-4">
            <Button onClick={() => setShowLogin(true)} className="text-lg px-8 py-4 h-auto group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 bg-transparent -mt-12">
        <section className="px-6">
          <div className="max-w-6xl mx-auto -mt-8 grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl text-center shadow-lg backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                <RefreshCw className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Knowledge Exchange</h3>
              <p className="text-white/80">Trade your expertise for new skills. No money involved, just pure knowledge sharing.</p>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center shadow-lg backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary-glow rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Community</h3>
              <p className="text-white/80">Connect with passionate learners and experienced professionals from around the world.</p>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center shadow-lg backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent-glow rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Personalized Learning</h3>
              <p className="text-white/80">Find the perfect match for your learning goals and teaching abilities.</p>
            </div>
          </div>
        </section>

        {/* About Zig-Zag Section */}
        <section id="about" className="mt-16 px-6 pb-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">What is KnowledgeX?</h2>
              <p className="text-white/80 max-w-3xl mx-auto mt-4">A peer-to-peer learning marketplace where skills are exchanged instead of money. Scroll to see how it works.</p>
            </div>

            {aboutItems.map((item, idx) => (
              <div key={item.title} className="grid md:grid-cols-2 gap-8 items-center">
                {/* Force Community first image to the right (idx = 1) */}
                <div className={`${idx === 1 ? 'order-2' : idx % 2 === 0 ? 'order-1' : 'order-2'} md:order-1`}>
                  <img src={item.img} alt={item.title} className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
                </div>

                <div className={`${idx === 1 ? 'order-1' : idx % 2 === 0 ? 'order-2' : 'order-1'} md:order-2`}>
                  <div className="p-6 md:p-12 bg-black/70 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-white/80">{item.text}</p>
                    <div className="mt-6">
                      <Button onClick={() => setShowLogin(true)}>Try it now</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Dummy courses grid */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Courses available</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="group relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-black">Course {i + 1}: Intro to Java</h4>
                      <p className="text-sm text-gray-700 mt-2">Teacher: Alice · Wants: Python · Schedule: Flexible</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm">This course covers fundamentals and practical projects. Suitable for beginners.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/70 py-10">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-white/70">© {new Date().getFullYear()} KnowledgeX — Exchange knowledge, not money.</div>
        </footer>
      </main>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
};

export default LandingPage;