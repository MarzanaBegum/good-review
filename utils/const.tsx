import DashboardIcon from "../components/CustomIcons/DashboardIcon";
import Invoice from "../components/CustomIcons/Invoice";
import Logout from "../components/CustomIcons/Logout";
import Orders from "../components/CustomIcons/Orders";
import Profile from "../components/CustomIcons/Profile";
import Services from "../components/CustomIcons/Services";
import Settings from "../components/CustomIcons/Settings";
import Support from "../components/CustomIcons/Support";

export const reviewData = [
  {
    title: "Get more customer",
    description:
      "Do you think about business plan? Yes this is the good question. We are also thinking about this; If your will use our awesome service we provide you our awesome customer.",
    icon: "/images/customer-icon.svg",
  },
  {
    title: "Increase business revinue",
    description:
      "72% of customers state dignissim eros. Vivamus congue erat ante, that positive reviews make them trust a business more.",
    icon: "/images/revenue-icon.svg",
  },
  {
    title: "Outrank your competition",
    description:
      "72% of customers state dignissim eros. Vivamus congue erat ante, that positive reviews make them trust a business more.",
    icon: "/images/competition-icon.svg",
  },
];
export const planCompareHead = [
  "Features",
  "Simple Client",
  "Custom Client",
  "Active Client",
];
export const planMoboHead = ["Features", "Simple Client"];
export const planCompareMoboData = [
  {
    id: 1,
    clientType: "Simple Client",
    features: "Money back garunty",
    type: true,
  },
  {
    id: 2,
    clientType: "Custom Client",
    features: "Free optimization",
    type: true,
  },
  {
    id: 3,
    clientType: "Active Client",
    features: "Upgrade options",
    type: true,
  },
  {
    id: 4,
    clientType: "Active Client",
    features: "24/7 Support",
    type: true,
  },
  {
    id: 5,
    clientType: "Active Client",
    features: "Social media review",
    type: true,
  },
];
export const planCompareData = [
  {
    id: 1,
    featureText: "Money back garunty",
    simpleClient: true,
    customClient: true,
    activeClient: true,
  },
  {
    id: 2,
    featureText: "Free optimization",
    simpleClient: false,
    customClient: true,
    activeClient: true,
  },
  {
    id: 3,
    featureText: "Upgrade options",
    simpleClient: false,
    customClient: false,
    activeClient: true,
  },
  {
    id: 4,
    featureText: "24/7 Support",
    simpleClient: false,
    customClient: false,
    activeClient: true,
  },
  {
    id: 5,
    featureText: "Social media review",
    simpleClient: false,
    customClient: false,
    activeClient: true,
  },
];

export const planMoboData = [
  {
    id: 1,
    title: "Simple Client",
    description:
      "Looking for an easy client to work with? We will send a fiverr customer.",
    image: "/icons/simple-client.svg",
  },
  {
    id: 2,
    title: "Custom Client",
    description:
      "Looking for an easy client to work with? We will send a fiverr customer.",
    image: "/icons/client2.svg",
  },
  {
    id: 3,
    title: "Active Client",
    description:
      "Looking for an easy client to work with? We will send a fiverr customer.",
    image: "/icons/client3.svg",
  },
];
export const brandData = [
  {
    id: 1,
    logo: "/brandLogo/brandlogo1.svg",
    url: "#",
  },
  {
    id: 2,
    logo: "/brandLogo/brandlogo2.svg",
    url: "#",
  },
  {
    id: 3,
    logo: "/brandLogo/brandlogo3.svg",
    url: "#",
  },
  {
    id: 4,
    logo: "/brandLogo/brandlogo4.svg",
    url: "#",
  },
  {
    id: 5,
    logo: "/brandLogo/brandlogo5.svg",
    url: "#",
  },
];

export type QuestionsDataType = {
  question: string;
  answer: string;
};

export const questionsData: QuestionsDataType[] = [
  {
    question: "What is GoodReviews?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis mollit.",
  },
  {
    question: "What website can i request for reviews?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis mollit.",
  },
  {
    question: "Can I call or upgrade any time?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis mollit.",
  },
  {
    question: "Can I get support for reviews?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis mollit.",
  },
  {
    question: "Does GoodReviews have the some review a marketplace?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis mollit.",
  },
];

export const fiverService = [
  {
    clientType: "Simple client",
    price: 15,
    services: [
      "Get 1 Review",
      "Get 1 Review",
      "24/7 Free Support",
      "5 Social Media Reviews",
      "Upgrade Options",
    ],
  },
  {
    clientType: "Custom client",
    price: 25,
    services: [
      "Get 1 Review",
      "Get 1 Review",
      "24/7 Free Support",
      "5 Social Media Reviews",
      "Upgrade Options",
    ],
  },
  {
    clientType: "Active client",
    price: 45,
    services: [
      "Get 1 Review",
      "Get 1 Review",
      "24/7 Free Support",
      "5 Social Media Reviews",
      "Upgrade Options",
    ],
  },
];

export const upworkService = [
  {
    clientType: "Simple client",
    price: 10,
    services: [
      "Get 1 Review",
      "Get 1 Review",
      "24/7 Free Support",
      "5 Social Media Reviews",
      "Upgrade Options",
    ],
  },
  {
    clientType: "Custom client",
    price: 15,
    services: [
      "Get 1 Review",
      "Get 1 Review",
      "24/7 Free Support",
      "5 Social Media Reviews",
      "Upgrade Options",
    ],
  },
  {
    clientType: "Active client",
    price: 35,
    services: [
      "Get 1 Review",
      "Get 1 Review",
      "24/7 Free Support",
      "5 Social Media Reviews",
      "Upgrade Options",
    ],
  },
];

export const privacyPolicyData = [
  {
    id: 1,
    title: "Our Policy",
    description:
      "As a UX designer, you should consider the Why, What and How of product use. The Why involves the user’s motivations for adopting a products whether they relate to a task they wish to perform with it or to values and views that users asociate with the ownership and use of the product. The What addresses the things people can do with a product--it’s functionality. Finally, the How relates to.",
  },
  {
    id: 2,
    title: "Privacy",
    description:
      "As a UX designer, you should consider the Why, What and How of product use. The Why involves the users’ motivations for adopting a product, whether they relate to a task they wish to perform with it or to values and views that users associate with the ownership and use of the product. The What addresses the things people can do with a product—its functionality. Finally, the How relates to the design of functionality in an accessible and aesthetically",
  },
  {
    id: 3,
    title: "Our Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipicscin elit. Etiam eu tupic molestie, distume esp a, mattis tellus, sed dignissim, metus nec fringila accumsum, risus sem sollicitudin lacus, ut interdum tellus!",
  },
];

export const startedData = [
  {
    id: 1,
    title: "Send your brief",
    description:
      "SeaWire web is a wireframe kit that has more than 15 popular categories and more than 200 screens.",
  },
  {
    id: 2,
    title: "We’re developing",
    description:
      "SeaWire web is a wireframe kit that has more than 15 popular categories and more than 200 screens.",
  },
  {
    id: 3,
    title: "Deliver to you",
    description:
      "SeaWire web is a wireframe kit that has more than 15 popular categories and more than 200 screens.",
  },
];

export const selectPaymentMethoData = [
  {
    id: 1,
    method: "card",
    img: "/images/payment-card.svg",
  },
  // {
  //     id: 2,
  //     method: "transferWise",
  //     img: "/images/payment-img1.svg",
  // },
  // {
  //     id: 2,
  //     method: "paypal",
  //     img: "/images/payment-img2.svg",
  // },
  {
    id: 4,
    method: "payoneer",
    img: "/images/payment-img3.svg",
  },
];

export const orderSummaryData = [
  {
    id: 1,
    type: "Simple Client",
    price: "75",
    Qty: 2,
  },
  {
    id: 2,
    type: "Active Client",
    price: "50",
    Qty: 1,
  },
  {
    id: 3,
    type: "Custom Client",
    price: "80",
    Qty: 2,
  },
];

export const sideNavData = [
  {
    title: "Dashboard",
    url: "/dashboard",
    Icon: DashboardIcon,
  },
  {
    title: "Orders ",
    url: "/dashboard/orders",
    Icon: Orders,
  },
  {
    title: "Services",
    url: "/dashboard/services",
    Icon: Services,
  },
  {
    title: "Invoices",
    url: "/dashboard/invoices",
    Icon: Invoice,
  },
  {
    title: "Support",
    url: "/dashboard/support",
    Icon: Support,
  },
];

export const dropdownMenuData = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    Icon: Profile,
  },
  {
    title: "Account Settings",
    url: "/dashboard/account-settings",
    Icon: Settings,
  },
  {
    title: "Log out",
    url: "/logout",
    Icon: Logout,
  },
];

export const orderFilter = [
  { value: "all", label: "All orders" },
  { value: "pending", label: "Pending order" },
  { value: "cancelled", label: "Cancelled order" },
  { value: "completed", label: "Completed order" },
  { value: "in progress", label: "In progress order" },
];
export const invoiceFilter = [
  { value: "all", label: "All Payment" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

export const invoiceData = [
  {
    id: 1,
    invoice_no: "243535",
    amount: 200,
    status: "completed",
    createdAt: "24/08/2022",
  },
  {
    id: 2,
    invoice_no: "243535",
    amount: 300,
    status: "pending",
    createdAt: "24/08/2022",
  },
  {
    id: 3,
    invoice_no: "243535",
    amount: 200,
    status: "completed",
    createdAt: "24/08/2022",
  },
  {
    id: 4,
    invoice_no: "243535",
    amount: 200,
    status: "processing",
    createdAt: "24/08/2022",
  },
  {
    id: 5,
    invoice_no: "243535",
    amount: 200,
    status: "completed",
    createdAt: "24/08/2022",
  },
  {
    id: 6,
    invoice_no: "243535",
    amount: 200,
    status: "processing",
    createdAt: "24/08/2022",
  },
  {
    id: 7,
    invoice_no: "243535",
    amount: 200,
    status: "completed",
    createdAt: "24/08/2022",
  },
  {
    id: 8,
    invoice_no: "243535",
    amount: 200,
    status: "pending",
    createdAt: "24/08/2022",
  },
  {
    id: 9,
    invoice_no: "243535",
    amount: 200,
    status: "processing",
    createdAt: "24/08/2022",
  },
  {
    id: 10,
    invoice_no: "243535",
    amount: 200,
    status: "pending",
    createdAt: "24/08/2022",
  },
  {
    id: 11,
    invoice_no: "243535",
    amount: 200,
    status: "completed",
    createdAt: "24/08/2022",
  },
];

export const supportData = [
  {
    id: 1,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Solved",
    createdAt: "24/08/2022",
  },
  {
    id: 2,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Solved",
    createdAt: "24/08/2022",
  },
  {
    id: 3,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Pending",
    createdAt: "24/08/2022",
  },
  {
    id: 4,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Pending",
    createdAt: "24/08/2022",
  },
  {
    id: 5,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Solved",
    createdAt: "24/08/2022",
  },
  {
    id: 6,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Solved",
    createdAt: "24/08/2022",
  },
  {
    id: 7,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Solved",
    createdAt: "24/08/2022",
  },
  {
    id: 8,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Solved",
    createdAt: "24/08/2022",
  },
  {
    id: 9,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Solved",
    createdAt: "24/08/2022",
  },
  {
    id: 10,
    code_no: "243535",
    description: "I didn’t got my reviews ",
    status: "Solved",
    createdAt: "24/08/2022",
  },
];

export const services = [
  {
    id: 1,
    type: "upwork",
    img: "/images/logos_upwork.svg",
  },
  {
    id: 2,
    type: "or",
  },
  {
    id: 3,
    type: "fiverr",
    img: "/images/fiverr.svg",
  }
];

export const selectClientReviewData = [
  {
    id: 0,
    title: "Simple Client",
    description:
      " Looking for an easy client to work with? We will send a fiverr customer from our client network to your profile. We guarantee you will recieve a 5-star review or we give your money back!",
    image: "/icons/simple-client.svg",
    price: 25.0,
    quantity: 2,
  },
  {
    id: 1,
    title: "Custom Client",
    description:
      " Looking for an easy client to work with? We will send a fiverr customer from our client network to your profile. We guarantee you will recieve a 5-star review or we give your money back!",
    image: "/icons/client2.svg",
    price: 25.0,
    quantity: 4,
  },
  {
    id: 2,
    title: "Active Client",
    description:
      " Looking for an easy client to work with? We will send a fiverr customer from our client network to your profile. We guarantee you will recieve a 5-star review or we give your money back!",
    image: "/icons/client3.svg",
    price: 25.0,
    quantity: 5,
  },
];

export const buyerTypeOptionValue = [
  {
    value: "simple client",
    label: "Simple Client",
  },
  {
    value: "custom client",
    label: "Custom Client",
  },
  {
    value: "active client",
    label: "Active Client",
  },
];

export const simpleClientCardData = {
  title: "Simple Client",
  description:
    " Looking for an easy client to work with? We will send a fiverr customer from our client network to your profile. We guarantee you will recieve a 5-star review or we give your money back!",
  image: "/icons/simple-client.svg",
  price: 15,
};

export const customClientCardData = {
  title: "Custom Client",
  description:
    " Looking for an easy client to work with? We will send a fiverr customer from our client network to your profile. We guarantee you will recieve a 5-star review or we give your money back!",
  image: "/icons/client2.svg",
  price: 25,
};

export const ActiveClientCardData = {
  title: "Active Client",
  description:
    " Looking for an easy client to work with? We will send a fiverr customer from our client network to your profile. We guarantee you will recieve a 5-star review or we give your money back!",
  image: "/icons/client3.svg",
  price: 35,
};

export const fakeReview = [
  {
    name: "Abdur Rakib",
    sellerType: "Fiverr Seller",
    reviewCount: 4,
    review:
      "Eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
    profile: "/images/demo-profile.svg",
  },
  {
    name: "Carmen Gloria",
    sellerType: "Upwork Seller",
    reviewCount: 5,
    review:
      "Eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
    profile: "/images/demo-profile.svg",
  },
  {
    name: "Gregg Gloria",
    sellerType: "Fiverr Seller",
    reviewCount: 5,
    review:
      "Eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
    profile: "/images/demo-profile.svg",
  },
  {
    name: "Abdur Rakib",
    sellerType: "Fiverr Seller",
    reviewCount: 4,
    review:
      "Eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
    profile: "/images/demo-profile.svg",
  },
  {
    name: "Carmen Gloria",
    sellerType: "Upwork Seller",
    reviewCount: 5,
    review:
      "Eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
    profile: "/images/demo-profile.svg",
  },
  {
    name: "Carmen Gloria",
    sellerType: "Upwork Seller",
    reviewCount: 5,
    review:
      "Eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
    profile: "/images/demo-profile.svg",
  },
  {
    name: "Gregg Gloria",
    sellerType: "Fiverr Seller",
    reviewCount: 5,
    review:
      "Eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
    profile: "/images/demo-profile.svg",
  },
  {
    name: "Abdur Rakib",
    sellerType: "Fiverr Seller",
    reviewCount: 4,
    review:
      "Eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
    profile: "/images/demo-profile.svg",
  },
];

export const orderLeftData = [
  {
    label: "Client name",
    value: "Rakib",
  },
  {
    label: "Package Type",
    value: "Custom client",
  },
  {
    label: "Buyer’s Type",
    value: "Professional",
  },
];

export const orderRightData = [
  {
    label: "Buyer’s Country",
    value: "Dhaka, Bangladesh",
  },
  {
    label: "Gig Price",
    value: 500,
  },
  {
    label: "Status",
    value: "Completed",
  },
];
