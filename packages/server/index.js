import { commonPackage } from "@lerna-poc/common";

const serverPackage = () => {
  console.log(
    "server package here - lerna experimental tag - republish with updated change"
  );
};
commonPackage();

export { serverPackage };
