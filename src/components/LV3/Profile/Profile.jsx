import { Text } from "@/components/LV1";
import { Button } from "@/components/LV2/Button";
import { logout } from "@/service";
import { useGetUserDetailsQuery } from "@/store/modules/user/userModule";
import { useRouter } from "next/router";
import React from "react";
import { useTheme } from "styled-components";

const ProfileComponent = () => {
  const router = useRouter();

  const { data: user, isLoading } = useGetUserDetailsQuery();

  // console.log(user, "user data");
  if (isLoading) return <div>Loading...</div>;
  const theme = useTheme();
  return (
    <div style={{ color: theme.font }} className="lg:mx-10 mx-4 space-y-4 py-2">
      <Text size="lg">Profile Setting</Text>
      <Text>Profile Info</Text>
      <Text color="font">Username : {user?.username}</Text>
      {/* <Text color="font" className="inline-flex">
        D.0.B : {"date"}
      </Text> */}
      <Text color="font">E-Mail : {user?.email}</Text>
      <div className="border border-t-slate-50 border-b-slate-50 border-l-transparent border-r-transparent py-4">
        <Text>
          Subscription status : You are{" "}
          <Text
            color="primary"
            className="inline-flex cursor-pointer"
            onClick={() => router.push("/subscribe")}
          >
            &nbsp;{user?.billing_plan === "0" ? "unsubscribed" : "subscribed"}
            &nbsp;
          </Text>
          to CW.
        </Text>
      </div>
      <div className="flex justify-end">
        <Button variant="outlined" href="/login" onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileComponent;
