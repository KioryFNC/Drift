import type React from "react";
import * as Element from "./styles";
import { useEffect, useState } from "react";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionContainer({
  id,
  className,
  children,
}: SectionContainerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById(id);
    if (section) observer.observe(section);

    return () => {
      if (section) observer.observe(section);
    };
  }, [id]);

  return (
    <Element.Section id={id} className={className}>
      <Element.Container $visible={visible}>{children}</Element.Container>
    </Element.Section>
  );
}
