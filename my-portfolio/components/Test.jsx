import image1 from "../src/assets/image1.png";
import image1_sm from "../src/assets/image1_sm.png";
import image2 from "../src/assets/image2.png";
import image2_sm from "../src/assets/image2_sm.png";
import image3 from "../src/assets/image3.png";
import image3_sm from "../src/assets/image3_sm.png";

const sections = [
  { id: 1, img: image1, img_sm: image1_sm },
  { id: 2, img: image2, img_sm:image2_sm },
  { id: 3, img: image3, img_sm:image3_sm },
];

const Test = () => {
  return (
    <div className="relative h-[400vh]">
      {sections.map((section, index) => (
        <div
          className="sticky top-0 h-screen flex items-center justify-center text-2xl z-[10+index]"
          key={section.id}
        >
          {section.img && (
            <>
            <img
              src={section.img}
              className="absolute inset-0 w-full h-full object-cover max-md:hidden rounded-full"
            />
            <img
              src={section.img_sm}
              className="absolute inset-0 w-full h-full object-cover md:hidden rounded-full"
            />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Test;
