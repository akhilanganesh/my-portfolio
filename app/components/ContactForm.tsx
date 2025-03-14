'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faSpinner, faCheck, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { robotoMono } from '../fonts';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Reset form
      form.reset();
      setStatus('success');
      
      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <div className="max-w-screen sm:max-w-90% md:max-w-80% mx-auto px-3 sm:px-0 flex flex-col space-y-8">
      {/* Contact Form */}
      <div className="backdrop-blur-sm bg-gradient-to-br from-theme-black/30 to-theme-black/20 border-2 border-theme-white/30 p-4 sm:p-6 rounded-xl shadow-lg shadow-theme-black/30 hover:bg-gradient-to-br hover:from-theme-black/40 hover:to-theme-black/30 hover:border-theme-white/40 transition duration-300 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl"></div>
        
        <form 
          action="https://formsubmit.co/fa8139529af131bbc567203a63fc19b5" 
          method="POST"
          onSubmit={handleSubmit} 
          className="space-y-4 relative z-30"
        >
          {/* Form heading */}
          <h3 className="text-xl sm:text-2xl font-bold text-theme-white mb-2">Message me</h3>
          
          {/* FormSubmit configuration */}
          <input type="hidden" name="_subject" value="Portfolio Contact Form Message" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          
          {/* Name and Email fields side by side on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-theme-white mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`${robotoMono.className} w-full bg-theme-black/40 border border-theme-white/20 rounded-lg px-4 py-2 text-theme-white focus:outline-none focus:ring-2 focus:ring-theme-color2/50 focus:border-transparent`}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-theme-white mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`${robotoMono.className} w-full bg-theme-black/40 border border-theme-white/20 rounded-lg px-4 py-2 text-theme-white focus:outline-none focus:ring-2 focus:ring-theme-color2/50 focus:border-transparent`}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-theme-white mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${robotoMono.className} w-full bg-theme-black/40 border border-theme-white/20 rounded-lg px-4 py-2 text-theme-white focus:outline-none focus:ring-2 focus:ring-theme-color2/50 focus:border-transparent resize-none`}
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-gradient-to-r from-theme-color2/90 to-theme-color1/80 hover:from-theme-color2 hover:to-theme-color1/90 text-theme-white font-medium py-2.5 px-4 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
          >
            {status === 'idle' && (
              <>
                <span>Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </>
            )}
            {status === 'submitting' && (
              <>
                <span>Sending...</span>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              </>
            )}
            {status === 'success' && (
              <>
                <span>Message Sent!</span>
                <FontAwesomeIcon icon={faCheck} />
              </>
            )}
            {status === 'error' && (
              <>
                <span>Try Again</span>
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </>
            )}
          </button>
          
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">{errorMessage}</p>
          )}
        </form>
      </div>
      
      {/* Connect With Me - Horizontal List */}
      <div className="backdrop-blur-sm bg-gradient-to-br from-theme-black/30 to-theme-black/20 border-2 border-theme-white/30 p-4 sm:p-6 rounded-xl shadow-lg shadow-theme-black/30 hover:bg-gradient-to-br hover:from-theme-black/40 hover:to-theme-black/30 hover:border-theme-white/40 transition duration-300 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl"></div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between relative z-30">
          <h3 className="text-xl font-bold text-theme-white mb-4 sm:mb-0">Connect With Me</h3>
          
          <div className="flex space-x-8">
            <a 
              href="https://github.com/akhilanganesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center text-theme-white/80 hover:text-theme-color2 transition-colors duration-300 group"
            >
              <FontAwesomeIcon icon={faGithub} className="text-3xl mb-2" />
              <span className="text-sm group-hover:text-theme-color2 transition-colors duration-300">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/akhilanganesh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center text-theme-white/80 hover:text-theme-color2 transition-colors duration-300 group"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl mb-2" />
              <span className="text-sm group-hover:text-theme-color2 transition-colors duration-300">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 