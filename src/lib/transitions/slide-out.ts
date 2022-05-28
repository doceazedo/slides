type SlideProps = {
  duration: number;
  direction: 'left' | 'right';
  easing: (t: number) => number;
};

export const slideOut = (node: Node, props: SlideProps) => {
  const box = node.parentElement?.getBoundingClientRect();
  const width = box?.width || 0;

  return {
    duration: props.duration,
    css: (t: number) => {
      const eased = 1 - parseFloat(props.easing(t).toFixed(8));

      return `
        margin-${props.direction}: -${width * eased}px;
      `;
    },
  };
};
