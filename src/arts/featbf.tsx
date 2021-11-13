import React from "react";

const FeatBF: React.FC<any> = React.forwardRef((props, ref:any) => (
  <div ref={ref}>Hello World</div>
));

export default FeatBF;