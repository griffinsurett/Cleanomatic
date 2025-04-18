import Logo from "@/assets/cleanomaticvanright3.png"; // Update if you have a custom logo

export const SiteData = {
  title: "Cleanomatic",
  tagline: "A Name You can trust!",
  description:
    "Cleanomatic provides expert cleaning services including tile and grout cleaning, air duct cleaning, dryer vent cleaning, carpet cleaning, couch cleaning, and water restoration.",
  logo: {
    src: Logo,
    alt: "Cleanomatic logo",
  },
  businessHours: [
    { day: "Monday", hours: "9 AM–6:30 PM" },
    { day: "Tuesday", hours: "9 AM–6:30 PM" },
    { day: "Wednesday", hours: "9 AM–6:30 PM" },
    { day: "Thursday", hours: "9 AM–6:30 PM" },
    { day: "Friday", hours: "9 AM–5 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
};

export const CTAdata = {
  title: "Get a Free Quote",
  description: "Contact us today for a free quote on our cleaning services.",
  buttonText: "Contact Us",
  buttonLink: "/contact-us",
}

export const ContactData = {
  email: "cleanomaticnj@gmail.com",
  phone: [
    {
      type: "office",
      number: "7329950995",
    },
    {
      type: "cell",
      number: "7329950909",
    },
  ]
};

export const SocialData = [
    {
        title: "Twitter",
        href: "https://twitter.com/griffin",
        icon: "twitter",
    },
    {
        title: "LinkedIn",
        href: "https://linkedin.com/griffin",
        icon: "linkedin",
    },
]


