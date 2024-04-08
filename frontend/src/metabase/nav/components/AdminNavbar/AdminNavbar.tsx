import { useState, useEffect } from "react";
import { t } from "ttag";

import { useSelector } from "metabase/lib/redux";
import { getIsPaidPlan } from "metabase/selectors/settings";
import { Button, Icon } from "metabase/ui";
import type { User } from "metabase-types/api";
import type { AdminPath } from "metabase-types/store";

import StoreLink from "../StoreLink";

import { AdminNavItem } from "./AdminNavItem";
import {
  AdminExitLink,
  AdminLogoContainer,
  AdminLogoLink,
  AdminLogoText,
  AdminNavbarItems,
  AdminNavbarRoot,
  AdminMobileNavbar,
  AdminMobileNavBarItems,
  MobileHide,
} from "./AdminNavbar.styled";

interface AdminNavbarProps {
  path: string;
  user: User;
  adminPaths: AdminPath[];
}

export const AdminNavbar = ({
  path: currentPath,
  adminPaths,
}: AdminNavbarProps) => {
  const isPaidPlain = useSelector(getIsPaidPlan);

  return (
    <AdminNavbarRoot
      data-element-id="navbar-root"
      aria-label={t`Navigation bar`}
    >
      <AdminLogoLink to="/admin">
        <AdminLogoContainer>
          <svg
            width="103"
            height="24"
            viewBox="0 0 103 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4873 2.6727C11.3564 2.75997 10.44 4.18906 9.44726 5.83633L7.63635 8.82542L8.0509 9.73088L8.46544 10.6364L9.87272 8.3127C10.6582 7.03633 11.4327 5.77088 11.5964 5.49815C11.76 5.23633 11.9345 5.02906 11.9891 5.06179C12.0327 5.09451 12.8291 6.34906 13.7564 7.85451L15.4364 10.5927L15.7964 9.81815C15.9927 9.38179 16.1673 8.95633 16.1673 8.85815C16.1782 8.60724 12.8182 3.06542 12.48 2.74906C12.1636 2.46542 11.8145 2.44361 11.4873 2.6727Z"
              fill="white"
            />
            <path
              d="M4.18909 8.82541C3.56727 9.10905 3.24 9.61087 3.18545 10.3745C3.13091 11.16 3.37091 11.6945 3.96 12.0873C4.33091 12.3273 4.52727 12.3818 5.11636 12.3818H5.83636L6.70909 13.1018L7.58181 13.8218L7.63636 16.4836C7.66909 17.9454 7.73454 19.2109 7.77818 19.2873C7.83272 19.3636 8.11636 19.4182 8.50909 19.4182C9.45818 19.4182 9.49091 19.3418 9.49091 17.2145C9.49091 16.2654 9.52363 15.4909 9.55636 15.4909C9.58909 15.4909 9.97091 15.7854 10.4182 16.1454C11.3455 16.8982 11.6727 17.0727 12.0327 16.9745C12.1745 16.9418 12.7527 16.5382 13.32 16.0909L14.3455 15.2618L14.4 17.16C14.4655 19.3854 14.4764 19.4182 15.3382 19.4182C16.2764 19.4182 16.2545 19.4945 16.2545 16.3854V13.6909L17.1055 13.0036C17.9236 12.3491 17.9564 12.3273 18.4473 12.3927C19.1345 12.48 19.7455 12.2945 20.1491 11.8691C20.9345 11.0509 20.9236 9.8945 20.1164 9.14177C18.9382 8.03996 17.0618 8.8145 16.9855 10.44L16.9636 10.9854L14.4655 13.0363C13.08 14.16 11.9018 15.0873 11.8473 15.0982C11.7818 15.1091 10.6364 14.2254 9.30545 13.1454L6.87272 11.1818V10.6691C6.87272 10.0145 6.72 9.63268 6.29454 9.18541C5.73818 8.60723 4.95272 8.47632 4.18909 8.82541ZM5.43272 9.99268C5.72727 10.1891 5.76 10.7454 5.48727 11.04C5.24727 11.3127 4.74545 11.2909 4.47272 10.9963C4.17818 10.68 4.2 10.4073 4.52727 10.0909C4.83272 9.7745 5.08363 9.75268 5.43272 9.99268ZM19.2873 9.99268C19.5818 10.1891 19.6145 10.7454 19.3418 11.04C19.1018 11.3127 18.6 11.2909 18.3273 10.9963C18.0327 10.68 18.0545 10.4073 18.3818 10.0909C18.6873 9.7745 18.9382 9.75268 19.2873 9.99268Z"
              fill="white"
            />
            <path
              d="M11.4873 8.95628C11.1164 9.15264 11.0509 9.51264 11.0618 11.6836C11.0727 13.5272 11.0945 13.7454 11.28 13.9526C11.5854 14.2799 12.2509 14.269 12.6 13.909C12.8727 13.6472 12.8727 13.6363 12.8727 11.5308C12.8727 9.66537 12.8509 9.38173 12.6873 9.17446C12.4582 8.90173 11.8364 8.79264 11.4873 8.95628Z"
              fill="white"
            />
            <path
              d="M4.22182 13.4945C3.99272 13.7673 0.654542 19.2873 0.479997 19.7018C0.294542 20.1491 0.447269 20.7491 0.839997 21.0545C1.11272 21.2727 1.2 21.2727 11.9673 21.2727H22.8218L23.1382 20.9563C23.6291 20.4654 23.5855 19.8873 22.9855 18.9273C22.7345 18.5018 21.8945 17.1163 21.12 15.84C20.3564 14.5636 19.6364 13.4727 19.5273 13.4182C19.2 13.2436 18.6982 13.2873 18.5018 13.5163C18.2073 13.8327 18.2618 14.3127 18.6436 14.9345C18.8291 15.24 18.9818 15.5454 18.9818 15.6C18.9818 15.6654 18.7964 15.7091 18.5673 15.7091C17.7927 15.7091 17.7273 15.8291 17.6945 17.4545C17.64 19.2873 17.7055 19.4182 18.6545 19.4182C19.0473 19.4182 19.3309 19.3636 19.3855 19.2763C19.4291 19.2109 19.4945 18.5454 19.5273 17.8036L19.5818 16.4727L20.5418 18.0109C21.0655 18.8618 21.48 19.5709 21.4582 19.5927C21.4364 19.6145 17.1382 19.6254 11.9127 19.6145L2.41091 19.5818L3.36 18.0545L4.30909 16.5273L4.36363 17.8691C4.42909 19.3963 4.44 19.4182 5.31272 19.4182C6.16363 19.4182 6.24 19.2545 6.19636 17.4654C6.17454 16.5054 6.12 16.0036 6.02182 15.9054C5.94545 15.8291 5.64 15.7418 5.34545 15.7091L4.81091 15.6545L5.18182 15.0545C5.81454 14.0509 5.64 13.3091 4.77818 13.3091C4.54909 13.3091 4.33091 13.3854 4.22182 13.4945Z"
              fill="white"
            />
            <path
              d="M12.72 18.0982C12.6655 18.1746 12.4582 18.3055 12.2618 18.3928C11.9345 18.5237 11.8364 18.5237 11.4982 18.3818C11.28 18.2946 11.0836 18.2183 11.0618 18.2183C10.9418 18.2183 11.04 18.9709 11.1927 19.1782C11.3345 19.3746 11.4655 19.4182 11.9891 19.4182C12.7745 19.4182 12.8945 19.2983 12.8509 18.5238C12.8291 18.1419 12.7855 18 12.72 18.0982Z"
              fill="white"
            />
            <path
              d="M29.216 18V6.79997H31.408V18H29.216ZM33.537 18V6.79997H35.649V18H33.537ZM37.4745 18V6.79997H39.5865V18H37.4745ZM46.692 18L46.564 16.528V9.99997H48.676V18H46.692ZM41.268 14.096V9.99997H43.38V14.096H41.268ZM43.38 14.096C43.38 14.6293 43.4387 15.0507 43.556 15.36C43.684 15.6587 43.86 15.8773 44.084 16.016C44.3187 16.144 44.58 16.208 44.868 16.208C45.4227 16.2187 45.844 16.0533 46.132 15.712C46.42 15.36 46.564 14.8533 46.564 14.192H47.284C47.284 15.0453 47.156 15.7707 46.9 16.368C46.644 16.9547 46.292 17.408 45.844 17.728C45.396 18.0373 44.868 18.192 44.26 18.192C43.62 18.192 43.076 18.064 42.628 17.808C42.18 17.552 41.8387 17.1573 41.604 16.624C41.38 16.08 41.268 15.3813 41.268 14.528V14.096H43.38ZM50.5058 18V9.99997H52.4898L52.5858 11.04C52.8311 10.6347 53.1458 10.3307 53.5298 10.128C53.9138 9.91464 54.3404 9.80797 54.8098 9.80797C55.4604 9.80797 56.0044 9.94664 56.4418 10.224C56.8898 10.5013 57.2151 10.928 57.4178 11.504C57.6524 10.96 57.9831 10.544 58.4097 10.256C58.8364 9.9573 59.3324 9.80797 59.8978 9.80797C60.8364 9.80797 61.5511 10.1067 62.0418 10.704C62.5324 11.2907 62.7778 12.1973 62.7778 13.424V18H60.6658V13.904C60.6658 13.36 60.6071 12.9387 60.4898 12.64C60.3724 12.3413 60.2124 12.128 60.0098 12C59.8071 11.8613 59.5671 11.792 59.2898 11.792C58.7778 11.7813 58.3831 11.9467 58.1058 12.288C57.8284 12.6293 57.6898 13.136 57.6898 13.808V18H55.5778V13.904C55.5778 13.36 55.5191 12.9387 55.4018 12.64C55.2951 12.3413 55.1351 12.128 54.9218 12C54.7191 11.8613 54.4791 11.792 54.2018 11.792C53.6898 11.7813 53.2951 11.9467 53.0178 12.288C52.7511 12.6293 52.6178 13.136 52.6178 13.808V18H50.5058ZM64.5869 18V9.99997H66.6989V18H64.5869ZM65.6429 8.70397C65.3229 8.70397 65.0402 8.58664 64.7949 8.35197C64.5495 8.10664 64.4269 7.81864 64.4269 7.48797C64.4269 7.1573 64.5495 6.87464 64.7949 6.63997C65.0402 6.39464 65.3229 6.27197 65.6429 6.27197C65.9735 6.27197 66.2562 6.39464 66.4909 6.63997C66.7362 6.87464 66.8589 7.1573 66.8589 7.48797C66.8589 7.81864 66.7362 8.10664 66.4909 8.35197C66.2562 8.58664 65.9735 8.70397 65.6429 8.70397ZM68.6464 18V9.99997H70.6304L70.7584 11.472V18H68.6464ZM73.9424 18V13.904H76.0544V18H73.9424ZM73.9424 13.904C73.9424 13.36 73.8784 12.9387 73.7504 12.64C73.633 12.3413 73.4624 12.128 73.2384 12C73.0144 11.8613 72.753 11.792 72.4544 11.792C71.9104 11.7813 71.489 11.9467 71.1904 12.288C70.9024 12.6293 70.7584 13.136 70.7584 13.808H70.0544C70.0544 12.9547 70.177 12.2347 70.4224 11.648C70.6784 11.0507 71.0304 10.5973 71.4784 10.288C71.937 9.96797 72.4704 9.80797 73.0784 9.80797C73.7077 9.80797 74.2464 9.93597 74.6944 10.192C75.1424 10.448 75.4837 10.848 75.7184 11.392C75.953 11.9253 76.065 12.6187 76.0544 13.472V13.904H73.9424ZM81.5001 18.192C80.6895 18.192 79.9641 18.016 79.3241 17.664C78.6948 17.3013 78.1988 16.8053 77.8361 16.176C77.4841 15.5467 77.3081 14.8213 77.3081 14C77.3081 13.1787 77.4841 12.4533 77.8361 11.824C78.1881 11.1947 78.6788 10.704 79.3081 10.352C79.9375 9.9893 80.6575 9.80797 81.4681 9.80797C82.2895 9.80797 83.0148 9.9893 83.6441 10.352C84.2735 10.704 84.7641 11.1947 85.1161 11.824C85.4681 12.4533 85.6441 13.1787 85.6441 14C85.6441 14.8213 85.4681 15.5467 85.1161 16.176C84.7641 16.8053 84.2735 17.3013 83.6441 17.664C83.0255 18.016 82.3108 18.192 81.5001 18.192ZM81.5001 16.24C81.8948 16.24 82.2415 16.144 82.5401 15.952C82.8388 15.76 83.0681 15.4987 83.2281 15.168C83.3988 14.8267 83.4841 14.4373 83.4841 14C83.4841 13.5627 83.3988 13.1787 83.2281 12.848C83.0575 12.5067 82.8175 12.24 82.5081 12.048C82.2095 11.856 81.8628 11.76 81.4681 11.76C81.0841 11.76 80.7375 11.856 80.4281 12.048C80.1295 12.24 79.8948 12.5067 79.7241 12.848C79.5535 13.1787 79.4681 13.5627 79.4681 14C79.4681 14.4373 79.5535 14.8267 79.7241 15.168C79.8948 15.4987 80.1348 15.76 80.4441 15.952C80.7535 16.144 81.1055 16.24 81.5001 16.24ZM92.317 18L92.189 16.528V9.99997H94.301V18H92.317ZM86.893 14.096V9.99997H89.005V14.096H86.893ZM89.005 14.096C89.005 14.6293 89.0637 15.0507 89.181 15.36C89.309 15.6587 89.485 15.8773 89.709 16.016C89.9437 16.144 90.205 16.208 90.493 16.208C91.0477 16.2187 91.469 16.0533 91.757 15.712C92.045 15.36 92.189 14.8533 92.189 14.192H92.909C92.909 15.0453 92.781 15.7707 92.525 16.368C92.269 16.9547 91.917 17.408 91.469 17.728C91.021 18.0373 90.493 18.192 89.885 18.192C89.245 18.192 88.701 18.064 88.253 17.808C87.805 17.552 87.4637 17.1573 87.229 16.624C87.005 16.08 86.893 15.3813 86.893 14.528V14.096H89.005ZM99.1228 18.192C98.6108 18.192 98.1308 18.1173 97.6828 17.968C97.2348 17.808 96.8401 17.584 96.4988 17.296C96.1574 16.9973 95.8908 16.6347 95.6988 16.208L97.5068 15.376C97.6668 15.632 97.8854 15.856 98.1628 16.048C98.4401 16.2293 98.7601 16.32 99.1228 16.32C99.4748 16.32 99.7468 16.272 99.9388 16.176C100.131 16.0693 100.227 15.92 100.227 15.728C100.227 15.536 100.147 15.3973 99.9868 15.312C99.8374 15.216 99.6294 15.136 99.3628 15.072L98.6268 14.88C97.8588 14.6773 97.2508 14.3573 96.8028 13.92C96.3654 13.472 96.1468 12.96 96.1468 12.384C96.1468 11.5627 96.4081 10.928 96.9308 10.48C97.4641 10.032 98.2161 9.80797 99.1868 9.80797C99.6881 9.80797 100.152 9.88264 100.579 10.032C101.016 10.1813 101.389 10.3893 101.699 10.656C102.008 10.9227 102.221 11.232 102.339 11.584L100.595 12.384C100.52 12.1707 100.339 12 100.051 11.872C99.7628 11.7333 99.4748 11.664 99.1868 11.664C98.8988 11.664 98.6748 11.728 98.5148 11.856C98.3654 11.9733 98.2908 12.1387 98.2908 12.352C98.2908 12.4907 98.3654 12.608 98.5148 12.704C98.6641 12.7893 98.8774 12.864 99.1548 12.928L100.195 13.184C100.717 13.312 101.133 13.52 101.443 13.808C101.763 14.0853 101.992 14.4 102.131 14.752C102.28 15.0933 102.355 15.4293 102.355 15.76C102.355 16.24 102.211 16.6667 101.923 17.04C101.645 17.4027 101.261 17.6853 100.771 17.888C100.291 18.0907 99.7414 18.192 99.1228 18.192Z"
              fill="white"
            />
          </svg>
          {/* eslint-disable-next-line no-literal-metabase-strings -- Metabase settings */}
          <AdminLogoText>{t`Admin Page`}</AdminLogoText>
        </AdminLogoContainer>
      </AdminLogoLink>

      <MobileNavbar adminPaths={adminPaths} currentPath={currentPath} />

      <MobileHide>
        <AdminNavbarItems>
          {adminPaths.map(({ name, key, path }) => (
            <AdminNavItem
              name={name}
              path={path}
              key={key}
              currentPath={currentPath}
            />
          ))}
        </AdminNavbarItems>

        {!isPaidPlain && <StoreLink />}
        <AdminExitLink
          to="/"
          data-testid="exit-admin"
        >{t`Exit admin`}</AdminExitLink>
      </MobileHide>
    </AdminNavbarRoot>
  );
};

interface AdminMobileNavbarProps {
  adminPaths: AdminPath[];
  currentPath: string;
}

const MobileNavbar = ({ adminPaths, currentPath }: AdminMobileNavbarProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      const listener = () => setMobileNavOpen(false);
      document.addEventListener("click", listener, { once: true });
      return () => document.removeEventListener("click", listener);
    }
  }, [mobileNavOpen]);

  return (
    <AdminMobileNavbar>
      <Button
        onClick={() => setMobileNavOpen(prev => !prev)}
        variant="subtle"
        p="0.25rem"
      >
        <Icon name="burger" size={32} color="white" />
      </Button>
      {mobileNavOpen && (
        <AdminMobileNavBarItems>
          {adminPaths.map(({ name, key, path }) => (
            <AdminNavItem
              name={name}
              path={path}
              key={key}
              currentPath={currentPath}
            />
          ))}
          <AdminExitLink to="/">{t`Exit admin`}</AdminExitLink>
        </AdminMobileNavBarItems>
      )}
    </AdminMobileNavbar>
  );
};
