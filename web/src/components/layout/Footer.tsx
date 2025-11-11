export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-slate-100 text-slate-900">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">À Propos</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Le Ministère délégué à la Défense œuvre pour la protection du territoire national et le renforcement des capacités des Forces Armées Congolaises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">Accès Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/ministere/missions" className="text-slate-700 hover:text-slate-900 transition-colors">Nos missions</a></li>
              <li><a href="/actualites" className="text-slate-700 hover:text-slate-900 transition-colors">Actualités</a></li>
              <li><a href="/documents" className="text-slate-700 hover:text-slate-900 transition-colors">Documents officiels</a></li>
              <li><a href="/marches-publics" className="text-slate-700 hover:text-slate-900 transition-colors">Marchés publics</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/fardc" className="text-slate-700 hover:text-slate-900 transition-colors">FARDC</a></li>
              <li><a href="/anciens-combattants" className="text-slate-700 hover:text-slate-900 transition-colors">Anciens Combattants</a></li>
              <li><a href="/recrutement" className="text-slate-700 hover:text-slate-900 transition-colors">Recrutement</a></li>
              <li><a href="/medias" className="text-slate-700 hover:text-slate-900 transition-colors">Médias</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">Contact</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">Adresse</p>
                <p>Kinshasa, République Démocratique du Congo</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Téléphone</p>
                <p>+243 (0) 1 XXX XXXX</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p><a href="mailto:info@mindeldef.cd" className="hover:text-slate-900 transition-colors">info@mindeldef.cd</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-300 py-8">
          {/* Social Media & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-900">Suivez-nous</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-300 hover:bg-blue-600 flex items-center justify-center transition-colors text-slate-900" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-300 hover:bg-blue-400 flex items-center justify-center transition-colors text-slate-900" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.856.973 5 5 0 00-8.66-3.08 5 5 0 00-1.54 2.08 5 5 0 01-1.41-.27c.005.01.005.01.005.01a5 5 0 004.032 6.169 5 5 0 01-2.25.689 5 5 0 001.666 2.813 5 5 0 01-2.25.689 5 5 0 004.032 6.169 10 10 0 01-6.2 2.185c-.82 0-1.63-.05-2.428-.15a14.24 14.24 0 007.752 2.27c9.303 0 14.373-7.706 14.373-14.373 0-.219-.005-.438-.015-.655a10.012 10.012 0 002.457-2.548z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-300 hover:bg-red-600 flex items-center justify-center transition-colors text-slate-900" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/mentions-legales" className="text-slate-700 hover:text-slate-900 transition-colors">Mentions légales</a>
              <span className="text-slate-400">|</span>
              <a href="/donnees-personnelles" className="text-slate-700 hover:text-slate-900 transition-colors">Données personnelles</a>
              <span className="text-slate-400">|</span>
              <a href="/accessibilite" className="text-slate-700 hover:text-slate-900 transition-colors">Accessibilité</a>
              <span className="text-slate-400">|</span>
              <a href="/faq" className="text-slate-700 hover:text-slate-900 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-200 border-t border-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-700">
          <p>
            &copy; {currentYear} Ministère délégué à la Défense — République Démocratique du Congo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
