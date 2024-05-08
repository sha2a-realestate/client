import { SideNavLinks } from '@/constants/sidenav';
import { Link } from '@/navigation';
import { LogOut } from 'lucide-react';
import { Button } from '../ui';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface SideNavProps {}

export function SideNav({}: SideNavProps) {
  return (
    <aside className="fixed pt-[var(--navbar-height)] inset-y-0 start-0 z-10 hidden w-14 flex-col shadow-xl bg-background sm:flex">
      <nav className="flex flex-col items-center gap-8 px-2 sm:py-5">
        {SideNavLinks.map(({ icon: Icon, name, url }) => (
          <TooltipProvider key={url}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={url}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Logout</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
