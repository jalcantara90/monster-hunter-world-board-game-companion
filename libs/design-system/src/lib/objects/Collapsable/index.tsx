import { ReactNode, useContext, useState } from 'react';
import styles from './Collapsable.module.scss';
import { createContext } from 'react';
import { classNames } from '../../shared/classNames';
import { LeftChevronIcon } from '../../icons/LeftChevronIcon';

type CollapsableContainerProps = {
  children: ReactNode | ReactNode[];
};

function CollapsableContainer({ children }: CollapsableContainerProps) {
  return (
    <CollapsableContextProvider>
      <section className={styles.collapsable}>{children}</section>
    </CollapsableContextProvider>
  );
}

function CollapsableHeader({ children }: CollapsableContainerProps) {
  const { toogleCollapse, isCollapsed } = useCollapsableContext();

  return (
    <div className={styles.collapsable__header}>
      <button
        onClick={toogleCollapse}
        className={classNames(
          styles.collapsable__action,
          styles[
            `collapsable__action--${
              isCollapsed ? 'collapsed' : 'not-collapsed'
            }`
          ]
        )}
      >
        <LeftChevronIcon size="lg" />
      </button>
      {children}
    </div>
  );
}

function CollapsableContent({ children }: CollapsableContainerProps) {
  const { isCollapsed } = useCollapsableContext();

  if (isCollapsed) {
    return <></>;
  }

  return <div className={styles.collapsable__content}>{children}</div>;
}

type ICollapsableContext = {
  isCollapsed: boolean;
  toogleCollapse: () => void;
};

const CollapsableContext = createContext<ICollapsableContext>({
  isCollapsed: false,
  toogleCollapse: () => {
    throw new Error('Ensure that component is wrapped with CollapsableContext');
  },
});

export function CollapsableContextProvider({
  children,
}: CollapsableContainerProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toogleCollapse = () =>
    setIsCollapsed((isCollapsedState) => !isCollapsedState);

  return (
    <CollapsableContext.Provider value={{ isCollapsed, toogleCollapse }}>
      {children}
    </CollapsableContext.Provider>
  );
}

const useCollapsableContext = () => useContext(CollapsableContext);

export const Collapsable = Object.assign(CollapsableContainer, {
  Header: CollapsableHeader,
  Content: CollapsableContent,
});
