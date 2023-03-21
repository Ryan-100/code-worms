import { Text, Title } from "@/components/LV1";

const Section = ({ title, subTitle, children }) => {
  return (
    <section className="w-full flex flex-col items-start justify-center p-4 ">
      <div className="text-start">
        {title && (
          <Title as="h2" size="lg" weight="xl" mb="10" color="font">
            {title}
          </Title>
        )}
      </div>

      {children}
    </section>
  );
};

export default Section;
