import { ComponentPropsWithRef, ForwardedRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/_utils/helpers';

import { DistributiveOmit, fixedForwardRef } from '../helpers';

const textStyles = cva('leading-6 [&:not(:first-child)]:mt-6', {
  variants: {
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    italic: {
      true: 'italic',
    },
    strikethrough: {
      true: 'line-through',
    },
    size: {
      xsmall: 'text-xs',
      small: 'text-sm',
      normal: 'text-base',
      large: 'text-xl',
      xlarge: 'text-2xl',
    },
  },
  defaultVariants: {
    align: 'left',
    weight: 'normal',
    italic: false,
    size: 'normal',
  },
});

type TextTag = 'p' | 'div' | 'span';

type TextProps<TAs extends TextTag> = {
  component?: TAs;
} & DistributiveOmit<
  ComponentPropsWithRef<TextTag extends TAs ? 'p' : TAs>,
  'component'
> &
  VariantProps<typeof textStyles>;

const UnwrappedText = <TAs extends TextTag>(
  props: TextProps<TAs>,
  ref: ForwardedRef<any>
) => {
  const {
    component: Component = 'p',
    className,
    children,
    align,
    italic,
    strikethrough,
    size,
    weight,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      ref={ref}
      className={cn(
        textStyles({ className, align, italic, size, strikethrough, weight })
      )}
    >
      {children}
    </Component>
  );
};

export const Text = fixedForwardRef(UnwrappedText);
