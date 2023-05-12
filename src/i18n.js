import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      dark: "GECE MODU",
      light: "GÜNDÜZ MODU",
      heroTitle: "Ben bir full-stack geliştiriciyim...",
      heroMotto:
        "...harika kullanıcı deneyimleri ile sağlam ve ölçeklendirilebilir önuç ürünleri üretmeyi seven.",
      skills: "Beceriler",
      profile: "Profil",
      basicInfo: "Temel Bilgiler",
      birth: "Doğum tarihi",
      city: "İkamet ettiği Şehir",
      education: "Eğitim Durumu",
      role: "Tercih Ettiği Rol",
      about: "Hakkımda",
      lorem1:
        "Çabuk tilki, yaralanma taklidi yaparak, kahramanca tutkuyla tuttuğu, kahverengi köpeğin üstünden atlıyor. Ve daha neler yapacak kim bilebilir?",
      lorem2:
        "Nedenleri açığa çıkararak keyif almayı deneyimleyerek hangi anılarımızı yaratıyoruz? Söylenene göre, hayatta çok şey kaçırıyoruz!",
      projects: "Projeler",
      project1: "Ne izlesem?",
      project2: "Crud Filmler",
      projectExplanation:
        "Kullanıcılarınızın kabul etmeyi veya reddetmeyi seçebileceği basit, özelleştirilebilir ve minimal bir kurulumlu çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve NPM paketi olarak kullanılabilir. Git deposu sayesinde kod ve temaların her türlü özelleştirilmesi mümkün hale geliyor.",
      viewSite: "Siteye Git",
      sendMessage: "Bir mesaj gönderin!",
      contact:
        "Soru veya öneriniz varsa ya da sadece merhaba demek istiyorsanız? Devam edin.",
    },
  },

  en: {
    translation: {
      dark: "DARK MODE",
      light: "LIGHT MODE",
      heroTitle: "I am a full-stack developer...",
      heroMotto:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      skills: "Skills",
      profile: "Profile",
      basicInfo: "Basic Information",
      birth: "Date of birth",
      city: "City of Residence",
      education: "Education Status",
      role: "Preffered Role",
      about: "About Me",
      lorem1:
        "Quick fox jumps over the brown dog, faking injury, valiantly holding his zeal. And futhermore what will it do, who knows?",
      lorem2:
        "What memories do we create by opening ourselves up to reason and letting experience pleasure? They say that we miss out on much in life!",
      projects: "Projects",
      project1: "What Should I Watch?",
      project2: "Crud Movies",
      projectExplanation:
        " A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      viewSite: "View Site",
      sendMessage: "Send me a message!",
      contact:
        "Got a question or proposal, or just want to say hello? Go ahead.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
