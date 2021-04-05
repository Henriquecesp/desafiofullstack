import React from "react";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-900">
      <section className="text-gray-400 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">{children}</div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
