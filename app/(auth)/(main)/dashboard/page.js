import react from "react";
import CreateAccountDrawer from "@/components/ui/create-account-drawer";
// import {Card,CardContent} from "@/components/ui";

const DashboardPage = () => {
  return (
    <div className="px-5">
    {/* Budget progress */}
    {/* Overview */}
    {/* Account Grid */}
    <div>
      <CreateAccountDrawer>
        {/* <Card>
          <CardContent>
            <Plus className="h-10 w-10 mb-2"/>
          </CardContent>
        </Card> */}
      </CreateAccountDrawer>
    </div>
    </div>
  );
};
export default DashboardPage;