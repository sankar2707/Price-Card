import React from "react";
import Cards from "./component/Card";

function App() {
  let result = [
    {
      plan: "Free",
      price: 0,
      user: "Single User",
      isUser: true,
      storage: "5 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      ispublicProjects: true,
      communityAccess: "community Access",
      iscommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: false,
      phoneSupport: "Dedicated Phone Support",
      isphoneSupport: false,
      subDomain: "Free Subdomain",
      issubDomain: false,
      reports: "Monthly Status Reports",
      isreports: false,
    },
    {
      plan: "Plus",
      price: 9,
      user: "5 Users",
      isUser: true,
      storage: "50 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      ispublicProjects: true,
      communityAccess: "community Access",
      iscommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isphoneSupport: true,
      subDomain: "Free Subdomain",
      issubDomain: true,
      reports: "Monthly Status Reports",
      isreports: false,
    },
    {
      plan: "Pro",
      price: 49,
      user: "Unlimited Users",
      isUser: true,
      storage: "150 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      ispublicProjects: true,
      communityAccess: "community Access",
      iscommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isphoneSupport: true,
      subDomain: "Free Subdomain",
      issubDomain: true,
      reports: "Monthly Status Reports",
      isreports: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {result.map((e, i) => {
              return <Cards result={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;