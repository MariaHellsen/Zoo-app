import { NavLink } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="m-8 p-7 text-4xl font-bold text-center ">
        Oops! Fel stig! Denna sida leder ingenstans.
      </h2>
      <h3 className="p-7 text-center">
        Ta en ny väg! För att komma igång med matningen igen, navigera till
        sidan "
        <NavLink
          to={"/animals"}
          className="font-bold text-blue-600 hover:underline"
        >
          Djuren
        </NavLink>
        " och välj enkelt ett djur genom att klicka på dess bild.
      </h3>
    </div>
  );
};
