import React, { useEffect, useRef } from "react";
import VanillaAppRenderer from "vanillaApp/AppRenderer";


export default function VanillaAppContentWrapper(props) {

  const ref = useRef(null);

  //throw new Error("Not supported");

  useEffect(() => {
    if (ref.current) {
      VanillaAppRenderer(ref.current,props);
    }
  }, [props.msg]);

  return <div ref={ref}/>;
}
