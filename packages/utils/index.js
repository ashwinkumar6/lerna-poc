import { commonPackage } from "@lerna-poc/common";

const utilPackage = () => {
  console.log(
    "uitls package - lerna experimental tag - republish with updated change"
  );
  console.log("another feature - lerna experimental tag");
};
commonPackage();

export { utilPackage };
