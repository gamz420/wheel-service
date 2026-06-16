import {
  AdvantagesSection,
  BeforeAfterSection,
  ContactSection,
  ExteriorSection,
  FAQSection,
  GallerySection,
  HeroSection,
  PriceSection,
  ProcessSection,
  ServicesSection,
} from '@/widgets/Sections';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <BeforeAfterSection />
      <PriceSection />
      <ProcessSection />
      <GallerySection />
      <FAQSection />
      <ExteriorSection />
      <ContactSection />
    </>
  );
}
