import { socialLinks } from '@/lib/social';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="PCVT Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <h3 className="text-lg font-bold">PCVT</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Клуб на Програмистите във Велико Търново - Изграждаме жива програмистка общност в нашия красив град.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="text-white hover:text-blue-400 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              <li>
                <a href="/news" className="text-gray-300 hover:text-white transition-colors">
                  Последни новини
                </a>
              </li>
              <li>
                <a href="/documents" className="text-gray-300 hover:text-white transition-colors">
                  Документи
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  За нас
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакт</h3>
            <div className="space-y-2 text-gray-300">
              <p>Велико Търново, България</p>
              <p>Имейл: info@pcvt.bg</p>
              <p>Discord: Общността на КПВТ</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Клуб на Програмистите във Велико Търново. Всички права запазени.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="/documents/privacy-policy/" className="text-gray-400 hover:text-white text-sm mr-4 transition-colors">
                Политика за поверителност
              </a>
              <a href="/documents/terms-of-service/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия за ползване
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
