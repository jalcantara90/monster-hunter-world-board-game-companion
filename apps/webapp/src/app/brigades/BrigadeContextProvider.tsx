import { createContext, ReactNode, useContext } from 'react';
import { Brigade } from './domain/Brigade';
import { BrigadeRepository } from './domain/BrigadeRepository';
import { BrigadeHttpRepository } from './infrastructure/BrigadeHttpRepository';

type BrigadeContextProps = {
  brigadeRepository: BrigadeRepository;
};

class BrigadeRepositoryStub implements BrigadeRepository {
  findAll(): Promise<Brigade[]> {
    throw new Error(
      'You mast to wrap this component with BrigadeContextProvider'
    );
  }
  find(): Promise<Brigade[]> {
    throw new Error(
      'You mast to wrap this component with BrigadeContextProvider'
    );
  }
  create(): Promise<Brigade> {
    throw new Error(
      'You mast to wrap this component with BrigadeContextProvider'
    );
  }
  update(): Promise<Brigade> {
    throw new Error(
      'You mast to wrap this component with BrigadeContextProvider'
    );
  }
  delete(): Promise<void> {
    throw new Error(
      'You mast to wrap this component with BrigadeContextProvider'
    );
  }
}

const BrigadeContext = createContext<BrigadeContextProps>({
  brigadeRepository: new BrigadeRepositoryStub(),
});

export function BrigadeContextProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const brigadeRepository = new BrigadeHttpRepository();

  return (
    <BrigadeContext.Provider value={{ brigadeRepository }}>
      {children}
    </BrigadeContext.Provider>
  );
}

export const useBrigadeContext = () => useContext(BrigadeContext);
