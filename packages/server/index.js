import { commonPackage } from "@lerna-poc/common";

const serverPackage = () => {
  console.log("server package");
};
commonPackage();

export { serverPackage };
