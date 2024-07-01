'use client';
import React, { useRef, useState, useEffect } from 'react';
import { IdDetector } from '../utils/idDetector';

interface CameraComponentProps {
  onVerification: (result: boolean) => void;
}

const CameraComponent: React.FC<CameraComponentProps> = ({ onVerification }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [detector, setDetector] = useState<IdDetector | null>(null);

  useEffect(() => {
    startCamera();
    setDetector(new IdDetector());
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setStream(newStream);
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (err) {
      console.error("Error accessing the camera", err);
    }
  };

  useEffect(() => {
    if (videoRef.current && canvasRef.current && stream && detector) {
      const checkInterval = setInterval(() => {
        const context = canvasRef.current!.getContext('2d');
        if (context) {
          context.drawImage(videoRef.current!, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
          const imageData = context.getImageData(0, 0, canvasRef.current!.width, canvasRef.current!.height);
          const isID = detector.detectId(imageData);
          if (isID) {
            clearInterval(checkInterval);
            stream.getTracks().forEach(track => track.stop());
            onVerification(true);
          }
        }
      }, 1000);

      return () => clearInterval(checkInterval);
    }
  }, [stream, detector, onVerification]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: '500px' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
      <p>Hold your ID in front of the camera </p>
    </div>
  );
};

export default CameraComponent;