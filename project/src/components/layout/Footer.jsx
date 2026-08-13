import { FaYoutube, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-300 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6 border-b border-blue-900 pb-6">

          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-2">Men's Health Reset Hub</h3>
            <p className="max-w-sm text-blue-200">
              Dedicated to empowering men with the knowledge and tools to reclaim their confidence, health, and vitality.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Social Media</h4>
            <ul className="space-y-2">
              <li><a href="https://www.youtube.com/@menhealthresethub" className="flex items-center gap-2 hover:text-accent transition-colors"><FaYoutube className="text-red-500" /> Youtube</a></li>
              <li><a href="https://www.facebook.com/share/1CyraP7Jxi/" className="flex items-center gap-2 hover:text-accent transition-colors"><FaFacebook className="text-blue-500" /> Facebook</a></li>
              <li><a href="https://www.instagram.com/menhealthresethub?igsh=NXBsOXR2bjM4d3di#faq" className="flex items-center gap-2 hover:text-accent transition-colors"><FaInstagram className="text-pink-500" /> Instagram</a></li>
              <li><a href="https://www.tiktok.com/@menhealthresethub?_r=1&_t=ZS-98d5IHhaM5K" className="flex items-center gap-2 hover:text-accent transition-colors"><FaTiktok className="text-white" /> Tiktok</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=2348064500833&text=Hi%2C+I%27m+interested+in+the+2-Day+Men%27s+Performance+Reset.&type=phone_number&app_absent=0" className="flex items-center gap-2 hover:text-accent transition-colors"><FaWhatsapp className="text-green-500" /> Whatsapp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#testimonies" className="hover:text-accent transition-colors">Testimonies</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#coaches" className="hover:text-accent transition-colors">Your Coache</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-blue-200/60 leading-relaxed text-center max-w-4xl mx-auto mb-4">
          <p className="font-semibold text-white/80 mb-2">MEDICAL DISCLAIMER</p>
          <p>
            The content provided in this coaching program is for informational and educational purposes only.
            It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            Always seek the advice of your physician or other qualified health provider with any questions
            you may have regarding a medical condition.
          </p>
        </div>

        <div className="text-center text-sm">
          &copy; {currentYear} Men's Health Reset Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
