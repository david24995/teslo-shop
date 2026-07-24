import { useRef } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, NavLink, useSearchParams } from 'react-router';
import CustomLogo from '@/components/custom/CustomLogo';
const CustomHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get('query') || '';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const query = inputRef.current?.value;

    const newSearchParams = new URLSearchParams();
    if (!query) {
      newSearchParams.delete('query');
    } else {
      newSearchParams.set('query', query);
      newSearchParams.set('price', 'any');
    }
    setSearchParams(newSearchParams);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <CustomLogo />

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive && 'underline underline-offset-4'} text-sm font-medium transition-colors hover:text-primary`
              }
            >
              Todos
            </NavLink>
            <NavLink
              to="/gender/men"
              className={({ isActive }) =>
                `${isActive && 'underline underline-offset-4'} text-sm font-medium transition-colors hover:text-primary`
              }
            >
              Hombres
            </NavLink>
            <NavLink
              to="/gender/women"
              className={({ isActive }) =>
                `${isActive && 'underline underline-offset-4'} text-sm font-medium transition-colors hover:text-primary`
              }
            >
              Mujeres
            </NavLink>
            <NavLink
              to="/gender/kid"
              className={({ isActive }) =>
                `${isActive && 'underline underline-offset-4'} text-sm font-medium transition-colors hover:text-primary`
              }
            >
              Niños
            </NavLink>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-9 w-64 h-9 bg-white"
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                  defaultValue={query}
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/auth/login">
              <Button variant={'default'} size={'sm'} className="ml-2 ">
                Login
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant={'destructive'} size={'sm'} className="ml-2 ">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default CustomHeader;
