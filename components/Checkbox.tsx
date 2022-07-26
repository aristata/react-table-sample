// import React from "react";

// const IndeterminateCheckbox = React.forwardRef(
//   // @ts-ignore
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef();
//     const resolvedRef = ref || defaultRef;

//     React.useEffect(() => {
//       // @ts-ignore
//       resolvedRef.current.indeterminate = indeterminate;
//     }, [resolvedRef, indeterminate]);

//     return (
//       <>
//         {/* @ts-ignore */}
//         <input type="checkbox" ref={resolvedRef} {...rest} />
//       </>
//     );
//   }
// );

// export default IndeterminateCheckbox;

import React, { useEffect, forwardRef, MutableRefObject, useRef } from "react";

interface Props {
  indeterminate?: boolean;
}

const useCombinedRefs = (...refs: any): MutableRefObject<any> => {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach((ref: any) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

const IndeterminateCheckbox = forwardRef<HTMLInputElement, Props>(
  ({ indeterminate, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    const defaultRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, defaultRef);

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate ?? false;
      }
    }, [combinedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={combinedRef} {...rest} />
      </>
    );
  }
);

export default IndeterminateCheckbox;
