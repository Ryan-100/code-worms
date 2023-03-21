import { Text } from "@/components/LV1";
import { Button } from "@/components/LV2/Button";
import React from "react";
import { useTheme } from "styled-components";

const ProfileComponent = () => {
  const theme = useTheme();
  return (
    <div style={{ color: theme.font }} className="lg:mx-10 mx-4 space-y-4 py-2">
      <Text size="lg">Profile Setting</Text>
      <Text>Profile Info</Text>
      <Text color="font">Username : {"username"}</Text>
      <Text color="font" className="inline-flex">
        D.0.B : {"date"}
      </Text>
      <Text color="font">E-Mail : {"test@gmail.com"}</Text>
      <div className="border border-t-slate-50 border-b-slate-50 border-l-transparent border-r-transparent py-4">
        <Text>
          Subscription status : You are{" "}
          <Text color="primary" className="inline-flex">
            &nbsp;subscribed&nbsp;
          </Text>
          to CW.
        </Text>
      </div>
      <div className="flex justify-between">
        <Button>Update Info</Button>
        <Button variant="outlined">Logout</Button>
      </div>
    </div>
  );
};

export default ProfileComponent;
