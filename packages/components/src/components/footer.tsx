import { Button } from "@workspace/ui/components/button"

export interface FooterProps {
  name: string
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>

      <Button>Test button</Button>
    </footer>
  )
}
