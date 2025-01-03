import { isAxiosError } from 'axios';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from '@/components/header';
import { api } from '@/lib/axios';

export function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Adiciona um interceptor para respostas da API
    const interceptorId = api.interceptors.response.use(
      (response) => response, // Retorna a resposta se não houver erro
      (error) => {
        // Verifica se o erro é do tipo AxiosError
        if (isAxiosError(error)) {
          const status = error.response?.status; // Obtém o status da resposta
          const code = error.response?.data.code; // Obtém o código de erro da resposta

          // Se o status for 401 e o código for 'UNAUTHORIZED', redireciona para a página de login
          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true });
          } else {
            throw error; // Lança o erro se não for tratado
          }
        }
      }
    );

    // Limpa o listener do interceptor quando o componente é desmontado
    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet /> {/* Renderiza o conteúdo das rotas filhas */}
      </div>
    </div>
  );
}
