import { ToastContainer } from "react-toastify";

export const Wrapper = ({ children }) => {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    );
};
