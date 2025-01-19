import { forwardRef } from "react";

const User = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};
export default forwardRef(User);

//to Accept that ref here in child component we use forwardRef which is a wrapper
