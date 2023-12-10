"use client";

import { PropsWithChildren, useState } from "react";
import { ThemeRegistry } from "./ThemeRegistry";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
