import { commonPackage } from "@lerna-poc/common";

const serverPackage = () => {
  console.log("server package here - lerna experimental tag test");
};
commonPackage();

export { serverPackage };
