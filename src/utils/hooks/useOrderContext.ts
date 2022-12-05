import { OrderContext } from 'contexts/OrderContext';
import { useContext } from 'react';

function useOrderContext() {
    const context = useContext(OrderContext);

    if (context === undefined) {
        throw new Error('useOrderContext must be used within a Provider');
    }

    return context;
}

export default useOrderContext;
