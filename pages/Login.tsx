import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, Phone, Mail, Lock, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useFarm } from '../context/FarmContext';

const Login: React.FC = () => {
  const { t } = useLanguage();
  const { login, register, loading } = useAuth();
  const { triggerSync } = useFarm();
  const navigate = useNavigate();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [formData, setFormData] = useState({ name: '', identifier: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
        if (mode === 'login') {
            await login(formData.identifier, formData.password);
        } else {
            const profile = {
                name: formData.name,
                role: 'farmer' as const, // default
                [method === 'email' ? 'email' : 'phone']: formData.identifier
            };
            await register(profile, formData.password);
        }
        
        // After successful auth, trigger data sync/migration
        await triggerSync();
        navigate('/');
    } catch (err: any) {
        setError(err.message || t('Authentication failed', 'توثیق ناکام ہوگئی'));
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Tabs */}
        <div className="flex bg-gray-50 border-b border-gray-100">
            <button 
                onClick={() => setMode('login')} 
                className={`flex-1 py-4 text-center font-bold text-sm transition-colors ${mode === 'login' ? 'bg-white text-primary border-t-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
            >
                {t('Login', 'لاگ ان')}
            </button>
            <button 
                onClick={() => setMode('register')} 
                className={`flex-1 py-4 text-center font-bold text-sm transition-colors ${mode === 'register' ? 'bg-white text-primary border-t-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
            >
                {t('Create Account', 'اکاؤنٹ بنائیں')}
            </button>
        </div>

        <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {mode === 'login' ? t('Welcome Back', 'خوش آمدید') : t('Join PashuCare', 'پشو کیئر میں شامل ہوں')}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
                {mode === 'login' 
                    ? t('Access your farm records and settings.', 'اپنے فارم کے ریکارڈ اور ترتیبات تک رسائی حاصل کریں۔')
                    : t('Sync data across devices and never lose a record.', 'تمام آلات پر ڈیٹا سنک کریں اور کبھی بھی ریکارڈ ضائع نہ کریں۔')
                }
            </p>

            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 flex items-center text-sm">
                    <AlertTriangle size={18} className="mr-2 shrink-0"/> {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name (Register Only) */}
                {mode === 'register' && (
                    <div className="animate-fadeIn">
                        <label className="block text-sm font-bold text-gray-700 mb-1">{t('Full Name', 'پورا نام')}</label>
                        <input 
                            type="text" 
                            required 
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" 
                            placeholder="Ali Khan"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                )}

                {/* Method Toggle */}
                <div className="flex gap-4 mb-2">
                     <label className="flex items-center cursor-pointer">
                         <input type="radio" name="method" className="mr-2" checked={method === 'email'} onChange={() => setMethod('email')} />
                         <span className="text-sm font-medium text-gray-700">{t('Email', 'ای میل')}</span>
                     </label>
                     <label className="flex items-center cursor-pointer">
                         <input type="radio" name="method" className="mr-2" checked={method === 'phone'} onChange={() => setMethod('phone')} />
                         <span className="text-sm font-medium text-gray-700">{t('Phone', 'فون نمبر')}</span>
                     </label>
                </div>

                {/* Identifier Input */}
                <div>
                    <div className="relative">
                        <span className="absolute left-4 top-3.5 text-gray-400">
                            {method === 'email' ? <Mail size={20}/> : <Phone size={20}/>}
                        </span>
                        <input 
                            type={method === 'email' ? 'email' : 'tel'} 
                            required 
                            className="w-full p-3 pl-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" 
                            placeholder={method === 'email' ? 'name@example.com' : '0300 1234567'}
                            value={formData.identifier}
                            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <div className="relative">
                         <span className="absolute left-4 top-3.5 text-gray-400">
                            <Lock size={20}/>
                        </span>
                        <input 
                            type="password" 
                            required 
                            className="w-full p-3 pl-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" 
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-primary hover:bg-green-800 text-white font-bold py-3.5 rounded-xl shadow-lg transition-transform active:scale-95 flex justify-center items-center"
                >
                    {loading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        mode === 'login' ? t('Login', 'لاگ ان کریں') : t('Create Account', 'اکاؤنٹ بنائیں')
                    )}
                </button>
            </form>

            {/* Offline Info */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 mb-2">{t('Why create an account?', 'اکاؤنٹ کیوں بنائیں؟')}</p>
                <div className="flex justify-center gap-4 text-xs font-medium text-gray-600">
                    <span className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-1"/> {t('Cloud Backup', 'کلاؤڈ بیک اپ')}</span>
                    <span className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-1"/> {t('Multi-device', 'ملٹی ڈیوائس')}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;