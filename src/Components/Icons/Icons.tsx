import React, { FunctionComponent } from 'react';

export const PlusIcon: FunctionComponent = () => {
  return (
    <svg viewBox="0 0 122.88 122.88" className="plusIcon" >
      <path d="M4.52,48.12h43.6V4.52c0-2.48,2.04-4.52,4.52-4.52h17.59c2.49,0,4.52,2.04,4.52,4.52v43.6h43.6 c2.49,0,4.52,2.04,4.52,4.52v17.59c0,2.48-2.04,4.52-4.52,4.52h-43.6v43.6c0,2.49-2.04,4.52-4.52,4.52H52.65 c-2.48,0-4.52-2.04-4.52-4.52v-43.6H4.52C2.04,74.76,0,72.72,0,70.23V52.65C0,50.16,2.04,48.12,4.52,48.12L4.52,48.12z"/>
    </svg>
  )
}

export const MinusIcon: FunctionComponent = () => {
  return (
    <svg viewBox="0 0 122.88 26.63"  className="minusIcon" >
      <path d="M4.52,0h113.83c2.49,0,4.52,2.04,4.52,4.52v17.59c0,2.48-2.04,4.52-4.52,4.52H4.52C2.04,26.63,0,24.6,0,22.11 V4.52C0,2.04,2.04,0,4.52,0L4.52,0z"/>
    </svg>
  )
}