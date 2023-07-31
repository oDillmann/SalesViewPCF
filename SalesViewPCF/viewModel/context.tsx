import React from "react";
import SalesViewVM from "./SalesViewVM";

export const SalesViewVMcontext = React.createContext<SalesViewVM>({} as SalesViewVM);

export interface props {
  value: SalesViewVM;
  children: JSX.Element;
}

const ContextProvider = ({ value, children }: props) => {
  return (
    <SalesViewVMcontext.Provider value={value}>{children}</SalesViewVMcontext.Provider>
  );
};

export const useVM = () => React.useContext(SalesViewVMcontext);

export default ContextProvider;
