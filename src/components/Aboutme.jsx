import { user, facebook, github, instagram, linkedin } from "../assets";
import styles, { layout } from "../style";

const Aboutme = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={user} alt="user" className="w-[60%] h-[100%] relative z-[500]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Me <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        I'm Bhabishwar Khanal (Bipin). I'm a Software Engineering student at NCIT, Lalitpur. I love to call myself a technophile. I love exploring every field of technology.
      </p>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
       My Socail Handles:
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://www.instagram.com/bipinwhooo/" target="_blank"><img src={instagram} alt="instagram" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /></a>
        <a href="https://www.facebook.com/bipinkhanal69/" target="_blank"> <img src={facebook} alt="Facebook" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /></a>
        <a href="https://github.com/bip1n" target="_blank"> <img src={github} alt="Github" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/bipin-khanal-03b257228/" target="_blank"><img src={linkedin} alt="LinkedIN" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /></a>

      </div>
    </div>
  </section>
);

export default Aboutme;
