import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, AlertTriangle, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const AdminLogin: React.FC = () => {
  const { t } = useLanguage();
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Rule: identifier must contain 'admin' to trigger admin role in AuthContext
    if (!formData.identifier.toLowerCase().includes('admin')) {
      setError(t('Invalid Admin Credentials', 'غلط ایڈمن معلومات'));
      return;
    }

    try {
        await login(formData.identifier, formData.password);
        navigate('/admin');
    } catch (err: any) {
        setError(t('Authentication failed', 'توثیق ناکام ہوگئی'));
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="mb-6 w-full max-w-md">
         <button onClick={() => navigate('/')} className="flex items-center text-gray-500 hover:text-primary font-bold transition">
            <ArrowLeft size={20} className="mr-2"/> {t('Back to App', 'واپس جائیں')}
         </button>
      </div>

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-gray-800 p-8 text-white text-center">
            <ShieldCheck size={48} className="mx-auto mb-3 text-accent" />
            <h2 className="text-2xl font-bold uppercase tracking-widest">{t('CMS Admin Login', 'ایڈمن لاگ ان')}</h2>
            <p className="text-gray-400 text-xs mt-1">{t('Authorized access only', 'صرف بااختیار افراد کے لیے')}</p>
        </div>

        <div className="p-8">
            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-start gap-3 text-sm">
                    <AlertTriangle size={20} className="shrink-0"/> {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{t('Admin Identifier', 'ایڈمن آئی ڈی')}</label>
                    <div className="relative">
                        <span className="absolute left-4 top-3.5 text-gray-400">
                            <Mail size={20}/>
                        </span>
                        <input 
                            type="text"
                            required 
                            className="w-full p-4 pl-12 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-800 outline-none transition-all" 
                            placeholder="admin@pashucare.ai"
                            value={formData.identifier}
                            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{t('Secure Password', 'پاس ورڈ')}</label>
                    <div className="relative">
                         <span className="absolute left-4 top-3.5 text-gray-400">
                            <Lock size={20}/>
                        </span>
                        <input 
                            type="password" 
                            required 
                            className="w-full p-4 pl-12 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-800 outline-none transition-all" 
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gray-800 hover:bg-black text-white font-bold py-4 rounded-2xl shadow-xl transition-all active:scale-95 flex justify-center items-center gap-2"
                >
                    {loading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <>
                          <Lock size={18} />
                          {t('Enter CMS Panel', 'ایڈمن پینل میں داخل ہوں')}
                        </>
                    )}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;