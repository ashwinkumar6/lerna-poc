import { commonPackage } from "@lerna-poc/common";

const utilPackage = () => {
  console.log("uitls package");
  console.log("another feature");
};
commonPackage();

export { utilPackage };
