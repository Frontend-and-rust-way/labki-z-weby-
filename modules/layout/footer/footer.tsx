import { useTranslation } from "react-i18next";
import { BookOpenText, Newspaper } from "lucide-react";

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
    icon: <BookOpenText size={20} />,
    title: "Як читати більше",
    subtitle: "Поради для зайнятих людей",
  },
  {
    icon: <Newspaper size={20}  />,
    title: "Новинки місяця",
    subtitle: "Свіжі надходження в нашому каталозі",
  },
];

export const blogPostsEn = [
  {
    icon: <BookOpenText size={20} />,
    title: "How to Read More",
    subtitle: "Tips for busy people",
  },
  {
    icon: <Newspaper size={20}  />,
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
  const { i18n } = useTranslation();
  const isUkr = i18n.language === "uk";

  const footerInfo = isUkr ? footerInfoUkr : footerInfoEn;
  const blogPosts = isUkr ? blogPostsUkr : blogPostsEn;
  const popularTags = isUkr ? popularTagsUkr : popularTagsEn;

  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="flex flex-col md:flex-row md:space-x-8">

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">{footerInfo.title}</h3>
          <p className="text-sm">{footerInfo.text}</p>
        </div>

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">{isUkr ? "Блог" : "Blog"}</h3>
          <ul>
            {blogPosts.map((post, index) => (
              <li
                key={index}
                className="flex items-start space-x-4 mb-4 hover:bg-black hover:bg-opacity-10 p-2 rounded"
              >
                {post.icon}
                <div>
                  <span className="block text-base font-medium">{post.title}</span>
                  <span className="block text-sm">{post.subtitle}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">{isUkr ? "Популярне" : "Popular"}</h3>
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
