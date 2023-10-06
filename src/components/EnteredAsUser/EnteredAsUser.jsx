import React from "react";

import LogoutButton from "../LogoutButton/LogoutButton";

function EnteredAsUser({ email }) {
  return (
    <div>
      <p>
        Вы вошли как <em>{email}</em>
      </p>
      <LogoutButton />
    </div>
  );
}

export default EnteredAsUser;
