import { CircleOff } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <Helmet title="404" />
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <CircleOff className="w-24 h-24" />
        <h1 className="text-4xl font-bold">Página não encontrada</h1>
        <p className="text-accent-foreground">
          Voltar para o{' '}
          <Link to="/" className="text-sky-600 dark:text-sky-400">
            Dashboard
          </Link>
        </p>
      </div>
    </>
  );
}
