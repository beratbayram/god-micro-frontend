import React, { useEffect, useRef } from "react";
import {ContentRenderer } from "vueApp/ContentRenderer";

export default function VueAppContentWrapper() {

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ContentRenderer(ref.current);
    }
  }, []);

  return <div ref={ref}/>;
}
