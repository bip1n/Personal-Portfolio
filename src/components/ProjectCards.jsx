import { quotes } from "../assets";

const FeedbackCard = ({ link,content, name, title, }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[480px] md:mr-10 sm:mr-5 mr-0 my-5 ml-0 feedback-card">
       <div className="flex flex-row">
      <div className="flex flex-col ml-0">
        <h4 className="font-poppins font-semibold text-[20px] leading-[35px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[20px] text-dimWhite ">
          <a href="{link}" target="_blank">{link}</a>
        </p>
      </div>
    </div>
    <p className="font-poppins font-normal text-[15px] leading-[28.4px] text-white my-5">
      {content}
    </p>    
  </div>
);


export default FeedbackCard;
