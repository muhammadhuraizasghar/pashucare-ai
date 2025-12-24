
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TermsOfService: React.FC = () => {
    const { t, language } = useLanguage();
    
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 my-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
                {t('Terms of Service', 'شرائط و ضوابط')}
            </h1>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('1. Acceptance of Terms', '1. شرائط کی قبولیت')}
                    </h2>
                    <p>
                        {t('By using PashuCare AI, you agree to follow these terms. If you do not agree, please do not use the app.', 
                           'پشو کیئر AI استعمال کر کے، آپ ان شرائط پر عمل کرنے سے اتفاق کرتے ہیں۔ اگر آپ متفق نہیں ہیں تو براہ کرم ایپ استعمال نہ کریں۔')}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('2. Use of AI Services', '2. AI سروسز کا استعمال')}
                    </h2>
                    <p>
                        {t('PashuCare AI uses advanced AI models to provide suggestions. These are for informational purposes only and should not replace professional veterinary advice.', 
                           'پشو کیئر AI تجاویز فراہم کرنے کے لیے جدید AI ماڈلز کا استعمال کرتا ہے۔ یہ صرف معلوماتی مقاصد کے لیے ہیں اور انہیں پیشہ ورانہ ویٹرنری مشورے کی جگہ نہیں لینی چاہیے۔')}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('3. User Responsibilities', '3. صارف کی ذمہ داریاں')}
                    </h2>
                    <p>
                        {t('Users are responsible for the accuracy of the data they enter and for the health of their animals. PashuCare AI is not liable for any losses resulting from the use of the app.', 
                           'صارفین اپنے درج کردہ ڈیٹا کی درستگی اور اپنے جانوروں کی صحت کے ذمہ دار ہیں۔ پشو کیئر AI ایپ کے استعمال کے نتیجے میں ہونے والے کسی بھی نقصان کا ذمہ دار نہیں ہے۔')}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary mb-3">
                        {t('4. Account Security', '4. اکاؤنٹ کی حفاظت')}
                    </h2>
                    <p>
                        {t('You are responsible for maintaining the confidentiality of your account information. We recommend using strong passwords.', 
                           'آپ اپنے اکاؤنٹ کی معلومات کی رازداری برقرار رکھنے کے ذمہ دار ہیں۔ ہم مضبوط پاس ورڈ استعمال کرنے کی سفارش کرتے ہیں۔')}
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <h2 className="text-xl font-bold text-red-700 mb-3">
                        {t('5. Limitation of Liability', '5. ذمہ داری کی حد')}
                    </h2>
                    <p className="italic font-medium">
                        {t('The app is provided "as is" without any warranties. We do not guarantee 100% accuracy of AI-generated content.', 
                           'ایپ "جیسی ہے" کی بنیاد پر فراہم کی گئی ہے بغیر کسی وارنٹی کے۔ ہم AI کے تیار کردہ مواد کی 100% درستگی کی ضمانت نہیں دیتے ہیں۔')}
                    </p>
                </section>

                <div className="pt-8 border-t text-sm text-gray-500 text-center">
                    {t('Last updated: December 2024', 'آخری بار اپ ڈیٹ کیا گیا: دسمبر 2024')}
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
