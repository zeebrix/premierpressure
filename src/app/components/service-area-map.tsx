import { useState } from 'react';

const regions = [
  { id: 1, name: 'Northern Coastal', x: 120, y: 60, w: 140, h: 90 },
  { id: 2, name: 'Joondalup', x: 70, y: 40, w: 180, h: 110 },
  { id: 3, name: 'Northern Suburbs', x: 220, y: 130, w: 160, h: 90 },
  { id: 4, name: 'Western & Beach', x: 100, y: 190, w: 130, h: 110 },
  { id: 5, name: 'Eastern Suburbs', x: 290, y: 210, w: 150, h: 90 },
  { id: 6, name: 'Southern Suburbs', x: 190, y: 290, w: 190, h: 130 },
];

export function ServiceAreaMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    null
  );
}
