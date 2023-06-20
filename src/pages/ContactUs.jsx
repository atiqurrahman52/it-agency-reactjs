import Contact from "../components/share/Contact";

const ContactUs = () => {
  return (
    <div>
      <Contact />
      <iframe
    className="w-full h-[551px] md:h-[444px]"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.07349835004!2d-74.31000608731065!3d40.697017354802995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686130479924!5m2!1sen!2sbd"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
    </div>
  );
};

export default ContactUs;
