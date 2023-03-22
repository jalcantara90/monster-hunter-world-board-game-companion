import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode | ReactNode[];
};

export function Layout({ children }: LayoutProps) {

  return (
    <>
      LAYOUT
      {children}
    </>
  );
}
