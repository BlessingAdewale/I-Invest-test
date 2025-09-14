import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import Svg, {
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  Polygon,
  LinearGradient,
} from "react-native-svg";
import { Box } from "@/src/components/Box";
import { Typography } from "@/src/components/Typography";
import { tokens } from "@/src/constants/tokens";

const { width } = Dimensions.get("window");
const SIZE = width * 0.7;
const STROKE_WIDTH = 28;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CENTER = SIZE / 2;

type PortfolioItem = {
  label: string;
  percentage: number;
};

const portfolioData: PortfolioItem[] = [
  { label: "NG Stocks", percentage: 20 },
  { label: "Mutual Funds", percentage: 25 },
  { label: "Stocks", percentage: 30 },
  { label: "Bonds", percentage: 25 },
  { label: "ETFs", percentage: 25 },
];

const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
};

const describeSegment = (
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number
) => {
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle);

  const startInner = polarToCartesian(cx, cy, innerR, startAngle);
  const endInner = polarToCartesian(cx, cy, innerR, endAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    startOuter.x,
    startOuter.y,
    "A",
    outerR,
    outerR,
    0,
    largeArcFlag,
    0,
    endOuter.x,
    endOuter.y,
    "L",
    startInner.x,
    startInner.y,
    "A",
    innerR,
    innerR,
    0,
    largeArcFlag,
    1,
    endInner.x,
    endInner.y,
    "Z",
  ].join(" ");
};

const PortfolioWheel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = portfolioData[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Find mid angles of all slices
  const sliceAngles = portfolioData.map((item, i) => {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += (portfolioData[j].percentage / total) * 360;
    }
    const angle = (portfolioData[i].percentage / total) * 360;
    return sum + angle / 2; // mid angle
  });

  // active mid
  const activeMid = sliceAngles[activeIndex];

  // opposite target angle
  const target = (activeMid + 180) % 360;

  // find closest slice
  let oppositeIndex = 0;
  let minDiff = Infinity;
  sliceAngles.forEach((angle, i) => {
    const diff = Math.min(
      Math.abs(angle - target),
      360 - Math.abs(angle - target)
    );
    if (diff < minDiff) {
      minDiff = diff;
      oppositeIndex = i;
    }
  });

  const total = portfolioData.reduce((a, b) => a + b.percentage, 0);
  const gapDeg = 1;

  let currentAngle = 0;

  const dashedRadius = (SIZE * 0.55) / 2;
  const arrowRadius = (RADIUS + dashedRadius) / 2 - 10;
  const innerRadius = RADIUS - STROKE_WIDTH;

  let angleSoFar = 0;
  for (let i = 0; i < activeIndex; i++) {
    angleSoFar += (portfolioData[i].percentage / total) * 360;
  }
  const activeAngle = (portfolioData[activeIndex].percentage / total) * 360;
  const midAngle = angleSoFar + activeAngle / 2;

  const correctedAngle = midAngle - 90;
  const arrowPos = polarToCartesian(
    CENTER,
    CENTER,
    arrowRadius,
    correctedAngle
  );

  const arrowRotation = correctedAngle + 90;

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      style={{ width: SIZE, height: SIZE }}
    >
      <Svg width={SIZE} height={SIZE}>
        <Defs>
          <LinearGradient id="verticalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop
              offset="0%"
              stopColor={tokens.colors.color1}
              stopOpacity="1"
            />
            <Stop
              offset="50%"
              stopColor={tokens.colors.color2}
              stopOpacity="1"
            />
            <Stop
              offset="100%"
              stopColor={tokens.colors.color3}
              stopOpacity="1"
            />
          </LinearGradient>
          <LinearGradient id="inactiveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#E2E2E2" />
            <Stop offset="40%" stopColor="#cccbcbff" />
            <Stop offset="100%" stopColor="#E2E2E2" />
          </LinearGradient>
        </Defs>

        <G rotation="-90" origin={`${CENTER}, ${CENTER}`}>
          {portfolioData.map((item, index) => {
            const angle = (item.percentage / total) * 360;
            const startAngle = currentAngle + gapDeg / 2;
            const endAngle = currentAngle + angle - gapDeg / 2;
            currentAngle += angle;

            if (endAngle <= startAngle) return null;

            // extend active arc radius by +6
            const outerR = index === activeIndex ? RADIUS + 6 : RADIUS;

            const path = describeSegment(
              CENTER,
              CENTER,
              outerR,
              innerRadius,
              startAngle,
              endAngle
            );

            return (
              <Path
                key={index}
                d={path}
                fill={
                  index === activeIndex
                    ? "url(#verticalGrad)"
                    : "url(#inactiveGrad)"
                }
              />
            );
          })}
        </G>
      </Svg>
      <Box
        position="absolute"
        alignItems="center"
        justifyContent="center"
        style={{
          width: SIZE * 0.55,
          height: SIZE * 0.55,
          borderStyle: "dashed",
          borderWidth: 1,
          borderRadius: (SIZE * 0.55) / 2,
          borderColor: "#94A3B8",
        }}
      >
        <Typography
          variant="EncodeSansSemiExpandedEmphasisBold16"
          color="globalDark"
        >
          {activeItem.label}
        </Typography>
        <Typography variant="latoBodyRegular14" color="textTertiaryLightDark">
          {activeItem.percentage}%
        </Typography>
      </Box>

      <Svg
        width={14}
        height={6}
        viewBox="0 -3 14 6"
        style={{
          position: "absolute",
          left: arrowPos.x - 7,
          top: arrowPos.y - 3,
          transform: [{ rotate: `${arrowRotation - 90}deg` }],
        }}
      >
        <Polygon points="7,-3 12,3 2,3" fill={tokens.colors.globalDark} />
      </Svg>
    </Box>
  );
};

export default PortfolioWheel;
