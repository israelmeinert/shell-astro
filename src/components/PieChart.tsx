import React, { Suspense } from 'react';
const RemotePieChart = React.lazy(() => import('remote_app/PieChart'));


const LoadingSpinner = () => (
  <div className="flex justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

export const PieChart = ({gastos, receitas}: {gastos: number, receitas: number}) => {
  return (
      <div className="">
        <Suspense fallback={<LoadingSpinner />}>
          <RemotePieChart 
            gastos={gastos}
            receitas={receitas}
            title="Gastos vs Receitas"
          />
        </Suspense>
      </div>
  );
};