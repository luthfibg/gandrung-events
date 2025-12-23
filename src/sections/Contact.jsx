import React from 'react'
import './contact.css'
import { ArrowRight, Headset, Info, Mail, Phone } from 'lucide-react'
// import './contact.js'

const Contact = () => {
  return (
    <>
        <div className="bg-gray-50 border-t border-gray-200 p-6 text-center text-gray-500 text-sm">
            <p>© 2026 Gandrung.events. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 font-mulish text-xl xl:text-2xl">
            <div className="form-background text-white p-8 lg:p-12 lg:col-span-2">
                <div className="form-content h-full flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="text-blue-100 mb-8 max-w-lg">
                        We use an agile approach to test assumptions and connect with the needs of your audience early and often.
                    </p>
                    
                    <form className="space-y-6  font-mulish text-xl xl:text-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-medium text-blue-100 mb-2" htmlFor="first-name">First Name</label>
                                <input 
                                    type="text" 
                                    id="first-name" 
                                    className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                    value="Burns"
                                    style={{backdropFilter: 'blur(5px)'}}
                                />
                            </div>
                            <div>
                                <label className="block font-medium text-blue-100 mb-2" htmlFor="last-name">Last Name</label>
                                <input 
                                    type="text" 
                                    id="last-name" 
                                    className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                    value="Grosn"
                                    style={{backdropFilter: 'blur(5px)'}}
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-medium text-blue-100 mb-2" htmlFor="email">Your email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                    value="name@faxebite.com"
                                    style={{backdropFilter: 'blur(5px)'}}
                                />
                            </div>
                            <div>
                                <label className="block font-medium text-blue-100 mb-2" htmlFor="phone">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                    value="112 345 6789"
                                    style={{backdropFilter: 'blur(5px)'}}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block font-medium text-blue-100 mb-2" htmlFor="message">Your message</label>
                            <textarea 
                                id="message" 
                                rows="4" 
                                className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                placeholder="Leave a comment..."
                                style={{backdropFilter: 'blur(5px)'}}
                            ></textarea>
                        </div>
                        
                        <div className="text-blue-100">
                            <p>
                                By submitting this form you agree to our 
                                <a href="#" className="text-white font-medium hover:underline">terms and conditions</a> 
                                and our 
                                <a href="#" className="text-white font-medium hover:underline">privacy policy</a> 
                                which explains how we may collect, use and disclose your personal information including to third parties.
                            </p>
                        </div>
                        
                        <button type="submit" className="btn-send bg-white text-blue-600 hover:bg-blue-50 flex items-center">
                            <i className="fas fa-paper-plane mr-2"></i>
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            
            <div className="p-8 lg:p-12 space-y-8">
                <div className="info-card">
                    <div className="flex items-start mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <i className="fas fa-envelope text-blue-600 text-xl"></i>
                            <Mail className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email us</h3>
                            <p className="text-gray-600 mb-3">
                                Email us for general queries, including marketing and partnership opportunities.
                            </p>
                            <a href="mailto:hello@faxebite.com" className="text-blue-600 font-medium hover:underline">hello@faxebite.com</a>
                        </div>
                    </div>
                </div>
                
                <div className="info-card">
                    <div className="flex items-start mb-4">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                            <Phone className="text-green-600 text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Call us</h3>
                            <p className="text-gray-600 mb-3">
                                Call us to speak to a member of our team. We are always happy to help.
                            </p>
                            <a href="tel:+18487865080" className="text-blue-600 font-medium hover:underline">+1 (848) 786-5080</a>
                        </div>
                    </div>
                </div>
                
                <div className="info-card">
                    <div className="flex items-start mb-4">
                        <div className="bg-purple-100 p-3 rounded-lg mr-4">
                            <Headset className="text-purple-600 text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Support</h3>
                            <p className="text-gray-600 mb-3">
                                Email us for general queries, including marketing and partnership opportunities.
                            </p>
                            <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
                                Support center
                                <ArrowRight className="ml-2" size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-blue-800 font-mulish text-xl xl:text-2xl">
                        <Info className="inline-block mr-2" size={20} />
                        We typically respond to inquiries within 24 hours during business days.
                    </p>
                </div>
            </div>
        </div>

        <script src="src/sections/contact.js"></script>
        
    </>
  )
}

export default Contact