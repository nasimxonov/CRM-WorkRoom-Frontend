import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CookieProvider from "./CookieProvider";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CookieProvider>{children}</CookieProvider>
    </QueryClientProvider>
  );
};

export default Providers;
