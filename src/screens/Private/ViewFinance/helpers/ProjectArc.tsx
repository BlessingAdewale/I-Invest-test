import React, { useMemo } from 'react';
import Svg, { Circle } from 'react-native-svg';

import { tokens } from '@/src/constants/tokens';
import { TProject } from '@/src/mock/MockUser';
import { Box } from '@/src/components/Box';

export function useProjectColorMap(projects: TProject[]) {
  const getLuminance = (hex: string) => {
    if (!hex.startsWith('#') || hex.length !== 7) return 1;
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const [rL, gL, bL] = [r, g, b].map((v) =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;
  };

  const usableColors = useMemo(() => {
    return Object.entries(tokens.colors)
      .filter(([_, value]) => {
        const isHex = /^#[0-9A-F]{6}$/i.test(value);
        return isHex && getLuminance(value) < 0.6;
      })
      .map(([_, value]) => value);
  }, []);

  const colorMap = useMemo(() => {
    const map: Record<string, string> = {};
    projects.forEach((project) => {
      const hash = [...project.id].reduce(
        (acc, char) => acc + char.charCodeAt(0),
        0
      );
      const color = usableColors[hash % usableColors.length];
      map[project.id] = color;
    });
    return map;
  }, [projects, usableColors]);

  return colorMap;
}

export const ProjectArc = ({
  projects,
  projectColorMap,
}: {
  projects: TProject[];
  projectColorMap: Record<string, string>;
}) => {
  const radius = 60;
  const strokeWidth = 22;
  const circumference = 2 * Math.PI * radius;

  const totalTarget = projects.reduce(
    (acc, p) => acc + Number(p.target_amount || 0),
    0
  );

  let currentAngle = 0;
  const segments = projects.map((project) => {
    const amount = Number(project.target_amount || 0);
    const percent = totalTarget > 0 ? amount / totalTarget : 0;
    const length = percent * circumference;
    const startAngle = currentAngle;
    currentAngle += percent * 2 * Math.PI;

    return {
      color: projectColorMap[project.id],
      length,
      startAngle,
    };
  });

  return (
    <Box alignItems="center" marginY={32}>
      <Svg
        width={radius * 2 + strokeWidth * 2}
        height={radius * 2 + strokeWidth * 2}
        viewBox={`0 0 ${radius * 2 + strokeWidth * 2} ${radius * 2 + strokeWidth * 2}`}
      >
        {segments.map((segment, index) => {
          const angle = (segment.startAngle * 180) / Math.PI;
          return (
            <Circle
              key={index}
              cx={radius + strokeWidth}
              cy={radius + strokeWidth}
              r={radius}
              stroke={segment.color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={`${segment.length} ${circumference}`}
              strokeDashoffset={0}
              strokeLinecap="butt"
              rotation={angle - 90}
              origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}
            />
          );
        })}
      </Svg>
    </Box>
  );
};
