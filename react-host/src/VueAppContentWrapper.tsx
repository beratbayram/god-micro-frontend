import React, { useEffect, useRef } from "react";
import { ContentRenderer } from "vueApp/ContentRenderer";

export default function VueAppContentWrapper({ msg }: { msg: string }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ContentRenderer(ref.current, { msg });
    }
  }, [msg]);

  return <div ref={ref} />;
}
