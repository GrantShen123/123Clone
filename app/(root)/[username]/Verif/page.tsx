'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const CameraComponent = dynamic(() => import('./components/CameraComponent'), { ssr: false });

export default function VerificationPage() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  const handleVerification = (result: boolean) => {
    setIsVerified(result);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ID Verification</h1>
      {isVerified === null ? (
        <CameraComponent onVerification={handleVerification} />
      ) : (
        <div className={`mt-4 p-2 ${isVerified ? 'bg-green-200' : 'bg-red-200'}`}>
          {isVerified ? 'ID Verified Successfully' : 'Verification Failed. Please try again.'}
        </div>
      )}
    </div>
  );
}