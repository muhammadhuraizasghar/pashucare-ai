
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, ClipboardList, Stethoscope, Utensils, BookOpen, Menu, X, Globe, User, 
  Sprout, Warehouse, CalendarCheck, LogIn, RefreshCw, Trash2, ShieldAlert, Pill,
  ArrowLeft, Activity
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useFarm } from '../context/FarmContext';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'home', labelEn: 'Home', labelUr: 'ہوم', icon: Home, path: '/' },
  { id: 'calendar', labelEn: 'Calendar', labelUr: 'کیلنڈر', icon: CalendarCheck, path: '/calendar' },
  { id: 'breed', labelEn: 'Breeds', labelUr: 'نسلیں', icon: ClipboardList, path: '/breeds' },
  { id: 'health', labelEn: 'Health', labelUr: 'صحت', icon: Stethoscope, path: '/health' },
  { id: 'medicines', labelEn: 'Medicines', labelUr: 'ادویات', icon: Pill, path: '/medicines' },
  { id: 'feed', labelEn: 'Feed', labelUr: 'خوراک', icon: Utensils, path: '/feed' },
  { id: 'fodder', labelEn: 'Fodder', labelUr: 'چارہ', icon: Sprout, path: '/fodder' },
  { id: 'farm', labelEn: 'Farm', labelUr: 'فارم', icon: Warehouse, path: '/farm' },
  { id: 'guides', labelEn: 'Guides', labelUr: 'رہنمائی', icon: BookOpen, path: '/guides' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { user, logout, deleteAccount } = useAuth();
  const { triggerSync } = useFarm();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);

  const handleDeleteAccount = async () => {
    if (window.confirm(t('Are you sure you want to delete your account? All your data will be permanently removed.', 
                          'کیا آپ واقعی اپنا اکاؤنٹ حذف کرنا چاہتے ہیں؟ آپ کا تمام ڈیٹا مستقل طور پر ختم کر دیا جائے گا۔'))) {
        await deleteAccount();
        setShowProfileMenu(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="p-3 md:p-4 sticky top-0 z-50">
        <header className="bg-primary/80 backdrop-blur-xl text-white shadow-lg rounded-2xl md:rounded-3xl border border-white/10">
          <div className="container mx-auto px-4 py-2.5 md:py-3 flex justify-between items-center">
            <div className="flex items-center">
              {location.pathname !== '/' && (
                <button 
                  onClick={() => navigate(-1)} 
                  className="mr-3 p-1.5 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center bg-white/10 border border-white/20 shadow-inner"
                  aria-label="Back"
                >
                  <ArrowLeft size={18} />
                </button>
              )}
              <Link to="/" className="flex items-center space-x-2 shrink-0">
                <span className="text-xl md:text-2xl font-bold tracking-tight">{t('PashuCare AI', 'پشو کیئر AI')}</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-all border border-white/20 font-bold backdrop-blur-md"
                aria-label={language === 'en' ? 'Switch to Urdu' : 'انگریزی میں تبدیل کریں'}
              >
                <Globe size={18} className={language === 'ur' ? 'ml-2' : 'mr-2'} />
                <span className="text-sm">{language === 'en' ? 'اردو' : 'English'}</span>
              </button>

              <div className="hidden md:flex items-center space-x-1 space-x-reverse">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-xl transition-all ${
                      location.pathname === item.path ? 'bg-white/20 text-accent font-semibold shadow-inner' : 'hover:bg-white/10'
                    }`}
                  >
                    <item.icon size={18} className={language === 'ur' ? 'ml-2' : 'mr-2'} />
                    <span className="text-sm">{language === 'en' ? item.labelEn : item.labelUr}</span>
                  </Link>
                ))}

                <div className="relative ml-2">
                  {user ? (
                     <button 
                       onClick={() => setShowProfileMenu(!showProfileMenu)}
                       className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl border border-white/20 transition backdrop-blur-md"
                       aria-label="Profile Menu"
                     >
                         <User size={16} />
                         <span className="text-sm font-medium max-w-[80px] truncate">{user.name}</span>
                     </button>
                  ) : (
                    <Link to="/login" className="flex items-center gap-2 bg-accent text-green-900 px-4 py-1.5 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                        <LogIn size={16} />
                        <span className="text-sm">{t('Login', 'لاگ ان')}</span>
                    </Link>
                  )}

                  {showProfileMenu && user && (
                      <div className="absolute right-0 mt-3 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 py-2 text-gray-800 animate-fadeIn z-50">
                          <div className="px-4 py-2 border-b border-gray-100">
                               <p className="font-bold text-sm">{user.name}</p>
                               <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                          </div>
                          <button onClick={() => { triggerSync(); setShowProfileMenu(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center text-sm">
                               <RefreshCw size={14} className="mr-2" /> {t('Sync Records', 'ریکارڈ سنک کریں')}
                          </button>
                          <button onClick={handleDeleteAccount} className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 flex items-center text-sm border-t border-gray-100 mt-1">
                               <Trash2 size={14} className="mr-2" /> {t('Delete Account', 'اکاؤنٹ حذف کریں')}
                          </button>
                          <button onClick={() => { logout(); setShowProfileMenu(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600 flex items-center text-sm border-t border-gray-100">
                               <LogIn size={14} className="mr-2 rotate-180" /> {t('Logout', 'لاگ آؤٹ')}
                          </button>
                      </div>
                  )}
                </div>
              </div>

              <div className="flex items-center md:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Toggle Mobile Menu"
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/10">
              <nav className="flex flex-col p-4 space-y-1.5">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center p-3 rounded-xl transition-all ${
                      location.pathname === item.path ? 'bg-white/20 text-accent shadow-inner' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <item.icon size={20} className={language === 'ur' ? 'ml-3' : 'mr-3'} />
                    <span className="font-medium">{language === 'en' ? item.labelEn : item.labelUr}</span>
                  </Link>
                ))}
                {!user && (
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center p-3 text-accent font-bold bg-white/10 rounded-xl mt-2">
                     <LogIn size={20} className="mr-3" /> {t('Login', 'لاگ ان')}
                  </Link>
                )}
              </nav>
            </div>
          )}
        </header>
      </div>

      <main className="flex-grow container mx-auto px-4 py-2 md:py-6">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 text-gray-600 py-16 mt-auto">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Activity size={20} className="text-white" />
                </div>
                <h3 className="text-primary font-black text-2xl tracking-tighter">{t('PashuCare AI', 'پشو کیئر AI')}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 max-w-xs text-justify font-medium">
                {t('Your comprehensive AI assistant for smarter livestock management. Helping farmers with health, nutrition, and records.', 
                   'بہتر لائیو اسٹاک مینجمنٹ کے لیے آپ کا جامع AI اسسٹنٹ۔ صحت، خوراک اور ریکارڈ میں کسانوں کی مدد کرتا ہے۔')}
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-gray-900 font-bold mb-6 text-lg tracking-tight border-b-2 border-primary/10 pb-2 w-full md:w-auto">{t('Legal & Privacy', 'قانونی اور رازداری')}</h3>
              <ul className="text-sm space-y-4 w-full">
                <li>
                  <Link to="/privacy" className="group text-gray-500 hover:text-primary transition-all flex items-center justify-center md:justify-start gap-3 bg-gray-50 md:bg-transparent p-3 md:p-0 rounded-xl">
                    <div className="p-2 bg-white md:bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors shadow-sm md:shadow-none">
                      <ShieldAlert size={16} className="text-primary" />
                    </div>
                    <span className="font-semibold">{t('Privacy Policy', 'رازداری کی پالیسی')}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="group text-gray-500 hover:text-primary transition-all flex items-center justify-center md:justify-start gap-3 bg-gray-50 md:bg-transparent p-3 md:p-0 rounded-xl">
                    <div className="p-2 bg-white md:bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors shadow-sm md:shadow-none">
                      <BookOpen size={16} className="text-primary" />
                    </div>
                    <span className="font-semibold">{t('Terms of Service', 'شرائط و ضوابط')}</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-gray-900 font-bold mb-6 text-lg tracking-tight border-b-2 border-red-500/10 pb-2 w-full md:w-auto">{t('Medical Disclaimer', 'طبی ڈسکلیمر')}</h3>
              <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100">
                <p className="text-xs leading-relaxed italic text-red-700/80 text-justify font-medium">
                  {t('AI results are for informational and educational purposes only. Always consult a qualified veterinarian for professional diagnosis and treatment.', 
                     'AI کے نتائج صرف معلوماتی اور تعلیمی مقاصد کے لیے ہیں۔ پیشہ ورانہ تشخیص اور علاج کے لیے ہمیشہ مستند ویٹرنری ڈاکٹر سے مشورہ کریں۔')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-gray-400 font-bold tracking-widest uppercase">
              <span>{t('© 2024 PashuCare AI', '© 2024 پشو کیئر')}</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
              <span className="text-primary/40">{t('All Rights Reserved', 'جملہ حقوق محفوظ ہیں')}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-xs font-black text-primary uppercase tracking-tighter">
                {t('Built for smarter farming', 'بہتر فارمنگ کے لیے تیار کردہ')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
