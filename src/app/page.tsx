"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Clock, Flame, Leaf, Pizza } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Papa Louie's Pizza"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Papa Louie's Authentic Wood-Fired Pizza"
      description="Hand-tossed dough, fresh local ingredients, and traditions passed down for generations. Experience the real taste of pizza in every slice."
      kpis={[
        {
          value: "20+",
          label: "Years Tradition",
        },
        {
          value: "100%",
          label: "Organic Dough",
        },
        {
          value: "5k+",
          label: "Happy Fans",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Order Online",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-pizza-concept-with-copy-space_23-2148643455.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/playful-women-having-pizza-home_23-2148298074.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/content-girlfriends-enjoying-pizza-having-date_23-2147743638.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-friends-partying-with-food_23-2149525599.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-friends-eating-pizza-outdoors_23-2149872431.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-smiley-people-with-pizza_52683-88491.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Loved by thousands"
      marqueeItems={[
        {
          type: "text",
          text: "Hand-Tossed Daily",
        },
        {
          type: "text",
          text: "Local Ingredients",
        },
        {
          type: "text",
          text: "Wood-Fired Perfection",
        },
        {
          type: "text",
          text: "Fast Delivery",
        },
        {
          type: "text",
          text: "Family Recipe",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="A Legacy of Flavor"
      description="Founded by Papa Louie himself, our secret family recipe has been delighting neighborhood locals since day one. We take pride in our slow-fermented dough and fresh, daily-made tomato sauce."
      subdescription="Every pizza is crafted with care, passion, and only the highest quality ingredients, right from our family to yours."
      icon={Pizza}
      imageSrc="http://img.b2bpic.net/free-photo/woman-pressing-dough-with-hands-wooden-table-top-view_176474-5536.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Flame,
          title: "Wood-Fired Oven",
          description: "Authentic smoky flavor baked to perfection in our custom brick oven.",
        },
        {
          icon: Leaf,
          title: "Farm-to-Table",
          description: "We source fresh seasonal vegetables directly from local farmers.",
        },
        {
          icon: Clock,
          title: "Lightning Fast",
          description: "Your favorite pizza delivered piping hot right to your doorstep.",
        },
      ]}
      title="Why Papa Louie's?"
      description="We don't just bake pizza, we craft experiences that keep our customers coming back."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Classic Pepperoni",
          price: "$18",
          variant: "Thin Crust",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-delicious-pizza-box_23-2149962671.jpg",
        },
        {
          id: "2",
          name: "Margherita",
          price: "$16",
          variant: "Traditional",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-pizza-concept_23-2148643459.jpg",
        },
        {
          id: "3",
          name: "Garden Veggie",
          price: "$17",
          variant: "Whole Wheat",
          imageSrc: "http://img.b2bpic.net/free-photo/two-pizzas-with-eggplant-green-peas-red-onion-top-view_127032-3367.jpg",
        },
        {
          id: "4",
          name: "Meat Lover's",
          price: "$22",
          variant: "Deep Dish",
          imageSrc: "http://img.b2bpic.net/free-photo/pizza-table-light-blue-color_58702-761.jpg",
        },
        {
          id: "5",
          name: "BBQ Chicken",
          price: "$20",
          variant: "Thin Crust",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-pizza-with-grilled-chicken-salami-bell-pepper-black-olive-cheese-table_141793-5059.jpg",
        },
        {
          id: "6",
          name: "Four Cheese",
          price: "$19",
          variant: "Traditional",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetarian-pizza_1388-654.jpg",
        },
      ]}
      title="Our Signature Pies"
      description="From classic favorites to artisanal creations, find your next favorite slice here."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15,000+",
          description: "Pizzas Baked",
        },
        {
          id: "m2",
          value: "98%",
          description: "Satisfied Guests",
        },
        {
          id: "m3",
          value: "12",
          description: "Locally Sourced",
        },
      ]}
      title="By The Numbers"
      description="It's not just flavor, it's a proven recipe for success."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Best in town!",
          quote: "Papa Louie's is the only place we order pizza for family night. Authentic taste!",
          name: "Sarah J.",
          role: "Foodie",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-eating-delicious-pizza_23-2150317025.jpg",
        },
        {
          id: "2",
          title: "So fresh",
          quote: "You can really taste the freshness of the veggies. Incredible crust too.",
          name: "Mark D.",
          role: "Local Resident",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-eating-pizza-outside_23-2149872430.jpg",
        },
        {
          id: "3",
          title: "Fast and hot",
          quote: "Always arrives exactly on time and still steaming hot. Five stars!",
          name: "Emily R.",
          role: "Busy Mom",
          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-eating-pizza-pizza-bar_1303-20331.jpg",
        },
        {
          id: "4",
          title: "Authentic flavor",
          quote: "The wood-fired flavor is unmatched. Reminds me of Italy.",
          name: "David L.",
          role: "Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-one-black-american-female-eats-gourmet-vegetarian-meal-drinks-wine-restaurant_613910-7365.jpg",
        },
        {
          id: "5",
          title: "Great value",
          quote: "Best pizza for the price, hands down. Our go-to spot.",
          name: "Jessica B.",
          role: "Student",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-photo-food-restaurant_23-2150520085.jpg",
        },
      ]}
      title="Voices of the Neighborhood"
      description="What our loyal pizza lovers are saying about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you deliver?",
          content: "Yes, we offer fast delivery within a 5-mile radius.",
        },
        {
          id: "f2",
          title: "Are there gluten-free options?",
          content: "Yes, we have a delicious gluten-free cauliflower crust available.",
        },
        {
          id: "f3",
          title: "Do you accept catering?",
          content: "Absolutely! Contact us for private events and bulk pizza orders.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Visit Us"
      title="Ready for a Slice?"
      description="Come visit Papa Louie's Pizza today or place an order online. We can't wait to serve you!"
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Papa Louie's"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
