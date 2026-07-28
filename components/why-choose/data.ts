import {
  Truck,
  ShieldCheck,
  CreditCard,
  Zap,
} from "lucide-react";

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 1,
    title: "Free Delivery",
    description:
      "Enjoy fast and free delivery across India on every order.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Official Warranty",
    description:
      "100% genuine laptops backed by official manufacturer warranty.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Secure Payment",
    description:
      "Pay safely using encrypted and trusted payment gateways.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Lightning Fast Shipping",
    description:
      "Quick dispatch with real-time order tracking for every purchase.",
    icon: Zap,
  },
];