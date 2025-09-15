import React from "react";
import Svg, { Path } from "react-native-svg";
import { Box } from "@/src/components/Box";

type DonutChartProps = {
  data: number[];
  colors: string[];
  radius?: number;
  strokeWidth?: number;
  minAngleDeg?: number;
  gapDeg?: number; // gap in degrees between slices
};

export const DonutChart = ({
  data,
  colors,
  radius = 40,
  strokeWidth = 12,
  minAngleDeg = 1.5,
  gapDeg = 2,
}: DonutChartProps) => {
  const total = data.reduce((a, b) => a + b, 0) || 1;

  const minAngle = (minAngleDeg * Math.PI) / 180;
  const gap = (gapDeg * Math.PI) / 180;
  const fullCircle = Math.PI * 2;

  // raw slice angles
  const rawAngles = data.map((v) => (v / total) * fullCircle);

  // enforce minimum
  let adjustedAngles = rawAngles.map((a) =>
    a > 0 && a < minAngle ? minAngle : a
  );

  // renormalize to fit exactly 2π
  const sumAdjusted = adjustedAngles.reduce((a, b) => a + b, 0);
  adjustedAngles = adjustedAngles.map((a) => (a / sumAdjusted) * fullCircle);

  let currentAngle = -Math.PI / 2; // start at top

  const segments = adjustedAngles.map((angle, i) => {
    const startAngle = currentAngle + gap / 2;
    const endAngle = currentAngle + angle - gap / 2;
    currentAngle += angle;

    const centerX = radius + strokeWidth;
    const centerY = radius + strokeWidth;

    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);

    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    const path = `
      M ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
    `;

    return { path, color: colors[i] ?? "#000" };
  });

  const viewSize = radius * 2 + strokeWidth * 2;

  return (
    <Box alignItems="center" justifyContent="center">
      <Svg width={viewSize} height={viewSize}>
        {segments.map((seg, i) => (
          <Path
            key={i}
            d={seg.path}
            stroke={seg.color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="butt"
          />
        ))}
      </Svg>
    </Box>
  );
};
