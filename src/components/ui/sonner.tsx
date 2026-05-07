import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-bg-elevated group-[.toaster]:text-fg group-[.toaster]:border-border-strong group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-fg-muted",
          actionButton: "group-[.toast]:bg-accent group-[.toast]:text-bg-base",
          cancelButton: "group-[.toast]:bg-bg-subtle group-[.toast]:text-fg-muted",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
