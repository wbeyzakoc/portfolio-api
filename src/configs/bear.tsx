import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-ph-paw-print",
    md: [
      {
        id: "iletisim bilgileri",
        title: "İletişim Bilgileri",
        file: "markdown/contact.md",
        icon: "i-ph-shield-star",
        excerpt: "Her zaman iletişim kurmak için buradayım..."
      },
      {
        id: "hakkımda",
        title: "Hakkımda",
        file: "markdown/about-me.md",
           icon: "i-ph-shield-star",
        excerpt: "Hakımda..."
      },
      {
        id: "about-site",
        title: "Site Hakkında",
        file: "markdown/about-site.md",
            icon: "i-ph-shield-star",
        excerpt: "web sitesi hakkında..."
      }
    ]
  },
   
];

export default bear;
