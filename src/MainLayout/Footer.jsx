import FooterList from "../Components/Common/FooterList";

import logo from "../images/logo.jpg";
import minPhone from "../images/minPhone.png";
import minLocation from "../images/minLocation.png";
import minMail from "../images/minMail.png";

const contactItems = [
  {
    icon: minPhone,
    label: "330 888 948 963+",
    href: "tel:+963948888330",
    external: true,
  },
  { icon: minLocation, label: "سوريا، حلب، حمص", external: true },
  {
    icon: minMail,
    label: "info@albarakametal.com",
    href: "mailto:info@albarakametal.com",
    external: true,
  },
];

const quickLinks = [
  { label: "الصفحة الرئيسية", href: "/", external: false },
  { label: "منجاتنا", href: "/products", external: false },
  { label: "موقع الشركة", href: "/location", external: false },
];

const services = [
  { label: "تطعيج حديد" },
  { label: "سحب بواري" },
  { label: "صفائح حديد" },
];
export default function Footer() {
  return (
    <div className="container mx-auto px-10 border-t border-t-primary">
      <div className="pt-5 flex flex-col gap-6 items-center sm:flex sm:flex-row-reverse sm:items-start  justify-between">
        <div className="hidden md:w-[200px] lg:w-[300px] md:flex flex-col items-center gap-3 p-2.5">
          <img
            src={logo}
            className="md:w-[140px] md:h-[100px] lg:w-[200px] lg:h-[130px] xl:w-[260px] xl:h-[150px]  rounded"
          />
          <p dir="rtl" className=" text-center text-sm sm:block sm:text-sm ">
            نحن رواد في مجال الصناعات المعدنية منذ أكثر من 25 عاماً نقدم منتجات
            عالية الجودة بأسعار تنافسية.
          </p>
        </div>
        <FooterList title="روابط سريعة" items={quickLinks} />
        <FooterList title="خدماتنا" items={services} />
        <FooterList title="للتواصل معنا" items={contactItems} />
      </div>
    </div>
  );
}
