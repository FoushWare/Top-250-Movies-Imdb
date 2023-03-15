import StyledComponentsRegistry from '@/lib/registry';
import ReactQueryWrapper from '../ReactQueryWrapper';
import '../globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}