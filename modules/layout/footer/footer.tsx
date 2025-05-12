import Image from "next/image";
import { useTranslation } from "react-i18next";
export const footerInfoUkr = {
  title: "Про магазин",
  text: `BookVerse — це інтернет-книгарня, де ви знайдете художню, наукову, бізнес-літературу та багато іншого. Наша місія — зробити читання зручним і доступним.`,
};

export const footerInfoEn = {
  title: "About the Store",
  text: `BookVerse is an online bookstore where you can find fiction, scientific, business literature, and more. Our mission is to make reading convenient and accessible.`,
};

export const blogPostsUkr = [
  {
    imgSrc: "/images/blog/reading-habits.jpg",
    title: "Як читати більше",
    subtitle: "Поради для зайнятих людей",
  },
  {
    imgSrc: "/images/blog/new-releases.jpg",
    title: "Новинки місяця",
    subtitle: "Свіжі надходження в нашому каталозі",
  },
];

export const blogPostsEn = [
  {
    imgSrc: "/images/blog/reading-habits.jpg",
    title: "How to Read More",
    subtitle: "Tips for busy people",
  },
  {
    imgSrc: "/images/blog/new-releases.jpg",
    title: "New Releases of the Month",
    subtitle: "Fresh arrivals in our catalog",
  },
];

export const popularTagsUkr = [
  "Фентезі", "Бізнес", "Наука", "Психологія", "Класика", "Новинки", "Художнє", "Історія", "Детектив", "Мотивація", "Самодопомога", "Комікси"
];

export const popularTagsEn = [
  "Fantasy", "Business", "Science", "Psychology", "Classics", "New Releases", "Fiction", "History", "Detective", "Motivation", "Self-help", "Comics"
];

export function Footer() {
  const {t,i18n} = useTranslation();
  const footerInfo = t("footer.footerInfo",{returnObjects:true}) as typeof  footerInfoUkr || typeof footerInfoEn;
  const blogPosts  = i18n.language === "uk" ?  blogPostsUkr  : blogPostsEn;
  const popularTags = i18n.language === "uk" ? popularTagsUkr : popularTagsEn;

  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="flex flex-col md:flex-row md:space-x-8">

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">{footerInfo.title}</h3>
          <p className="text-sm">{footerInfo.text}</p>
        </div>

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Blog</h3>
          <ul>
            {blogPosts.map((post, index) => (
              <li
                key={index}
                className="flex items-start space-x-4 mb-4 hover:bg-black hover:bg-opacity-10 p-2 rounded"
              >
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  className="w-12 h-12 object-cover"
                  width={40}
                  height={40}
                />
                <div>
                  <span className="block text-base font-medium">{post.title}</span>
                  <span className="block text-sm">{post.subtitle}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">{t("footer.popular")}</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded ${index === 0 ? "bg-black" : "bg-gray-600"}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

