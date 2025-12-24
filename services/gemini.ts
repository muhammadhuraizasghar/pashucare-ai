
import { GoogleGenAI, Type } from "@google/genai";
import { DiseaseAnalysis, FeedPlan, Language, UserRole, ImageAnalysisResult } from "../types";

// Fix: Always use named parameter for apiKey and use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
// Fix: Updated to gemini-3-flash-preview for general text and reasoning tasks as recommended.
const modelName = 'gemini-3-flash-preview';

const getSystemInstruction = (lang: Language, role: UserRole) => {
  let base = "You are an expert veterinary and livestock management AI assistant named 'PashuCare'.";
  
  if (role === 'vet') {
    base += " Provide technical medical terminology, differential diagnoses, and detailed pharmacological suggestions.";
  } else if (role === 'farmer') {
    base += " Use simple, practical language. Focus on home remedies, immediate management, and when to call a vet.";
  } else {
    base += " Provide balanced advice suitable for extension workers.";
  }

  if (lang === 'ur') {
    return `${base} Respond ONLY in Urdu (using Urdu script).`;
  }
  return `${base} Respond in English.`;
};

// Renamed from identifyBreed to analyzeBreedImage to reflect "verification" nature
export const analyzeBreedImage = async (base64Image: string, lang: Language): Promise<ImageAnalysisResult> => {
  try {
    const prompt = lang === 'ur' 
      ? "اس جانور کی تصویر کا تجزیہ کریں۔ اس کی نسل تجویز کریں اور بصری خصوصیات کی فہرست بنائیں۔"
      : "Analyze this livestock image. Suggest the most likely breed with confidence score and list visual traits.";

    const response = await ai.models.generateContent({
      model: modelName,
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
          { text: prompt }
        ]
      },
      config: {
        systemInstruction: "Return response in JSON.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestedBreed: { type: Type.STRING },
            confidence: { type: Type.NUMBER, description: "Confidence score between 0 and 100" },
            reasoning: { type: Type.STRING },
            visualTraits: { type: Type.ARRAY, items: { type: Type.STRING } },
          }
        }
      }
    });

    if (!response.text) throw new Error("No response from AI");
    // Fix: Access response text via .text property (not a method) and trim it.
    return JSON.parse(response.text.trim()) as ImageAnalysisResult;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
};

export const diagnoseSymptoms = async (symptoms: string, lang: Language, role: UserRole): Promise<DiseaseAnalysis> => {
  try {
    const prompt = lang === 'ur'
      ? `ان علامات کی بنیاد پر بیماری کی تشخیص کریں: ${symptoms}`
      : `Diagnose potential livestock diseases based on these symptoms: ${symptoms}`;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction: getSystemInstruction(lang, role) + " Return response in JSON.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            possibleConditions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  probability: { type: Type.STRING },
                  description: { type: Type.STRING },
                }
              }
            },
            immediateActions: { type: Type.ARRAY, items: { type: Type.STRING } },
            preventiveMeasures: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommendedTreatment: { type: Type.STRING },
            vetNotes: { type: Type.STRING, description: "Technical notes if applicable" },
          }
        }
      }
    });

    if (!response.text) throw new Error("No response from AI");
    // Fix: Access response text via .text property and trim for parsing.
    return JSON.parse(response.text.trim()) as DiseaseAnalysis;
  } catch (error) {
    console.error("Error diagnosing:", error);
    throw error;
  }
};

export const generateFeedPlan = async (
  animalType: string,
  weight: string,
  condition: string,
  lang: Language
): Promise<FeedPlan> => {
  // Feed planning is less role-dependent, usually standard
  try {
    const prompt = lang === 'ur'
      ? `ایک ${animalType} (وزن: ${weight}, حالت: ${condition}) کے لیے روزانہ کی خوراک کا منصوبہ بنائیں۔`
      : `Generate a daily feed plan for a ${animalType} (Weight: ${weight}, Condition: ${condition}).`;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction: getSystemInstruction(lang, 'worker') + " Return response in JSON.", // Use neutral role
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            dailyPlan: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  timeOfDay: { type: Type.STRING },
                  item: { type: Type.STRING },
                  quantity: { type: Type.STRING },
                  notes: { type: Type.STRING },
                }
              }
            },
            nutritionalSummary: { type: Type.STRING },
            tips: { type: Type.ARRAY, items: { type: Type.STRING } }
          }
        }
      }
    });

    if (!response.text) throw new Error("No response from AI");
    // Fix: Access response text via .text property and trim for parsing.
    return JSON.parse(response.text.trim()) as FeedPlan;
  } catch (error) {
    console.error("Error generating feed plan:", error);
    throw error;
  }
};

export const getGeneralAdvice = async (query: string, lang: Language, role: UserRole): Promise<string> => {
   try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: query,
      config: {
        systemInstruction: getSystemInstruction(lang, role) + " Format with Markdown.",
      }
    });
    // Fix: Access response text via .text property directly.
    return response.text || "";
   } catch (error) {
     console.error("Error getting advice:", error);
     return "Error retrieving advice. Please try again.";
   }
}
