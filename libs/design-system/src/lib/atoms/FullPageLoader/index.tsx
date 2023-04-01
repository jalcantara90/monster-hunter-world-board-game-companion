import { Ping } from '@uiball/loaders';

import styles from './FullPageLoader.module.scss';

export function FullPageLoader() {
  return (
    <div className={styles.fullPageLoader}>
      <Ping size={45} speed={2} color="#cfee1d" />
    </div>
  );
}
