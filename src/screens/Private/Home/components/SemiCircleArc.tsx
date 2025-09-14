import React from "react";
import Svg, { Path } from "react-native-svg";
import { Box } from "@/src/components/Box";

type SemiCircleArcProps = {
  data: number[];
  colors: string[];
  radius?: number;
  strokeWidth?: number;
  minAngleDeg?: number;
  gapDeg?: number; // 👈 gap in degrees between slices
};

export const SemiCircleArc = ({
  data,
  colors,
  radius = 80,
  strokeWidth = 24,
  minAngleDeg = 1.5,
  gapDeg = 2, // default gap between arcs
}: SemiCircleArcProps) => {
  const total = data.reduce((a, b) => a + b, 0) || 1;

  const minAngle = (minAngleDeg * Math.PI) / 180;
  const gap = (gapDeg * Math.PI) / 180; // gap in radians
  const halfCircle = Math.PI;

  // raw slice angles
  const rawAngles = data.map((v) => (v / total) * halfCircle);

  // enforce minimum
  let adjustedAngles = rawAngles.map((a) =>
    a > 0 && a < minAngle ? minAngle : a
  );

  // renormalize to fit exactly π
  const sumAdjusted = adjustedAngles.reduce((a, b) => a + b, 0);
  adjustedAngles = adjustedAngles.map((a) => (a / sumAdjusted) * halfCircle);

  let currentAngle = -Math.PI; // start left

  const segments = adjustedAngles.map((angle, i) => {
    // leave space for gaps at both ends except first/last
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

  const viewWidth = radius * 2 + strokeWidth * 2;
  const viewHeight = radius + strokeWidth * 2;

  return (
    <Box alignItems="center" marginY={32}>
      <Svg width={viewWidth} height={viewHeight}>
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
