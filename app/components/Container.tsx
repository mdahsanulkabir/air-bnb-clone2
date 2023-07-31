'use client';
// we will use this component as a styling component
// for this reason we are using it as client component

interface ContainerProps {
    children: React.ReactNode;
}
const Container : React.FC<ContainerProps> = ({children}) => {

    // const Container : React.FC<ContainerProps> = ({children}) => {
    //abaove React.FC is a generic type which stands for React.Functional component
    // we can write this component declaration as below
    //  const Container = ({ children }:ContainerProps) => {

    return (
        <div
            className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
        >
            {children}
        </div>
    );
};

export default Container;