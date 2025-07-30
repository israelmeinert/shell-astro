import React, { Suspense } from 'react';
const RemoteButton = React.lazy(() => import('remote_app/Button'));


const LoadingSpinner = () => (
  <div className="flex justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

export const Button = () => {
  return (
    <div className="p-4">
      {/* <Suspense fallback={<LoadingSpinner />}>
        <RemoteHeader />
      </Suspense> */}
      
      <div className="mt-4">
        <Suspense fallback={<LoadingSpinner />}>
          <RemoteButton 
            text="Remote Button" 
            onClick={() => alert('Clicked remote button!')} 
          />
        </Suspense>
      </div>
    </div>
  );
};