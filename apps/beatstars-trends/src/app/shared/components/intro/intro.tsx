import SmsFailedIcon from '@mui/icons-material/SmsFailed';

export const Intro = () => {
   return (
      <div className="text-slate-600 mt-8 mb-16">
         <span>
            <h3 className="font-bold">The Beatstars trends app</h3> helps producers find the perfect
            tags for your beats, ensuring they reach the right audience on
            marketplaces like BeatStars, Airbit. The app suggests trending,
            relevant, and high-traffic keywords tailored to your sound. Whether
            you're creating trap, lo-fi, or drill beats, our app helps you stay
            on top of industry trends, improve your visibility, and ultimately
            boost sales.
         </span>
         <br></br>
         <br></br>
         <div>
            <div className="flex text-green-700 text-xl font-bold items-center">
               <SmsFailedIcon className="mr-2 " />
               <h3>Useful tips:</h3>
            </div>
            <span>
               You can sort the content in any table if you wish. In order to do
               that you should click on the name of a column.
            </span>
         </div>
      </div>
   );
};
