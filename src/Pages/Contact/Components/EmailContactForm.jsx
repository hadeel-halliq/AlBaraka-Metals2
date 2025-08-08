import { motion } from "framer-motion";

import Tittle from "../../Home/Components/Tittle";
import FormInput from "./FormInput";
import Button from "../../../Components/Common/Button";

const inputVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function EmailContactForm() {
  return (
    <div className="bg-white my-10 rounded-xl border-t-4 border-t-primary shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ">
      <Tittle text="أرسل لنا رسالة" />
      <p className="text-center my-8 text-sm sm:text-lg">
        املأ النموذج التالي وسيقوم أحد ممثلينا بالتواصل بك في أقرب وقت ممكن
      </p>
      <form className="flex flex-col place-items-center gap-7 lg:grid lg:grid-cols-3 ">
        <motion.div
          variants={inputVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} 
          className="w-fit flex flex-col gap-1 text-right"
        >
          <label htmlFor="message" className="font-semibold">
            الرسالة
          </label>
          <textarea
            className="p-2 pr-3  w-[240px] h-[160px] sm:w-[280px] sm:h-[] border rounded-lg text-right focus:outline-none focus:border-primary focus:border-2"
            id="message"
            name="message"
            placeholder="اكتب رسالتك هنا"
            required
          ></textarea>
        </motion.div>

        <FormInput
          label="البريد الالكتروني"
          id="2"
          type="email"
          name="email"
          placeholder="example@domain.com"
        />

        <FormInput
          label="الاسم كامل"
          id="1"
          type="text"
          name="name"
          placeholder="ادخل اسمك كامل"
        />

        <motion.div
          variants={inputVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          className="lg:col-span-3 mb-14"
        >
          <Button buttonName="إرسال رسالتك" buttonStyle="mainStyle" />
        </motion.div>
      </form>
    </div>
  );
}
