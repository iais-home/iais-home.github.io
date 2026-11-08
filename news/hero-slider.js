// news/hero-slider.js
// The home page slider is built from NEWS_DATA (news/news-data.js).
// To feature a news item in the slider, give it a `hero` field there; remove the field to take it out.
// news-data.js must be loaded before this file.
const HERO_STYLES = [
  {
    badgeColor: "bg-[#E0B24D] text-[#12264A]",
    buttonColor: "bg-[#E0B24D] hover:bg-yellow-500 text-[#12264A] border-[#E0B24D]",
    bgColor: "bg-[#12264A]"
  },
  {
    badgeColor: "bg-blue-500 text-white",
    buttonColor: "border border-white hover:bg-white hover:text-[#12264A]",
    bgColor: "bg-[#114B74]"
  },
  {
    badgeColor: "bg-emerald-600 text-white",
    buttonColor: "bg-[#E0B24D] hover:bg-yellow-500 text-[#12264A] border-[#E0B24D]",
    bgColor: "bg-[#0a172c]"
  }
];

const HERO_SLIDER_DATA = (typeof NEWS_DATA !== 'undefined' ? NEWS_DATA : [])
  .filter(item => item.hero)
  .map((item, i) => {
    const style = HERO_STYLES[i % HERO_STYLES.length];
    return {
      badge: item.hero.badge || item.category,
      badgeColor: style.badgeColor,
      title: item.hero.title || item.title,
      description: item.hero.description || item.summary,
      buttonText: item.hero.buttonText || "Read More →",
      buttonLink: `/news/news-detail.html?id=${item.id}`,
      buttonColor: style.buttonColor,
      bgColor: style.bgColor
    };
  });
