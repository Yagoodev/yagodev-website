import { ReactElement, cloneElement } from "react";

import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

interface NavigateLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function NavigateLink({ children, activeClassName, ...props }: NavigateLinkProps) {

  const { asPath } = useRouter();

  // Verifica se a rota é igual ao href clicado. Caso seja ele reflete no visual com a classe "active".
  const className = asPath === props.href ? activeClassName : "";

  return (
    <Link {...props}>
      {cloneElement(children, {
        className
      })}
    </Link>
  );
}