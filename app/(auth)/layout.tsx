const AuthLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {
    return ( 
        <div className="flex flex-row min-h-screen justify-center items-center">
            {children}
        </div>
     );
}
 
export default AuthLayout;