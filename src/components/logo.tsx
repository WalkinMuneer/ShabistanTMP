import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

const Logo = (props: Omit<ComponentProps<typeof Image>, 'src' | 'alt'>) => (
  <Image
    src="https://lbpekziscapnahysyyag.supabase.co/storage/v1/object/sign/Shabistan/file-removebg-preview(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjUxZDA1Ny1kYjVhLTRkOGQtYjZmNi1kMmU0YTM0Y2QwMGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTaGFiaXN0YW4vZmlsZS1yZW1vdmViZy1wcmV2aWV3KDEpLnBuZyIsImlhdCI6MTc2NTg3NjkxNywiZXhwIjoxNzk3NDEyOTE3fQ.f_bWvxegkgUb1hw7-cNz9KNyfRQiAIo6ayEEtla4hng"
    alt="Shabistan Logo"
    {...props}
  />
);

export default Logo;
