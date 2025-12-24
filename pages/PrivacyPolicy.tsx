
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
    const { t, language } = useLanguage();
    
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 my-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
                {t('Privacy Policy', 'رازداری کی پالیسی')}
            </h1>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('1. Introduction', '1. تعارف')}
                    </h2>
                    <p>
                        {t('PashuCare AI is committed to protecting your privacy. This policy explains how we handle your data.', 
                           'پشو کیئر AI آپ کی رازداری کے تحفظ کے لیے پرعزم ہے۔ یہ پالیسی بتاتی ہے کہ ہم آپ کے ڈیٹا کو کیسے سنبھالتے ہیں۔')}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('2. Data Storage', '2. ڈیٹا اسٹوریج')}
                    </h2>
                    <p>
                        {t('Most of your farm data (animals, breeding records, etc.) is stored locally on your device using LocalStorage. We only sync data to our mock cloud servers if you are logged in, to help you recover records if you switch devices.', 
                           'آپ کا زیادہ تر فارم ڈیٹا (جانور، بریڈنگ ریکارڈ وغیرہ) آپ کے آلے پر لوکل اسٹوریج کا استعمال کرتے ہوئے محفوظ کیا جاتا ہے۔ ہم ڈیٹا کو صرف اس صورت میں اپنے کلاؤڈ سرورز سے ہم آہنگ کرتے ہیں جب آپ لاگ ان ہوں، تاکہ آلہ تبدیل کرنے کی صورت میں آپ کو ریکارڈ بحال کرنے میں مدد مل سکے۔')}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('3. Location Data', '3. مقام کا ڈیٹا')}
                    </h2>
                    <p>
                        {t('We request access to your location to provide accurate weather forecasts and localized agricultural calendar dates. This data is used only for display purposes and is not shared with third parties.', 
                           'ہم درست موسم کی پیشن گوئی اور مقامی زرعی کیلنڈر کی تاریخیں فراہم کرنے کے لیے آپ کے مقام تک رسائی کی درخواست کرتے ہیں۔ یہ ڈیٹا صرف دکھانے کے مقاصد کے لیے استعمال کیا جاتا ہے اور اسے تیسرے فریق کے ساتھ شیئر نہیں کیا جاتا۔')}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('4. User Control', '4. صارف کا کنٹرول')}
                    </h2>
                    <p>
                        {t('You have full control over your data. You can delete your account and all associated farm records permanently through the app settings at any time.', 
                           'آپ کو اپنے ڈیٹا پر مکمل کنٹرول حاصل ہے۔ آپ کسی بھی وقت ایپ کی ترتیبات کے ذریعے اپنا اکاؤنٹ اور اس سے وابستہ تمام فارم ریکارڈ مستقل طور پر حذف کر سکتے ہیں۔')}
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <h2 className="text-xl font-bold text-red-700 mb-3">
                        {t('5. Medical Disclaimer', '5. طبی ڈسکلیمر')}
                    </h2>
                    <p className="italic font-medium">
                        {t('The AI-powered diagnosis and medicine information provided by PashuCare AI are for educational purposes only. Always consult a licensed veterinarian before administering treatment.', 
                           'پشو کیئر AI کی فراہم کردہ AI تشخیص اور ادویات کی معلومات صرف تعلیمی مقاصد کے لیے ہیں۔ علاج کرنے سے پہلے ہمیشہ لائسنس یافتہ ویٹرنری ڈاکٹر سے مشورہ کریں۔')}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('6. Contact Us', '6. ہم سے رابطہ کریں')}
                    </h2>
                    <p>
                        {t('If you have any questions about this Privacy Policy, please contact us at support@pashucare.ai', 
                           'اگر آپ کے پاس اس رازداری کی پالیسی کے بارے میں کوئی سوالات ہیں، تو براہ کرم ہم سے support@pashucare.ai پر رابطہ کریں۔')}
                    </p>
                </section>

                <div className="pt-8 border-t text-sm text-gray-500 text-center">
                    {t('Last updated: December 2024', 'آخری بار اپ ڈیٹ کیا گیا: دسمبر 2024')}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
