import React from 'react'

type Props = {
  children?: React.ReactNode;
};

export function Title({ children }: Props) {
  return <h3>{children}</h3>;
}

export function Answer({ children }: Props) {
  return (
    <details >
      <div >{children}</div>
      <summary >Answer</summary>
    </details>
  );
}

export function Question({ children }: Props) {
  return <article >{children}</article>;
}
