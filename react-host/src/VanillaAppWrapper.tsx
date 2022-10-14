import React, { useEffect, useRef } from "react";
import VanillaAppRenderer from "vanillaApp/AppRenderer";


export default function VanillaAppContentWrapper() {

  const ref = useRef(null);

  //throw new Error("Not supported");

  useEffect(() => {
    if (ref.current) {
      VanillaAppRenderer(ref.current);
    }
  }, []);

  return <div ref={ref}/>;
}
