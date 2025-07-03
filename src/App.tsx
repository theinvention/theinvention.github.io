import React, { useState } from 'react';
import { 
  GraduationCap, 
  Code, 
  Brain, 
  BarChart3, 
  Rocket, 
  Users, 
  Star,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  Globe,
  Zap,
  Trophy,
  Heart,
  CheckCircle,
  PlayCircle,
  Download,
  MessageCircle,
  Lightbulb,
  Shield,
  Briefcase
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enrollmentModal, setEnrollmentModal] = useState<{ isOpen: boolean; program: any }>({
    isOpen: false,
    program: null
  });

  const programs = [
    {
      id: 1,
      title: "Pre-Incubation Programme for Startups",
      icon: Rocket,
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      description: "Transform your startup idea into a viable business plan with mentorship from successful IIT alumni entrepreneurs.",
      features: ["Market validation", "Business model design", "Pitch deck creation", "Funding strategies"],
      category: "entrepreneurship",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Post-Incubation Programme for Startups",
      icon: TrendingUp,
      duration: "16 weeks",
      level: "Intermediate to Advanced",
      description: "Scale your startup with advanced strategies, investor connections, and operational excellence frameworks.",
      features: ["Growth hacking", "Investor relations", "Team building", "Exit strategies"],
      category: "entrepreneurship",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "Mathematics & Statistics",
      icon: BarChart3,
      duration: "10 weeks",
      level: "Beginner to Advanced",
      description: "Master the mathematical foundations essential for data science, ML, and quantitative analysis.",
      features: ["Linear algebra", "Calculus", "Probability", "Statistical inference"],
      category: "mathematics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Python, C & C++ Programming",
      icon: Code,
      duration: "14 weeks",
      level: "Beginner to Advanced",
      description: "Comprehensive programming course covering three essential languages with hands-on projects.",
      features: ["Syntax mastery", "OOP concepts", "Memory management", "Real-world projects"],
      category: "programming",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Data Structures & Algorithms",
      icon: Target,
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      description: "Master DSA concepts crucial for technical interviews and competitive programming.",
      features: ["Array & strings", "Trees & graphs", "Dynamic programming", "System design"],
      category: "programming",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Machine Learning",
      icon: Brain,
      duration: "16 weeks",
      level: "Intermediate to Advanced",
      description: "Dive deep into ML algorithms, model building, and real-world applications.",
      features: ["Supervised learning", "Unsupervised learning", "Model evaluation", "MLOps"],
      category: "ai",
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 7,
      title: "Deep Learning",
      icon: Award,
      duration: "18 weeks",
      level: "Advanced",
      description: "Advanced neural networks, computer vision, and NLP with cutting-edge frameworks.",
      features: ["Neural networks", "CNN & RNN", "Computer vision", "NLP applications"],
      category: "ai",
      color: "from-rose-500 to-pink-500"
    },
    {
      id: 8,
      title: "Generative AI",
      icon: Zap,
      duration: "14 weeks",
      level: "Advanced",
      description: "Master the latest in generative AI, LLMs, and prompt engineering techniques.",
      features: ["LLM fundamentals", "Prompt engineering", "Fine-tuning", "AI applications"],
      category: "ai",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 9,
      title: "Data Analysis & Data Science",
      icon: BookOpen,
      duration: "20 weeks",
      level: "Beginner to Advanced",
      description: "Complete data science pipeline from data collection to insights and visualization.",
      features: ["Data cleaning", "Statistical analysis", "Visualization", "Business intelligence"],
      category: "data",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      title: "IIT Delhi Alumni",
      expertise: "Machine Learning & AI",
      experience: "15+ years",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      companies: ["Google", "Microsoft", "Flipkart"]
    },
    {
      name: "Prof. Priya Sharma",
      title: "IIT Bombay Alumni",
      expertise: "Data Science & Analytics",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      companies: ["Amazon", "Uber", "Zomato"]
    },
    {
      name: "Dr. Amit Patel",
      title: "IIT Madras Alumni",
      expertise: "Software Engineering",
      experience: "18+ years",
      image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      companies: ["Facebook", "Netflix", "Paytm"]
    },
    {
      name: "Dr. Sneha Reddy",
      title: "IIT Kanpur Alumni",
      expertise: "Entrepreneurship",
      experience: "10+ years",
      image: "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      companies: ["Founder @ TechCorp", "Ola", "Swiggy"]
    }
  ];

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Software Engineer @ Google",
      content: "The DSA course completely transformed my coding skills. Got placed at Google within 6 months!",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "Kavya Singh",
      role: "Founder @ DataTech",
      content: "The pre-incubation program gave me the perfect foundation to launch my startup. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "Rohit Gupta",
      role: "ML Engineer @ Microsoft",
      content: "The deep learning course is incredibly comprehensive. The projects helped me land my dream job.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    }
  ];

  const stats = [
    { number: "5000+", label: "Students Enrolled", icon: Users },
    { number: "95%", label: "Job Placement Rate", icon: Trophy },
    { number: "50+", label: "Industry Partners", icon: Briefcase },
    { number: "4.9/5", label: "Average Rating", icon: Star }
  ];

  const features = [
    {
      title: "Live Interactive Classes",
      description: "Real-time learning with industry experts",
      icon: PlayCircle,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world applications and portfolios",
      icon: Lightbulb,
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      title: "Career Support",
      description: "Job placement assistance and interview prep",
      icon: Shield,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      title: "Lifetime Access",
      description: "Access course materials and updates forever",
      icon: Globe,
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI Revolution Summit 2024",
      date: "March 15, 2024",
      time: "10:00 AM IST",
      type: "Webinar",
      speaker: "Dr. Rajesh Kumar"
    },
    {
      title: "Startup Pitch Competition",
      date: "March 22, 2024",
      time: "2:00 PM IST",
      type: "Competition",
      speaker: "Multiple Judges"
    },
    {
      title: "Data Science Workshop",
      date: "March 28, 2024",
      time: "11:00 AM IST",
      type: "Workshop",
      speaker: "Prof. Priya Sharma"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleEnrollment = (program: any) => {
    setEnrollmentModal({ isOpen: true, program });
  };

  const closeEnrollmentModal = () => {
    setEnrollmentModal({ isOpen: false, program: null });
  };

  const submitEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the enrollment data to your backend
    alert(`Enrollment submitted for ${enrollmentModal.program?.title}! We'll contact you soon.`);
    closeEnrollmentModal();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800/95 shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NexusLearn
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Home</button>
                <button onClick={() => scrollToSection('programs')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Programs</button>
                <button onClick={() => scrollToSection('faculty')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Faculty</button>
                <button onClick={() => scrollToSection('events')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Events</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Reviews</button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-purple-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 font-medium">Home</button>
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 font-medium">Programs</button>
              <button onClick={() => scrollToSection('faculty')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 font-medium">Faculty</button>
              <button onClick={() => scrollToSection('events')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 font-medium">Events</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 font-medium">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 font-medium">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-purple-300 font-semibold text-sm">Trusted by 5000+ Students</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Learn from the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Best</span> IIT Alumni
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your career with world-class education from IIT alumni. Master programming, AI, data science, and entrepreneurship with industry veterans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-semibold"
                >
                  Explore Programs <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students learning"
                className="rounded-2xl shadow-2xl border border-gray-700"
              />
              <div className="absolute -bottom-6 -left-6 bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">5000+</p>
                    <p className="text-sm text-gray-400">Students Enrolled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-purple-400" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose NexusLearn?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience learning like never before with our innovative approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Programs</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive courses designed by IIT alumni to take you from beginner to expert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <div key={program.id} className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`bg-gradient-to-r ${program.color} p-3 rounded-full`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-green-900/50 to-teal-900/50 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Free Consultation
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-semibold text-gray-300">{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Level:</span>
                        <span className="font-semibold text-gray-300">{program.level}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => handleEnrollment(program)}
                      className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold`}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Faculty</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from experienced professionals who have excelled at top tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2"></div>
                <div className="p-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-500/30"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-2">{member.title}</p>
                  <p className="text-gray-300 mb-2">{member.expertise}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.companies.map((company, compIndex) => (
                      <span key={compIndex} className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our exclusive events and connect with industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <Calendar className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.speaker}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-600"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new courses, events, and career opportunities
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:outline-none bg-white/90"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of successful students who have transformed their careers with our expert-led programs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-purple-400" />
                  <span>info@nexuslearn.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-purple-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Program of Interest</label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white">
                    <option>Select a program</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.title}>{program.title}</option>
                    ))}
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NexusLearn
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering the next generation of tech leaders through world-class education from IIT alumni.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Startup Incubation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI & ML</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Course Materials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NexusLearn. All rights reserved. Built with ❤️ for learners worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Enrollment Modal */}
      {enrollmentModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Enroll Now</h3>
              <button 
                onClick={closeEnrollmentModal}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">
                {enrollmentModal.program?.title}
              </h4>
              <p className="text-gray-400 text-sm">
                Duration: {enrollmentModal.program?.duration} | Level: {enrollmentModal.program?.level}
              </p>
            </div>

            <form onSubmit={submitEnrollment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Current Experience Level</label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Why are you interested in this course?</label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="button"
                  onClick={closeEnrollmentModal}
                  className="flex-1 border border-gray-600 text-gray-300 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Submit Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;