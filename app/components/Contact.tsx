import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="max-w-full relative z-30 pb-12">
      <div className="max-w-screen sm:max-w-90% md:max-w-80% mx-auto px-3 sm:px-0 space-y-4 mb-8">
        <div className="backdrop-blur-sm bg-gradient-to-br from-theme-black/30 to-theme-black/20 border-2 border-theme-white/30 mx-0 sm:-mx-3 p-4 sm:p-6 flex flex-col text-theme-lightgray space-y-4 rounded-2xl shadow-lg shadow-theme-black/30 hover:bg-gradient-to-br hover:from-theme-black/40 hover:to-theme-black/30 hover:border-theme-white/40 transition duration-300 relative overflow-hidden z-30">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl"></div>
          
          <h2 className="text-center md:text-left text-3xl sm:text-4xl font-bold text-theme-white relative z-30">
            <span className="bg-gradient-to-r from-theme-white via-theme-white to-theme-white/90 bg-clip-text text-transparent">Get In Touch</span>
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-theme-color2/80 to-theme-color2/50 rounded-full hidden md:block"></span>
          </h2>
          
          <p className="text-base sm:text-lg relative leading-relaxed z-30">
            Have a question or want to work together? Feel free to send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}