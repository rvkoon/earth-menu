import {
  render as reactTestingRender,
  RenderResult,
} from "@testing-library/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { IntlMock } from "./IntlMock";

export function render(children: ReactNode): RenderResult {
  const queryClient = new QueryClient();
  return reactTestingRender(
    <QueryClientProvider client={queryClient}>
      <IntlMock>{children}</IntlMock>
    </QueryClientProvider>
  );
}
