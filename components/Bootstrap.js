import { useRouter } from "next/router";
import { useEffect } from "react";

export const Container = ({ children, className }) => (
  <div
    className={`container ${className ? className : ""}`}
  >
    {children}
  </div>
);

export const Row = ({ children, center, classNames }) => {
  let classes = ["row"];
  if (center) {
    classes.push("center");
  }
  if (classNames) {
    classNames.map((item) => classes.push(item));
  }
  return (
    <div className={classes.join(" ")}>{children}</div>
  );
};

export const Col = ({
  children,
  lg,
  md,
  sm,
  className,
}) => {
  const col_data = []
    .concat(lg ? `col-lg-${lg}` : "")
    .concat(md ? `col-md-${md}` : "")
    .concat(sm ? `col-sm-${sm}` : "")
    .concat(className ?? className);
  return (
    <div className={col_data.join(" ")}>{children}</div>
  );
};

export const NavBar = ({ children, opacity }) => {
  const pathname = useRouter().pathname;

  return (
    <nav
      className={`navbar navbar-expand-lg customnavbar navbar-light header`}
    >
      <Container className="jscustom">{children}</Container>
    </nav>
  );
};

export const NotFoundPosts = () => {
  return <div className="not_found">{lang.not_found}</div>;
};
