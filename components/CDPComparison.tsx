import React from 'react';

interface CDPComparisonProps {
  cdp1: string;
  cdp2: string;
  feature: string;
  comparison: string;
}

const CDPComparison: React.FC<CDPComparisonProps> = ({ cdp1, cdp2, feature, comparison }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h3 className="text-lg font-semibold mb-2">Comparison: {feature}</h3>
      <div className="whitespace-pre-wrap">{comparison}</div>
    </div>
  );
};

export default CDPComparison;

