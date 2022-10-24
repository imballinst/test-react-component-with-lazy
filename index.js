import React from "react";

export default function Test({ importPath }) {
  const Component = React.lazy(() => {
    console.info("Attempting to import", `@test-components/${importPath}`);
    return import(`@test-components/${importPath}`).catch(() => {
      console.error("Component not found");
      return { default: () => <div>Component not found</div> };
    });
  });

  return (
    <Component numberProp={1} stringProp="helloworld">
      Test children prop
    </Component>
  );
}
