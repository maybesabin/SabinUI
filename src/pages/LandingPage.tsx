import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X, Code2, Package, Zap, ChevronRight, Terminal, Sparkles, Shield, Palette, Layers, Cpu } from 'lucide-react';
import { AnimatedSection } from '../components/Landing Page/AnimatedSection';
import { Link } from 'react-router-dom';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const features = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Type Safe",
            description: "Built with TypeScript for the best developer experience"
        },
        {
            icon: <Package className="w-6 h-6" />,
            title: "Lightweight",
            description: "Zero dependencies, only ship what you use"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast",
            description: "Optimized for performance and fast load times"
        },
        {
            icon: <Terminal className="w-6 h-6" />,
            title: "CLI Tool",
            description: "Powerful CLI for component generation"
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Modern",
            description: "Built for modern React applications"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure",
            description: "Regular security audits and updates"
        }
    ];

    const components = [
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Themeable",
            description: "Customize every aspect of your components"
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Composable",
            description: "Build complex UIs from simple components"
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Optimized",
            description: "Built for performance and accessibility"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="h-[300px] w-[300px] bg-purple-500 rounded-full opacity-20 blur-[100px]" />
                <div className="h-[300px] w-[300px] bg-rose-500 rounded-full opacity-20 blur-[100px] -translate-x-1/2" />
            </div>
            <div className="relative">
                {/* Navbar */}
                <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl z-50">
                    <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">SabinUI</span>
                            </div>

                            <div className="hidden md:block">
                                <div className="flex items-center space-x-8">
                                    <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
                                    <a href="#components" className="text-sm text-gray-300 hover:text-white transition-colors">Components</a>
                                    <Link to={"/docs"} className="text-sm text-gray-300 hover:text-white transition-colors">Documentation</Link>
                                    <a href="https://github.com/maybesabin/SabinUI" target="_blank" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                                        <Github className="w-5 h-5" />
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            <button
                                className="md:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="md:hidden border-t border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden"
                            >
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    <motion.a
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        href="#features"
                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                                    >
                                        Features
                                    </motion.a>
                                    <motion.a
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        href="#components"
                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                                    >
                                        Components
                                    </motion.a>
                                    <motion.a
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        href="/docs"
                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                                    >
                                        Documentation
                                    </motion.a>
                                    <motion.a
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        href="https://github.com/maybesabin/SabinUI"
                                        className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md flex items-center gap-2"
                                    >
                                        <Github className="w-5 h-5" />
                                        GitHub
                                    </motion.a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* Hero Section */}
                <AnimatedSection className="relative pt-28 pb-16">
                    <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-block mb-6"
                            >
                                <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                                    Now in public beta
                                </span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                            >
                                Beautiful UI components
                                <br />
                                built for production
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
                            >
                                A collection of modern, accessible, and customizable React components
                                that help you build your next project faster.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex flex-col sm:flex-row justify-center gap-4"
                            >
                                <Link to={"/docs"} className="group bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                    Get Started
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link className="group border border-white/20 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" target="_blank" to={"https://github.com/maybesabin/SabinUI"}>
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Code Preview Section */}
                <AnimatedSection className="py-16 relative overflow-hidden" delay={0.2}>
                    <div className="max-w-[55rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-10">
                            <pre className="text-sm sm:text-base overflow-x-auto">
                                <code className="language-tsx">
                                    {
                                        `
<button 
    className="border px-5 py-2 rounded-full text-[0.9rem] 
    dark:hover:bg-zinc-900 hover:bg-zinc-100 cursor-pointer transition-all">
    Click Me
</button>

                                    `}
                                </code>
                            </pre>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Features Grid */}
                <div id="features" className="py-16 relative">
                    <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Features</h2>
                            <p className="text-gray-400">Everything you need to build modern React applications</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <AnimatedSection
                                    key={index}
                                    delay={0.1 * index}
                                >
                                    <div
                                        className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transform transition-all duration-300 hover:-translate-y-1"
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div className={`mb-4 text-white transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div >

                {/* Components Section */}
                < div id="components" className="py-16 relative" >
                    <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Components</h2>
                            <p className="text-gray-400">A growing collection of beautiful components</p>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-3 gap-8">
                            {components.map((component, index) => (
                                <AnimatedSection
                                    key={index}
                                    delay={0.1 * index}
                                >
                                    <div className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transform transition-all duration-300 hover:-translate-y-1">
                                        <div className="mb-4 text-white">
                                            {component.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
                                        <p className="text-gray-400">{component.description}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div >

                {/* CTA Section */}
                < AnimatedSection className="py-16 relative" >
                    <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4">Start building today</h2>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                Join thousands of developers building modern applications with SabinUI.
                            </p>
                            <Link to={"/docs"}>
                                <button className="group bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                                    Get Started
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection >

                {/* Footer */}
                < footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl py-12" >
                    <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">SabinUI</h3>
                                <p className="text-gray-400">Modern UI components for React & Javascript applications</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mb-4 text-gray-300">Resources</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><Link to={"/docs"} className="hover:text-white transition-colors">Documentation</Link></li>
                                    <li><a href="#components" className="hover:text-white transition-colors">Components</a></li>
                                    <li><Link to={"/docs/components/button"} className="hover:text-white transition-colors">Examples</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mb-4 text-gray-300">Community</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="https://github.com/maybesabin" target="_blank" className="hover:text-white transition-colors">GitHub</a></li>
                                    <li><a href="https://x.com/16calc" target="_blank" className="hover:text-white transition-colors">Twitter</a></li>
                                    <li><a href="https://www.linkedin.com/in/sabinhamal/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                            <p>© {new Date().getFullYear()} SabinUI. All rights reserved.</p>
                        </div>
                    </div>
                </footer >
            </div >
        </div >
    );
}

export default App;