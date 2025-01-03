export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered';

interface IOrderStatus {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
};

export function OrderStatus({ status }: IOrderStatus) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={`h-2 w-2 rounded-full ${(() => {
          switch (status) {
            case 'pending':
              return 'bg-yellow-500';
            case 'canceled':
              return 'bg-rose-500';
            case 'processing':
              return 'bg-blue-500';
            case 'delivering':
              return 'bg-purple-500';
            case 'delivered':
              return 'bg-emerald-500';
            default:
              return 'bg-slate-400';
          }
        })()}`}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
