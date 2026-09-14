import React from 'react';
import './index.css'

export default function Footer() {
    return (
        <footer className="  py-20 w-full bg-white text-gray-600 font-sans px-6 py-12 md:px-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-2.5 py-1 rounded-lg text-sm">
                                DS
                            </div>
                            <span className="text-xl font-bold text-gray-900">Dev Stack</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex items-center gap-4 pt-2 text-sm font-medium text-gray-600">
                            <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Product</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright Area */}
                <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}