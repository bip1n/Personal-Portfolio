import { apple, user, facebook, google, twitter } from "../assets";
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
      I'm Bhabishwar Khanal, simply Bipin. I'm currently studying Software Engineering at NCIT, Lalitpur. I'm interested in CyberSecurity as well as Web Development. Beside these I'm also interested in photography, editing and content writing.
      </p>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Find me on :
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={twitter} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={facebook} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Aboutme;
