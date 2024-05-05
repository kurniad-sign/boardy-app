import { ComponentPropsWithRef, ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/_utils/helpers';

import { DistributiveOmit, fixedForwardRef } from '../helpers';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div';
type Distributive<TAs extends HeadingTag> = DistributiveOmit<
  ComponentPropsWithRef<HeadingTag extends TAs ? 'div' : TAs>,
  'component'
>;

type HeadingProps<TAs extends HeadingTag> = {
  component?: TAs;
} & Distributive<TAs> &
  VariantProps<typeof headingVariant>;

const headingVariant = cva('font-semibold scroll-m-20 tracking-tight', {
  variants: {
    variant: {
      ['title-1']: 'text-5xl',
      ['title-2']: 'text-4xl',
      ['title-3']: 'text-3xl',
      ['title-4']: 'text-2xl',
      ['title-5']: 'text-xl',
      base: 'text-base',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    variant: 'base',
    align: 'left',
  },
});

const UnwrappedHeading = <TAs extends HeadingTag>(
  props: HeadingProps<TAs>,
  ref: ForwardedRef<any>
) => {
  const {
    component: Component = 'div',
    className,
    children,
    align,
    variant,
    ...rest
  } = props;
  return (
    <Component
      ref={ref}
      className={cn(headingVariant({ className, variant, align }))}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const Heading = fixedForwardRef(UnwrappedHeading);
