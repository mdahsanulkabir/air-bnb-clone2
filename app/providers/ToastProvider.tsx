'use client';

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
    return (
        <Toaster

        />
    );
};

export default ToastProvider;

// toaster is a foriegn library which is yet not adjusted with next-13
// thats why using provider/wrapper
// so that it atleast has a client wrapper