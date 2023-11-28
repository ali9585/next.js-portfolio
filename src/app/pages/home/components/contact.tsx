import { SectionBadge } from "@/app/utils/sectionBadge";
import { FaPhoneAlt } from "react-icons/fa";

const Contact: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="contact">
                <SectionBadge title="Contact" icon={<FaPhoneAlt className='icon' size={11} color='#fff' />} />
                <h1 className="section-title">
                    Let's Work <span>Together!</span>
                </h1>
                <h3 className="mail">alikhan@hello.com</h3>
                <form className="grid gap-[20px]">
                    <input className="md:col-span-1 sm:col-span-2 col-span-2" type="text" placeholder="Name" />
                    <input className="md:col-span-1 sm:col-span-2 col-span-2" type="text" placeholder="Email" />
                    <input className="md:col-span-1 sm:col-span-2 col-span-2" type="text" placeholder="Phone" />
                    <input className="md:col-span-1 sm:col-span-2 col-span-2" type="text" placeholder="Subject" />
                    <textarea className="col-span-2" name="" id="" placeholder="Message"></textarea>
                </form>
            </div>
        </>
    );
}

export default Contact;