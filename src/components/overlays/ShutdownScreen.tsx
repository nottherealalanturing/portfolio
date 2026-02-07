import React from 'react';
import { images } from '@/lib/icons';

const ShutdownScreen = () => (
  <div className="absolute inset-0 z-50 flex items-center justify-center bg-black p-[15%]">
    <img src={images.shutdown} alt="Shutdown" className="w-full" />
  </div>
);

export default ShutdownScreen;
