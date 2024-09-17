import { useRouteError } from "react-router-dom";

interface RouteError {
    data: string;
    error: {
      columnNumber: number;
      fileName: string;
      lineNumber: number;
      message: string;
      stack: string;
    };
    internal: boolean;
    status: number;
    statusText: string;
  }

export const ErrorPage: React.FC = () => {

    const error = useRouteError() as RouteError;


    return (
        <div id='error-page' className='flex flex-col gap-8 justify-center items-center h-screen'>
            <h1 className='text-4xl font-bold'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className='text-slate-400'>
                <i>{error.statusText || error.error.message}</i>
            </p>
        </div>
    );
}
