import React from "react";

const EmptyIcon = (props) => {
  return (
    <svg width={63} height={63} viewBox="0 0 63 63" fill="none" {...props}>
      <circle cx={31.5} cy={31.5} r={31.5} fill="#DBDCE0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 21a3 3 0 013-3h20.308a3 3 0 013 3v20.308a3 3 0 01-3 3H21a3 3 0 01-3-3V21zm3.462 3.462a3 3 0 013-3h14.076a3 3 0 013 3v9.248a2.983 2.983 0 01-2.982 2.982h-2.917a.34.34 0 00-.331.346 3.808 3.808 0 01-7.616 0 .34.34 0 00-.33-.346h-2.918a2.983 2.983 0 01-2.982-2.983v-9.248z"
        fill="#fff"
      />
    </svg>
  );
};

export default EmptyIcon;
