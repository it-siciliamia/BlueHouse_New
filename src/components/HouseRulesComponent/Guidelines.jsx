import s from "./HouseRulesComponent.module.scss";
import Rule from "./Rule.jsx";

function Guidelines(){
  const rules = [

{
      Icon: "./src/images/check-in-out.svg",
      header: "Check in & check out",
      text: `Two days before your arrival, you will receive an email with the information to check in from 4 pm.
      Check-out is until 11am. Please leave the key on your door before leaving.
      Contact info@bluehouse.is for late check-out.
      You can stay a few more hours in our common areas after checking out.`
    },
    {
      Icon: "./src/images/breakfast.svg",
      header: "Book your breakfast",
      text: `Have breakfast included before taking it from the kitchen.
      Breakfast is from 8 to 10:30 am. Direct bookers get free continental breakfast.
      Channel bookers will have to pay 10€ per person per night for their breakfast.
      Let us know if you want to add it to your booking.`
    },
    {
      Icon: "./src/images/nosmoking.svg",
      header: "No smoking",
      text: `Do not smoke neither in the room nor the rest of the house.
      It is not allowed by the Icelandic law and there is a penalty for people who don’t adhere to these rules.`
    },
    {
      Icon: "./src/images/quiet.svg",
      header: "Keep noise to a minimum",
      text: `We ask you to respect that some guests go to bed early as they wake up early.
      Please try to keep it down between 10pm and 7am to respect our guests' sleep.`
    },
    {
      Icon: "./src/images/bathroom.svg",
      header: "Clean after yourself",
      text: `Please leave the bathroom clean after using it.
      By doing so, we all contribute to a more pleasant environment that feels more like home for everyone.`
    },
    {
      Icon: "./src/images/toiletpaper.svg",
      header: "Avoid clogs",
      text: `Please throw only toilet paper in the toilet.
      Use rubbish bins for other type of rubbish to avoid clogs.`
    },
    {
      Icon: "./src/images/kitchen.svg",
      header: "Keep the kitchen tidy",
      text: `Please keep the kitchen tidy when using it.
      Remember how you want to find it when you enter. We kindly ask you to leave it the same way.`
    },
    {
      Icon: "./src/images/light.svg",
      header: "Use electricity responsibly",
      text: `Please do not leave the lights and the heater on when it is not necessary - we are an eco-friendly house.`
    },
  ];



     return (
    <div className={s.guidelines}>
      <div className={s.rulesColumn}>
        {rules.slice(0, 4).map((rule, index) => (
          <Rule key={index} Icon={rule.Icon} header={rule.header} text={rule.text} />
        ))}
      </div>
      <div className={s.rulesColumn}>
        {rules.slice(4).map((rule, index) => (
          <Rule key={index} Icon={rule.Icon} header={rule.header} text={rule.text} />
        ))}
      </div>
    </div>
  );

}

export default Guidelines;
