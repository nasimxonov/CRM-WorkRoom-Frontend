import type { JSX } from "react";

interface IconProps {
  rightArrowIcon: () => JSX.Element;
  companyLogo: () => JSX.Element;
  correctIcon: () => JSX.Element;
}

const Icon: IconProps = {
  correctIcon: () => {
    return (
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.364 0.878458C13.7266 1.24109 13.7525 1.81293 13.4417 2.20545L13.364 2.29267L6.29289 9.36374C5.93027 9.72637 5.35842 9.75227 4.9659 9.44145L4.87868 9.36374L0.636041 5.1211C0.245516 4.73057 0.245516 4.09741 0.636041 3.70689C0.99867 3.34426 1.57052 3.31835 1.96303 3.62918L2.05025 3.70689L5.58601 7.24156L11.9497 0.878458C12.3124 0.515829 12.8842 0.489927 13.2767 0.800752L13.364 0.878458Z"
          fill="#3F8CFF"
        />
      </svg>
    );
  },

  rightArrowIcon: () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.7903 11.3871L19.7071 11.2929L14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289C12.9324 6.65338 12.9047 7.22061 13.2097 7.6129L13.2929 7.70711L16.585 11H5C4.44772 11 4 11.4477 4 12C4 12.5128 4.38604 12.9355 4.88338 12.9933L5 13H16.585L13.2929 16.2929C12.9324 16.6534 12.9047 17.2206 13.2097 17.6129L13.2929 17.7071C13.6534 18.0676 14.2206 18.0953 14.6129 17.7903L14.7071 17.7071L19.7071 12.7071C20.0676 12.3466 20.0953 11.7794 19.7903 11.3871Z"
          fill="white"
        />
      </svg>
    );
  },

  companyLogo: () => {
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50" height="50" rx="12" fill="white" />
        <mask
          id="mask0_0_7168"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="50"
          height="50"
        >
          <rect width="50" height="50" rx="12" fill="white" />
        </mask>
        <g mask="url(#mask0_0_7168)"></g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.9999 25C16.3499 25 15 23.6501 15 22.0002C15 20.3499 16.3499 19 17.9999 19C19.6499 19 21 20.3499 21 22.0002C21 23.6501 19.6499 25 17.9999 25Z"
          fill="#3F8CFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43 18.3448C43 13.2052 38.725 9 33.5 9H33.4998C28.275 9 24 13.2052 24 18.3448V32C24 32 42.9983 29.9193 43 18.346C43 18.3456 43 18.3452 43 18.3448Z"
          fill="#3F8CFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 37.2076C12.9882 37.2076 12.1605 36.4388 12.1605 35.4993C12.1605 34.5596 12.9882 33.791 14 33.791C15.0116 33.791 15.8392 34.5596 15.8392 35.4993C15.8392 36.4388 15.0116 37.2076 14 37.2076ZM7 35.4978C7 35.4982 7 35.4989 7 35.4993C7 39.0746 10.1499 42 14 42C17.8499 42 21 39.0746 21 35.4993V26C21 26 7.00183 27.4474 7 35.4978Z"
          fill="#3F8CFF"
        />
      </svg>
    );
  },
};

export default Icon;
