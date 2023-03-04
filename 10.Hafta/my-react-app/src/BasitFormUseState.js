import { useState } from "react";

function BasitFormUseState(props) {
  const [ad, setAd] = useState("");
  return (
    <form>
      Adınız
      <input
        type="text"
        name="ad"
        value={ad}
        onChange={(e) => setAd(e.target.value)}
      />
      <p>
        {ad}
      </p>
    </form>
  );
}

export default BasitFormUseState;
