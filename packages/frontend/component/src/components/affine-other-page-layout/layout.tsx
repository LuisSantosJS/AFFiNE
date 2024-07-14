import { Logo1Icon } from '@blocksuite/icons/rc';

import { DesktopNavbar } from './desktop-navbar';
import * as styles from './index.css'; //
import { MobileNavbar } from './mobile-navbar';

export const AffineOtherPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // t = useI18n();

  return (
    <div className={styles.root}>
      {environment.isDesktop ? null : (
        <div className={styles.topNav}>
          <a href="/" rel="noreferrer" className={styles.affineLogo}>
            <Logo1Icon width={24} height={24} />
          </a>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      )}

      {children}
    </div>
  );
};
