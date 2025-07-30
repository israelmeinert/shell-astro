import React, { Suspense } from 'react';
const RemoteButton = React.lazy(() => import('remote_app/Button'));


const LoadingSpinner = () => (
  <div className="flex justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

export const Teste = () => {
  return (
    <div className="p-4">
      {/* <Suspense fallback={<LoadingSpinner />}>
        <RemoteHeader />
      </Suspense> */}
      
      <div className="mt-4">
        <Suspense fallback={<LoadingSpinner />}>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'> Teste</button>
        </Suspense>
      </div>
    </div>
  );
};