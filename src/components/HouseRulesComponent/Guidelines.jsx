import s from "./HouseRulesComponent.module.scss";
import Rule from "./Rule.jsx";

function Guidelines() {
  return (
    <div className={s.guidelines}>
      <Rule
        Icon={"./src/images/nosmoking.svg"}
        header="No Smoking"

        text="Do not smoke neither in the room nor the rest of the house.
        It is not allowed by the Icelandic law and there is a penalty for people who don’t adhere to the these rules."
      />
      <Rule
        Icon={"./src/images/quiet.svg"}
        text="We ask you to respect that some guests go to bed early as they wake up early.
         Please try to keep it down between 10pm and 7am  to respect our guests' sleep."
      />
      <Rule
        Icon={"./src/images/bathroom.svg"}
        text="Please leave the bathroom clean after using it.
        By doing so, we all contribute to a more pleasant environment that feels more like home for everyone."
      />
      <Rule
        Icon={"./src/images/toiletpaper.svg"}
        text="Please throw only toilet paper in the toilet.
        Use rubbish bins for other type of rubbish to avoid clogs."
      />
      <Rule
        Icon={"./src/images/breakfast.svg"}
        text="Have breakfast included before taking it from the kitchen.
        Breakfast is from 8 to 10:30 am. Direct bookers get free continental breakfast.
        Channel bookers will have to pay 10€ per person per night for their breakfast.
        Let us know if you want to add it to your booking."
      />
      <Rule
        Icon={"./src/images/kitchen.svg"}
        text="Please keep the kitchen tidy when using it.
        Remember how you want to find it when you enter. We kindly ask you to leave it the same way."
      />
      <Rule
        Icon={"./src/images/light.svg"}
        text="Please do not leave the lights and the heater on when it is not necessary - we are an eco-friendly house."
      />
      <Rule
        Icon={"./src/images/check-in-out.svg"}
        text="Two days before your arrival, you will receive an email with the information to check in from 4 pm.
          Check-out is until 11am. Please leave the key on your door before leaving.
          Contact info@bluehouse.is for late check-out.
           You can stay a few more hours in our common areas after checking out."
      />
    </div>
  );
}

export default Guidelines;
