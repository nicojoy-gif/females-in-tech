import Link from "next/link";
interface CardProps {
  subHeading: string;
  description: string;
  equityDetails: string;
  learnMoreLink: string;
}

const NetworkCard: React.FC<CardProps> = ({
  subHeading,
  description,
  equityDetails,
  learnMoreLink,
}) => {
  return (
    <section className="p-7 ">
      <div className="bg-white lg:h-80 h-full rounded-lg flex justify-between flex-col p-6 ">
        <div>
          <h2 className="text-2xl w-5/6 font-medium">{subHeading}</h2>
        </div>
        <div className="text-darkgray">
          <p className="py-3">{description}</p>
          <p className="text-lg py-1 font-medium">{equityDetails}</p>
        </div>
        <div className="flex ">
          <Link href={learnMoreLink}>
            <p className="font-semibold underline text-lg">Learn More</p>
          </Link>
        </div>
      </div>
    </section>
  );
};


export default NetworkCard;
